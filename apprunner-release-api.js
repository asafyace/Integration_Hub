import express from "express";
import cors from "cors";
import puppeteer from "puppeteer";
import * as cheerio from "cheerio";

const app = express();
app.use(cors());

app.get("/api/aws-app-runner/latest-update", async (req, res) => {
  try {
    const url =
      "https://docs.aws.amazon.com/apprunner/latest/relnotes/relnotes-apprunner.html";
    const browser = await puppeteer.launch({ headless: "new" });
    const page = await browser.newPage();
    await page.goto(url, { waitUntil: "networkidle2" });
    const html = await page.content();
    await browser.close();

    const $ = cheerio.load(html);

    // Find the first h2 (date) and the first ul after it (update list)
    const firstH2 = $("h2").first();
    const dateText = firstH2.text().trim();
    let updateText = "";

    // Find the first <ul> after the first <h2>
    let next = firstH2.next();
    while (next.length && next[0].tagName !== "ul") {
      next = next.next();
    }
    if (next.length && next[0].tagName === "ul") {
      updateText = next.find("li").first().text().trim();
    }

    if (!dateText || !updateText) {
      return res
        .status(404)
        .json({ error: "Could not parse AWS release notes." });
    }

    res.json({
      lastUpdated: new Date(dateText).toISOString(),
      updateInfo: updateText,
    });
  } catch (err) {
    res
      .status(500)
      .json({ error: "Failed to fetch AWS App Runner update info" });
  }
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`API running on port ${PORT}`));
