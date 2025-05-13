import { ServiceUpdate } from '../types';

export async function fetchAirbyteUpdates(): Promise<ServiceUpdate> {
  try {
    const response = await fetch('https://api.github.com/repos/airbytehq/airbyte/releases/latest');
    if (!response.ok) throw new Error('Failed to fetch Airbyte releases');
    
    const data = await response.json();
    
    return {
      serviceName: "Airbyte",
      version: data.tag_name,
      releaseDate: new Date(data.published_at).toISOString(),
      summary: data.body.split('\n')[0], // First line of release notes
      documentationUrl: "https://docs.airbyte.com/",
      category: "Data Integration"
    };
  } catch (error) {
    throw new Error(`Failed to fetch Airbyte updates: ${error.message}`);
  }
}