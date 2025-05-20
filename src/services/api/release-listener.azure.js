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
          /^[A-Za-z]+\s+\d{4}$/.test(line)
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

export default azureRouter;
