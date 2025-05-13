import { ServiceUpdate } from '../types';

export async function fetchAzureBackupUpdates(): Promise<ServiceUpdate> {
  try {
    const response = await fetch('https://raw.githubusercontent.com/MicrosoftDocs/azure-docs/main/articles/backup/whats-new.md');
    if (!response.ok) throw new Error('Failed to fetch Azure Backup updates');
    
    const content = await response.text();
    const lines = content.split('\n');
    
    // Find the first date line and update content
    let releaseDate = new Date().toISOString();
    let summary = '';
    
    for (let i = 0; i < lines.length; i++) {
      if (lines[i].match(/##\s+\w+\s+\d{4}/)) {
        releaseDate = new Date(lines[i].replace('##', '').trim()).toISOString();
        if (lines[i + 1]) {
          summary = lines[i + 1].trim();
          break;
        }
      }
    }
    
    return {
      serviceName: "Azure Backup",
      releaseDate,
      summary,
      documentationUrl: "https://learn.microsoft.com/en-us/azure/backup/",
      category: "Azure"
    };
  } catch (error) {
    throw new Error(`Failed to fetch Azure Backup updates: ${error.message}`);
  }
}