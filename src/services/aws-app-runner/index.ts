import puppeteer from 'puppeteer';
import * as cheerio from 'cheerio';
import { ServiceUpdate } from '../types';

export async function fetchAwsAppRunnerUpdates(): Promise<ServiceUpdate> {
  try {
    const url = "https://docs.aws.amazon.com/apprunner/latest/relnotes/relnotes-apprunner.html";
    const browser = await puppeteer.launch({ headless: "new" });
    const page = await browser.newPage();
    await page.goto(url, { waitUntil: "networkidle2" });
    const html = await page.content();
    await browser.close();

    const $ = cheerio.load(html);
    const firstH2 = $("h2").first();
    const dateText = firstH2.text().trim();
    
    let updateText = "";
    let next = firstH2.next();
    while (next.length && next[0].tagName !== "ul") {
      next = next.next();
    }
    if (next.length && next[0].tagName === "ul") {
      updateText = next.find("li").first().text().trim();
    }

    return {
      serviceName: "AWS App Runner",
      releaseDate: new Date(dateText).toISOString(),
      summary: updateText,
      documentationUrl: url,
      category: "AWS"
    };
  } catch (error) {
    throw new Error(`Failed to fetch AWS App Runner updates: ${error.message}`);
  }
}