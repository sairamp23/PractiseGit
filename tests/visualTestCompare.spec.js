import { test, expect } from "@playwright/test";

test('Visual Testing', async ({ page }) => {

    await page.goto('https://the-internet.herokuapp.com/tables');
    await page.waitForLoadState('domcontentloaded');
    // await expect(page).toHaveScreenshot("visualTesting.png",{fullPage:true});
    await expect(page).toHaveScreenshot("maxDiffPixelRatio.png");
});