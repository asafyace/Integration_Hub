import express from "express";
import cors from "cors";
import fetch from "node-fetch";
import xml2js from "xml2js";

const app = express();
app.use(cors());

app.get("/api/aws-app-runner/latest-update", async (req, res) => {
  try {
    const rssUrl =
      "https://docs.aws.amazon.com/apprunner/latest/relnotes/aws-apprunner-release-notes.rss";
    const rssResponse = await fetch(rssUrl);
    const rssText = await rssResponse.text();
    const parser = new xml2js.Parser();
    const rss = await parser.parseStringPromise(rssText);
    const items = rss.rss.channel[0].item;
    if (!items || items.length === 0) {
      return res.status(404).json({ error: "No updates found in RSS feed." });
    }
    const latest = items[0];
    const updateTitle = latest.title[0];
    const updateDescription = latest.description[0];
    const updateDate = latest.pubDate[0];
    res.json({
      lastUpdated: new Date(updateDate).toISOString(),
      updateInfo: updateTitle + ": " + updateDescription,
    });
  } catch (err) {
    res
      .status(500)
      .json({ error: "Failed to fetch AWS App Runner update info" });
  }
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`API running on port ${PORT}`));

// AWS App Runner Release API mock

export default async function fetchAwsAppRunnerUpdates() {
  // Simulate fetching AWS App Runner release notes or updates
  return {
    service: "aws-app-runner",
    updates: [
      {
        date: "2025-05-10",
        title: "Auto-scaling improvements",
        description:
          "App Runner now supports more granular auto-scaling policies.",
      },
      {
        date: "2025-04-20",
        title: "New regions supported",
        description: "App Runner is now available in additional AWS regions.",
      },
    ],
  };
}
