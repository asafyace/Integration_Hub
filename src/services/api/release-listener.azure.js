import express from "express";
import * as cheerio from "cheerio";
import fetch from "node-fetch";

const azureRouter = express.Router();

// Azure Data Factory
azureRouter.get("/azure-data-factory/latest-update", async (req, res) => {
  try {
    const mdUrl =
      "https://raw.githubusercontent.com/MicrosoftDocs/azure-docs/main/articles/data-factory/whats-new.md";
    const mdResponse = await fetch(mdUrl);
    if (!mdResponse.ok) {
      return res.status(mdResponse.status).json({
        error: `Failed to fetch Azure Data Factory what's new markdown: HTTP ${mdResponse.status}`,
      });
    }
    const mdText = await mdResponse.text();
    const lines = mdText.split(/\r?\n/);
    let lastUpdated = null;
    let updateInfo = [];
    let foundSection = false;
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i].trim();
      if (
        !foundSection &&
        (/^##?\s*[A-Za-z]+\s+\d{4}/.test(line) ||
          /^[A-Za-z]+\s+\d{4}$/.test(line))
      ) {
        lastUpdated = line.replace(/^#+\s*/, "").trim();
        foundSection = true;
        continue;
      }
      if (foundSection) {
        if (
          /^##?\s*[A-Za-z]+\s+\d{4}/.test(line) ||
          /^[A-ZaZ]+\s+\d{4}$/.test(line)
        ) {
          break;
        }
        if (line.startsWith("-") || line.startsWith("*")) {
          updateInfo.push(line.replace(/^[-*]\s*/, "").trim());
        }
      }
    }
    if (!lastUpdated || updateInfo.length === 0) {
      return res.status(404).json({
        error: "No updates found in Azure Data Factory what's new markdown.",
      });
    }
    let isoDate = lastUpdated;
    try {
      const dateMatch = lastUpdated.match(/([A-Za-z]+)\s+(\d{4})/);
      if (dateMatch) {
        const dateObj = new Date(`${dateMatch[1]} 1, ${dateMatch[2]}`);
        if (!isNaN(dateObj.getTime())) {
          isoDate = dateObj.toISOString();
        }
      }
    } catch (e) {
      isoDate = lastUpdated;
    }
    res.json({
      lastUpdated: isoDate,
      updateInfo: updateInfo.join("\n"),
    });
  } catch (err) {
    res
      .status(500)
      .json({ error: "Failed to fetch Azure Data Factory update info" });
  }
});

