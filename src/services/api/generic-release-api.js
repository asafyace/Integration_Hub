// Generic release API loader for all service update fetchers

import * as awsBackup from "../aws-fetcher/aws-backup-release-api.js";
import * as apprunner from "../aws-fetcher/apprunner-release-api.js";
// Add more imports as needed for other services

const fetchers = {
  "aws-app-runner": apprunner.default || apprunner,
  "aws-backup": awsBackup.default || awsBackup,
  // Add more mappings as needed
};

async function fetchAllUpdates() {
  const results = {};
  for (const [service, fetcher] of Object.entries(fetchers)) {
    try {
      results[service] = await fetcher();
    } catch (err) {
      results[service] = { error: err.message };
    }
  }
  return results;
}

// If run directly, print all updates
if (
  import.meta.url === process.argv[1] ||
  import.meta.url === `file://${process.argv[1]}`
) {
  fetchAllUpdates().then((results) => {
    console.log(JSON.stringify(results, null, 2));
  });
}

export { fetchAllUpdates };
