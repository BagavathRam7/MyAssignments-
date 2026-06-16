import { test, chromium } from "@playwright/test";

test ("Launch Browser", async({page}) =>{

    await page.goto("https://www.redbus.in");
    await page.waitForTimeout(3000);

    const title = await page.title();
    console.log("Page Title:",title);

    const url = await page.url();
    console.log("Page Url:", url);

})

