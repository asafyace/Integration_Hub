import express from "express";
import cors from "cors";
import fetch from "node-fetch";
import { load } from "cheerio";
import NodeCache from "node-cache";

const cache = new NodeCache({ stdTTL: 3600 }); // Cache for 1 hour

const app = express();
app.use(cors());

async function fetchAwsBackupUpdates() {
  const cacheKey = "aws-backup-updates";
  const cachedData = cache.get(cacheKey);
  
  if (cachedData) {
    return cachedData;
  }

  try {
    const response = await fetch("https://docs.aws.amazon.com/aws-backup/latest/devguide/doc-history.html");
    const html = await response.text();
    const $ = load(html);
    
    const updates = [];
    $("div.table-contents table tbody tr").each((i, elem) => {
      const columns = $(elem).find("td");
      if (columns.length >= 2) {
        const date = $(columns[0]).text().trim();
        const description = $(columns[1]).text().trim();
        updates.push({ date, description });
      }
    });

    if (updates.length > 0) {
      const latestUpdate = updates[0];
      const result = {
        lastUpdated: new Date(latestUpdate.date).toISOString(),
        updateInfo: latestUpdate.description
      };
      
      cache.set(cacheKey, result);
      return result;
    }
  } catch (error) {
    console.error("Error fetching AWS Backup updates:", error);
    throw error;
  }
}

app.get("/api/aws-backup/latest-update", async (req, res) => {
  try {
    const data = await fetchAwsBackupUpdates();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch AWS Backup update info" });
  }
});

export default fetchAwsBackupUpdates;