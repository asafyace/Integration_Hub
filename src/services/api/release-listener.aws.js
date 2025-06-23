import express from "express";
import * as cheerio from "cheerio";
import fetch from "node-fetch";
import xml2js from "xml2js";

const awsRouter = express.Router();

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

// All AWS endpoints (copy from original file, replacing app.get with awsRouter.get)
awsRouter.get("/aws-app-runner/latest-update", async (req, res) => {
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

awsRouter.get("/aws-backup/latest-update", async (req, res) => {
  try {
    const rssUrl =
      "https://docs.aws.amazon.com/aws-backup/latest/devguide/backup-dg-rss-updates.rss";
    const result = await fetchLatestUpdate(rssUrl);
    res.json(result);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch AWS Backup update info" });
  }
});

awsRouter.get("/aws-athena/latest-update", async (req, res) => {
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

awsRouter.get("/aws-step-functions/latest-update", async (req, res) => {
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

awsRouter.get("/aws-ec2/latest-update", async (req, res) => {
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

awsRouter.get("/aws-ecs/latest-update", async (req, res) => {
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

awsRouter.get("/aws-appflow/latest-update", async (req, res) => {
  try {
    const htmlUrl =
      "https://docs.aws.amazon.com/appflow/latest/userguide/doc-history.html";
    const htmlResponse = await fetch(htmlUrl);
    if (!htmlResponse.ok) {
      return res.status(htmlResponse.status).json({
        error: `Failed to fetch AppFlow doc history: HTTP ${htmlResponse.status}`,
      });
    }
    const htmlText = await htmlResponse.text();
    const $ = cheerio.load(htmlText);
    let rows = $("table.doc-history-table tr");
    if (rows.length === 0) {
      rows = $("tr");
    }
    // Get the second row (first row is header, second row is latest update)
    const secondRow = rows.eq(1);
    let lastUpdated = null;
    let updateInfo = "";
    if (secondRow.length) {
      const tds = secondRow.find("td");
      lastUpdated = tds.eq(2).text().trim(); // Date is usually the third column
      const version = tds.eq(0).text().trim(); // Change/Version is first column
      const description = tds.eq(1).text().trim(); // Description is second column
      updateInfo = (version ? `Change: ${version}. ` : "") + description;
    }
    if (!lastUpdated || !updateInfo) {
      return res
        .status(404)
        .json({ error: "No updates found in AppFlow doc history." });
    }
    let isoDate = null;
    try {
      isoDate = new Date(lastUpdated).toISOString();
    } catch (e) {
      isoDate = lastUpdated;
    }
    res.json({
      lastUpdated: isoDate,
      updateInfo,
    });
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch AWS AppFlow update info" });
  }
});

awsRouter.get("/aws-sns/latest-update", async (req, res) => {
  try {
    const rssUrl =
      "https://docs.aws.amazon.com/sns/latest/dg/recent-updates.rss";
    const result = await fetchLatestUpdate(rssUrl);
    res.json(result);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch AWS SNS update info" });
  }
});

awsRouter.get("/aws-sqs/latest-update", async (req, res) => {
  try {
    const rssUrl =
      "https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/recent-updates.rss";
    const result = await fetchLatestUpdate(rssUrl);
    res.json(result);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch AWS SQS update info" });
  }
});

awsRouter.get("/aws-sagemaker/latest-update", async (req, res) => {
  try {
    const rssUrl =
      "https://docs.aws.amazon.com/sagemaker/latest/dg/amazon-sagemaker-release-notes.rss";
    const result = await fetchLatestUpdate(rssUrl);
    res.json(result);
  } catch (err) {
    res
      .status(500)
      .json({ error: "Failed to fetch AWS SageMaker update info" });
  }
});

// AWS Glue
awsRouter.get("/aws-glue/latest-update", async (req, res) => {
  try {
    const rssUrl =
      "https://docs.aws.amazon.com/glue/latest/dg/aws-glue-release-notes.rss";
    const result = await fetchLatestUpdate(rssUrl);
    res.json(result);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch AWS Glue update info" });
  }
});

// AWS Glue DataBrew
awsRouter.get("/aws-glue-databrew/latest-update", async (req, res) => {
  try {
    const rssUrl =
      "https://docs.aws.amazon.com/databrew/latest/dg/aws-glue-databrew-developer-guide-rss.rss";
    const result = await fetchLatestUpdate(rssUrl);
    res.json(result);
  } catch (err) {
    res
      .status(500)
      .json({ error: "Failed to fetch AWS Glue DataBrew update info" });
  }
});

// AWS Lambda
awsRouter.get("/aws-lambda/latest-update", async (req, res) => {
  try {
    const rssUrl =
      "https://docs.aws.amazon.com/lambda/latest/dg/lambda-updates.rss";
    const result = await fetchLatestUpdate(rssUrl);
    res.json(result);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch AWS Lambda update info" });
  }
});

// Amazon EMR
awsRouter.get("/aws-emr/latest-update", async (req, res) => {
  try {
    const rssUrl =
      "https://docs.aws.amazon.com/emr/latest/ReleaseGuide/amazon-emr-release-notes.rss";
    const result = await fetchLatestUpdate(rssUrl);
    res.json(result);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch AWS EMR update info" });
  }
});

// AWS Redshift
awsRouter.get("/aws-redshift/latest-update", async (req, res) => {
  try {
    const rssUrl =
      "https://docs.aws.amazon.com/redshift/latest/dg/Dochistory.rss";
    const result = await fetchLatestUpdate(rssUrl);
    res.json(result);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch AWS Redshift update info" });
  }
});

// AWS DynamoDB
awsRouter.get("/aws-dynamodb/latest-update", async (req, res) => {
  try {
    const rssUrl =
      "https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/dynamodbupdates.rss";
    const result = await fetchLatestUpdate(rssUrl);
    res.json(result);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch AWS DynamoDB update info" });
  }
});

// AWS DataSync
awsRouter.get("/aws-datasync/latest-update", async (req, res) => {
  try {
    const rssUrl =
      "https://docs.aws.amazon.com/datasync/latest/userguide/aws-datasync-release-notes.rss";
    const result = await fetchLatestUpdate(rssUrl);
    res.json(result);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch AWS DataSync update info" });
  }
});

// AWS Batch
awsRouter.get("/aws-batch/latest-update", async (req, res) => {
  try {
    const rssUrl =
      "https://docs.aws.amazon.com/batch/latest/userguide/document_history.rss";
    const result = await fetchLatestUpdate(rssUrl);
    res.json(result);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch AWS Batch update info" });
  }
});

// AWS CloudFormation
awsRouter.get("/aws-cloudformation/latest-update", async (req, res) => {
  try {
    const rssUrl =
      "https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-cloudformation-user-guide-updates.rss";
    const result = await fetchLatestUpdate(rssUrl);
    res.json(result);
  } catch (err) {
    res
      .status(500)
      .json({ error: "Failed to fetch AWS CloudFormation update info" });
  }
});

// AWS Data Pipeline (HTML scrape)
awsRouter.get("/aws-data-pipeline/latest-update", async (req, res) => {
  try {
    const htmlUrl =
      "https://docs.aws.amazon.com/datapipeline/latest/DeveloperGuide/DocHistory.html";
    const htmlResponse = await fetch(htmlUrl);
    if (!htmlResponse.ok) {
      return res.status(htmlResponse.status).json({
        error: `Failed to fetch Data Pipeline doc history: HTTP ${htmlResponse.status}`,
      });
    }
    const htmlText = await htmlResponse.text();
    const $ = cheerio.load(htmlText);
    let rows = $("table.doc-history-table tr");
    if (rows.length === 0) {
      rows = $("tr");
    }
    const secondRow = rows.eq(1);
    let lastUpdated = null;
    let updateInfo = "";
    if (secondRow.length) {
      const tds = secondRow.find("td");
      lastUpdated = tds.eq(2).text().trim();
      const version = tds.eq(0).text().trim();
      const description = tds.eq(1).text().trim();
      updateInfo = (version ? `Change: ${version}. ` : "") + description;
    }
    if (!lastUpdated || !updateInfo) {
      return res
        .status(404)
        .json({ error: "No updates found in Data Pipeline doc history." });
    }
    let isoDate = null;
    try {
      isoDate = new Date(lastUpdated).toISOString();
    } catch (e) {
      isoDate = lastUpdated;
    }
    res.json({
      lastUpdated: isoDate,
      updateInfo,
    });
  } catch (err) {
    res
      .status(500)
      .json({ error: "Failed to fetch AWS Data Pipeline update info" });
  }
});

// AWS Mainframe Modernization (M2)
awsRouter.get("/aws-m2/latest-update", async (req, res) => {
  try {
    const rssUrl =
      "https://docs.aws.amazon.com/m2/latest/userguide/m2userguide.rss";
    const result = await fetchLatestUpdate(rssUrl);
    res.json(result);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch AWS M2 update info" });
  }
});

// AWS MWAA
awsRouter.get("/aws-mwaa/latest-update", async (req, res) => {
  try {
    const rssUrl =
      "https://docs.aws.amazon.com/mwaa/latest/userguide/amazon-mwaa-user-guide.rss";
    const result = await fetchLatestUpdate(rssUrl);
    res.json(result);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch AWS MWAA update info" });
  }
});

// AWS QuickSight
awsRouter.get("/aws-quicksight/latest-update", async (req, res) => {
  try {
    const rssUrl =
      "https://docs.aws.amazon.com/quicksight/latest/user/amazon-quicksight-doc-release-notes.rss";
    const result = await fetchLatestUpdate(rssUrl);
    res.json(result);
  } catch (err) {
    res
      .status(500)
      .json({ error: "Failed to fetch AWS QuickSight update info" });
  }
});

export default awsRouter;
