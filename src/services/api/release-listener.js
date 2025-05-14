import express from "express";
import cors from "cors";
import fetch from "node-fetch";
import xml2js from "xml2js";

const app = express();
app.use(cors());

async function fetchLatestUpdate(rssUrl) {
  const rssResponse = await fetch(rssUrl);
  const rssText = await rssResponse.text();
  const parser = new xml2js.Parser();
  const rss = await parser.parseStringPromise(rssText);
  const items = rss.rss.channel[0].item;
  if (!items || items.length === 0) {
    throw new Error("No updates found in RSS feed.");
  }
  const latest = items[0];
  const updateTitle = latest.title[0];
  const updateDescription = latest.description[0];
  const updateDate = latest.pubDate[0];
  return {
    lastUpdated: new Date(updateDate).toISOString(),
    updateInfo: updateTitle + ": " + updateDescription,
  };
}

app.get("/api/aws-app-runner/latest-update", async (req, res) => {
  try {
    const rssUrl =
      "https://docs.aws.amazon.com/apprunner/latest/relnotes/aws-apprunner-release-notes.rss";
    const result = await fetchLatestUpdate(rssUrl);
    res.json(result);
  } catch (err) {
    res
      .status(500)
      .json({ error: "Failed to fetch AWS App Runner update info" });
  }
});

app.get("/api/aws-backup/latest-update", async (req, res) => {
  try {
    const rssUrl =
      "https://docs.aws.amazon.com/aws-backup/latest/devguide/backup-dg-rss-updates.rss";
    const result = await fetchLatestUpdate(rssUrl);
    res.json(result);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch AWS Backup update info" });
  }
});

app.get("/api/aws-athena/latest-update", async (req, res) => {
  try {
    const rssUrl =
      "https://docs.aws.amazon.com/athena/latest/ug/amazon-athena-release-notes.rss";
    const rssResponse = await fetch(rssUrl);
    const rssText = await rssResponse.text();
    const parser = new xml2js.Parser();
    const rss = await parser.parseStringPromise(rssText);
    const channel = rss.rss.channel[0];
    const lastBuildDate = channel.lastBuildDate
      ? channel.lastBuildDate[0]
      : null;
    const items = channel.item;
    if (!items || items.length === 0) {
      return res
        .status(404)
        .json({ error: "No updates found in Athena RSS feed." });
    }
    const latest = items[0];
    const updateTitle = latest.title[0];
    const updateDescription = latest.description[0];
    const updateDate = latest.pubDate ? latest.pubDate[0] : updateTitle;
    res.json({
      lastUpdated: updateDate
        ? new Date(updateDate).toISOString()
        : lastBuildDate
        ? new Date(lastBuildDate).toISOString()
        : null,
      updateInfo: updateTitle + ": " + updateDescription,
    });
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch AWS Athena update info" });
  }
});

app.get("/api/aws-step-functions/latest-update", async (req, res) => {
  try {
    const rssUrl =
      "https://docs.aws.amazon.com/step-functions/latest/dg/recent-updates.rss";
    const result = await fetchLatestUpdate(rssUrl);
    res.json(result);
  } catch (err) {
    res
      .status(500)
      .json({ error: "Failed to fetch AWS Step Function update info" });
  }
});

app.get("/api/aws-ec2/latest-update", async (req, res) => {
  try {
    const rssUrl =
      "https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/amazon-ec2-release-notes.rss";
    const rssResponse = await fetch(rssUrl);
    const rssText = await rssResponse.text();
    const parser = new xml2js.Parser();
    const rss = await parser.parseStringPromise(rssText);
    const channel = rss.rss.channel[0];
    const lastBuildDate = channel.lastBuildDate
      ? channel.lastBuildDate[0]
      : null;
    const items = channel.item;
    if (!items || items.length === 0) {
      return res
        .status(404)
        .json({ error: "No updates found in EC2 RSS feed." });
    }
    const latest = items[0];
    const updateTitle = latest.title[0];
    const updateDescription = latest.description ? latest.description[0] : "";
    const updateDate = latest.pubDate ? latest.pubDate[0] : lastBuildDate;
    res.json({
      lastUpdated: updateDate
        ? new Date(updateDate).toISOString()
        : lastBuildDate
        ? new Date(lastBuildDate).toISOString()
        : null,
      updateInfo:
        updateTitle + (updateDescription ? ": " + updateDescription : ""),
    });
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch AWS EC2 update info" });
  }
});

app.get("/api/aws-ecs/latest-update", async (req, res) => {
  try {
    const rssUrl =
      "https://docs.aws.amazon.com/AmazonECS/latest/developerguide/amazon-ecs-release-notes.rss";
    const rssResponse = await fetch(rssUrl);
    const rssText = await rssResponse.text();
    const parser = new xml2js.Parser();
    const rss = await parser.parseStringPromise(rssText);
    const channel = rss.rss.channel[0];
    const lastBuildDate = channel.lastBuildDate
      ? channel.lastBuildDate[0]
      : null;
    const items = channel.item;
    if (!items || items.length === 0) {
      return res
        .status(404)
        .json({ error: "No updates found in ECS RSS feed." });
    }
    const latest = items[0];
    const updateTitle = latest.title[0];
    const updateDescription = latest.description ? latest.description[0] : "";
    const updateDate = latest.pubDate ? latest.pubDate[0] : lastBuildDate;
    res.json({
      lastUpdated: updateDate
        ? new Date(updateDate).toISOString()
        : lastBuildDate
        ? new Date(lastBuildDate).toISOString()
        : null,
      updateInfo:
        updateTitle + (updateDescription ? ": " + updateDescription : ""),
    });
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch AWS ECS update info" });
  }
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`API running on port ${PORT}`));
