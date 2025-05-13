import express from 'express';
import cors from 'cors';
import cron from 'node-cron';
import cache from '../cache';
import { fetchAwsAppRunnerUpdates } from '../aws-app-runner';
import { fetchAirbyteUpdates } from '../airbyte';
import { fetchAzureBackupUpdates } from '../azure-backup';

const app = express();
app.use(cors());

// Function to update all service data
async function updateAllServices() {
  try {
    const services = [
      { name: 'aws-app-runner', fetcher: fetchAwsAppRunnerUpdates },
      { name: 'airbyte', fetcher: fetchAirbyteUpdates },
      { name: 'azure-backup', fetcher: fetchAzureBackupUpdates }
    ];

    for (const service of services) {
      try {
        const data = await service.fetcher();
        cache.set(service.name, data);
        console.log(`Updated ${service.name} data`);
      } catch (error) {
        console.error(`Failed to update ${service.name}:`, error);
      }
    }
  } catch (error) {
    console.error('Failed to update services:', error);
  }
}

// Schedule updates every 6 hours
cron.schedule('0 */6 * * *', updateAllServices);

// Initialize cache on startup
updateAllServices();

// API endpoints
app.get('/api/updates', (req, res) => {
  const updates = cache.getAll();
  res.json(updates);
});

app.get('/api/updates/:service', (req, res) => {
  const update = cache.get(req.params.service);
  if (update) {
    res.json(update);
  } else {
    res.status(404).json({ error: 'Service not found' });
  }
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`API running on port ${PORT}`));