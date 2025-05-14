import NodeCache from 'node-cache';

// Cache configuration (30 minutes TTL)
const cache = new NodeCache({ stdTTL: 1800 });

interface UpdateInfo {
  lastUpdated: string;
  updateInfo: string;
}

const RETRY_ATTEMPTS = 3;
const RETRY_DELAY = 1000; // 1 second

async function delay(ms: number): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function fetchWithRetry(url: string, attempts: number = RETRY_ATTEMPTS): Promise<UpdateInfo> {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    if (attempts <= 1) throw error;
    await delay(RETRY_DELAY);
    return fetchWithRetry(url, attempts - 1);
  }
}

export async function fetchUpdateInfo(integrationId: string): Promise<UpdateInfo | null> {
  // Check cache first
  const cachedData = cache.get<UpdateInfo>(integrationId);
  if (cachedData) {
    return cachedData;
  }

  try {
    const baseUrl = 'http://localhost:4000/api';
    let url: string;

    // Special handling for specific integrations
    if (integrationId === 'aws-app-runner') {
      url = `${baseUrl}/aws-app-runner/latest-update`;
    } else if (integrationId === 'aws-backup') {
      url = `${baseUrl}/aws-backup/latest-update`;
    } else {
      url = `${baseUrl}/updates/${integrationId}`;
    }

    const data = await fetchWithRetry(url);
    
    // Cache the successful response
    cache.set(integrationId, data);
    
    return data;
  } catch (error) {
    console.error(`Error fetching update info for ${integrationId}:`, error);
    return null;
  }
}

export async function fetchBatchUpdateInfo(integrationIds: string[]): Promise<Record<string, UpdateInfo | null>> {
  // Check cache for all IDs first
  const results: Record<string, UpdateInfo | null> = {};
  const uncachedIds: string[] = [];

  integrationIds.forEach(id => {
    const cachedData = cache.get<UpdateInfo>(id);
    if (cachedData) {
      results[id] = cachedData;
    } else {
      uncachedIds.push(id);
    }
  });

  // Fetch uncached data in parallel with concurrency control
  const BATCH_SIZE = 5;
  for (let i = 0; i < uncachedIds.length; i += BATCH_SIZE) {
    const batch = uncachedIds.slice(i, i + BATCH_SIZE);
    const promises = batch.map(id => fetchUpdateInfo(id));
    
    const batchResults = await Promise.allSettled(promises);
    
    batchResults.forEach((result, index) => {
      const id = batch[index];
      if (result.status === 'fulfilled') {
        results[id] = result.value;
      } else {
        results[id] = null;
      }
    });
  }

  return results;
}