// Azure Backup
azureRouter.get("/azure-backup/latest-update", async (req, res) => {
  try {
    const mdUrl = "https://raw.githubusercontent.com/MicrosoftDocs/azure-docs/main/articles/backup/whats-new.md";
    const mdResponse = await fetch(mdUrl);
    if (!mdResponse.ok) {
      console.error("[Azure Backup] Fetch failed", mdResponse.status, mdResponse.statusText);
      return res.status(mdResponse.status).json({
        error: `Failed to fetch Azure Backup what's new markdown: HTTP ${mdResponse.status}`,
      });
    }
    const mdText = await mdResponse.text();
    const lines = mdText.split(/\r?\n/);
    let lastUpdated = null;
    let updateInfo = null;
    let foundSection = false;
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      // Find the first section header (## or #) with a month and year
      if (!foundSection && (/^##?\s*[A-Za-z]+\s+\d{4}/.test(line.trim()) || /^[A-Za-z]+\s+\d{4}$/.test(line.trim()))) {
        lastUpdated = line.replace(/^#+\s*/, "").trim();
        foundSection = true;
        continue;
      }
      if (foundSection) {
        // Stop at the next section header
        if (/^##?\s*[A-Za-z]+\s+\d{4}/.test(line.trim()) || /^[A-ZaZ]+\s+\d{4}$/.test(line.trim())) {
          break;
        }
        // Only collect the first indented bullet (sub-bullet) after the section header
        if (/^\s{2,}[-*]\s+/.test(line)) {
          // Remove leading spaces, dash/star, and one space
          updateInfo = line.replace(/^\s*[-*]\s+/, "").trim();
          break;
        }
      }
    }
    if (!lastUpdated || !updateInfo) {
      console.error("[Azure Backup] No updates found", { lastUpdated, updateInfo });
      return res.status(404).json({
        error: "No updates found in Azure Backup what's new markdown.",
      });
    }
    let isoDate = lastUpdated;
    try {
      const dateMatch = lastUpdated.match(/([A-Za-z]+)\s+(\d{4})/);
      if (dateMatch) {
        const dateObj = new Date(`${dateMatch[1]} 1, ${dateMatch[2]}`);
        if (!isNaN(dateObj.getTime())) {
          isoDate = dateObj.toISOString();
        }
      }
    } catch (e) {
      isoDate = lastUpdated;
    }
    res.json({
      lastUpdated: isoDate,
      updateInfo: updateInfo,
    });
  } catch (err) {
    console.error("[Azure Backup] Exception", err);
    res.status(500).json({ error: "Failed to fetch Azure Backup update info" });
  }
});

// Azure Batch
azureRouter.get("/azure-batch/latest-update", async (req, res) => {
  try {
    const mdUrl =
      "https://raw.githubusercontent.com/MicrosoftDocs/azure-docs/main/articles/batch/whats-new.md";
    const result = await fetchAzureMarkdownUpdates(mdUrl);
    res.json(result);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch Azure Batch update info" });
  }
});

// Azure Container Instances
azureRouter.get(
  "/azure-container-instances/latest-update",
  async (req, res) => {
    try {
      const mdUrl =
        "https://raw.githubusercontent.com/MicrosoftDocs/azure-docs/main/articles/container-instances/release-notes.md";
      const result = await fetchAzureMarkdownUpdates(mdUrl);
      res.json(result);
    } catch (err) {
      res.status(500).json({
        error: "Failed to fetch Azure Container Instances update info",
      });
    }
  }
);

// Azure DevOps
azureRouter.get("/azure-devops/latest-update", async (req, res) => {
  try {
    const mdUrl =
      "https://raw.githubusercontent.com/MicrosoftDocs/azure-docs/main/articles/devops/release-notes/index.md";
    const result = await fetchAzureMarkdownUpdates(mdUrl);
    res.json(result);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch Azure DevOps update info" });
  }
});

// Azure Functions
azureRouter.get("/azure-functions/latest-update", async (req, res) => {
  try {
    const mdUrl =
      "https://raw.githubusercontent.com/MicrosoftDocs/azure-docs/main/articles/azure-functions/release-notes.md";
    const result = await fetchAzureMarkdownUpdates(mdUrl);
    res.json(result);
  } catch (err) {
    res
      .status(500)
      .json({ error: "Failed to fetch Azure Functions update info" });
  }
});

// Azure HDInsight
azureRouter.get("/azure-hdinsight/latest-update", async (req, res) => {
  try {
    const mdUrl =
      "https://raw.githubusercontent.com/MicrosoftDocs/azure-docs/main/articles/hdinsight/whats-new.md";
    const result = await fetchAzureMarkdownUpdates(mdUrl);
    res.json(result);
  } catch (err) {
    res
      .status(500)
      .json({ error: "Failed to fetch Azure HDInsight update info" });
  }
});

// Azure Logic Apps
azureRouter.get("/azure-logic-apps/latest-update", async (req, res) => {
  try {
    const mdUrl =
      "https://raw.githubusercontent.com/MicrosoftDocs/azure-docs/main/articles/logic-apps/release-notes.md";
    const result = await fetchAzureMarkdownUpdates(mdUrl);
    res.json(result);
  } catch (err) {
    res
      .status(500)
      .json({ error: "Failed to fetch Azure Logic Apps update info" });
  }
});

// Azure Machine Learning
azureRouter.get("/azure-machine-learning/latest-update", async (req, res) => {
  try {
    const mdUrl =
      "https://raw.githubusercontent.com/MicrosoftDocs/azure-docs/main/articles/machine-learning/release-notes.md";
    const result = await fetchAzureMarkdownUpdates(mdUrl);
    res.json(result);
  } catch (err) {
    res
      .status(500)
      .json({ error: "Failed to fetch Azure Machine Learning update info" });
  }
});

// Azure Resource Management
azureRouter.get(
  "/azure-resource-management/latest-update",
  async (req, res) => {
    try {
      const mdUrl =
        "https://raw.githubusercontent.com/MicrosoftDocs/azure-docs/main/articles/azure-resource-manager/whats-new.md";
      const result = await fetchAzureMarkdownUpdates(mdUrl);
      res.json(result);
    } catch (err) {
      res.status(500).json({
        error: "Failed to fetch Azure Resource Management update info",
      });
    }
  }
);

// Utility function for markdown fetch/parse
async function fetchAzureMarkdownUpdates(mdUrl) {
  const mdResponse = await fetch(mdUrl);
  if (!mdResponse.ok) {
    throw new Error(`Failed to fetch markdown: HTTP ${mdResponse.status}`);
  }
  const mdText = await mdResponse.text();
  const lines = mdText.split(/\r?\n/);
  let lastUpdated = null;
  let updateInfo = [];
  let foundSection = false;
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();
    if (
      !foundSection &&
      (/^##?\s*[A-Za-z]+\s+\d{4}/.test(line) ||
        /^[A-Za-z]+\s+\d{4}$/.test(line))
    ) {
      lastUpdated = line.replace(/^#+\s*/, "").trim();
      foundSection = true;
      continue;
    }
    if (foundSection) {
      if (
        /^##?\s*[A-Za-z]+\s+\d{4}/.test(line) ||
        /^[A-ZaZ]+\s+\d{4}$/.test(line)
      ) {
        break;
      }
      if (line.startsWith("-") || line.startsWith("*")) {
        updateInfo.push(line.replace(/^[-*]\s*/, "").trim());
      }
    }
  }
  if (!lastUpdated || updateInfo.length === 0) {
    throw new Error("No updates found in markdown.");
  }
  let isoDate = lastUpdated;
  try {
    const dateMatch = lastUpdated.match(/([A-Za-z]+)\s+(\d{4})/);
    if (dateMatch) {
      const dateObj = new Date(`${dateMatch[1]} 1, ${dateMatch[2]}`);
      if (!isNaN(dateObj.getTime())) {
        isoDate = dateObj.toISOString();
      }
    }
  } catch (e) {
    isoDate = lastUpdated;
  }
  return {
    lastUpdated: isoDate,
    updateInfo: updateInfo.join("\n"),
  };
}

export default azureRouter;
