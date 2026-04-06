import { test, expect } from '@playwright/test'

test('Handle New Page', async ({ page }) => {

    await page.goto('https://demoqa.com/browser-windows');
    const page1Promise = page.waitForEvent('popup');
    await page.locator('[id="tabButton"]').click();
    const page1 = await page1Promise;
    
    const page2Promise = page.waitForEvent('popup');
    await page.locator('[id="windowButton"]').click();
    const page2 = await page1Promise;

    const page3Promise = page.waitForEvent('popup');
    await page.locator('[id="messageWindowButton"]').click();
    const page3 = await page1Promise;

});