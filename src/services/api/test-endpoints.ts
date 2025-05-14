import { fetchUpdateInfo } from './updateService';

async function testEndpoints() {
  console.log('Testing AWS App Runner updates...');
  try {
    const appRunnerUpdate = await fetchUpdateInfo('aws-app-runner');
    console.log('AWS App Runner response:', appRunnerUpdate);
  } catch (error) {
    console.error('Error fetching AWS App Runner updates:', error);
  }

  console.log('\nTesting AWS Backup updates...');
  try {
    const backupUpdate = await fetchUpdateInfo('aws-backup');
    console.log('AWS Backup response:', backupUpdate);
  } catch (error) {
    console.error('Error fetching AWS Backup updates:', error);
  }
}

testEndpoints();