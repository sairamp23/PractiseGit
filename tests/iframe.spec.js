import { test, expect } from '@playwright/test'

test('Handle iframe with Name', async ({ page }) => {

    await page.goto('https://www.w3schools.com/html/tryit.asp?filename=tryhtml5_input_form')
    const w3frame = page.frameLocator("[name='iframeResult']"); //frame locator

    await w3frame.locator('#fname').fill('sairam')
    await w3frame.locator('[name="lname"]').fill('p')

});


test('Handle iframe with URL', async ({ page }) => {

    await page.goto('https://www.w3schools.com/html/html_iframe.asp')
    await page.waitForLoadState('domcontentloaded');

    const frame = page.frameLocator('[title="W3Schools HTML Tutorial"]')
    await frame.locator('[id="tnb-google-search-mobile-action-btns"]').click();
    await frame.getByPlaceholder('Search...').fill('Abcd')

});

test('Handle iframe with FrameLocator Method', async ({ page }) => {

    await page.goto('https://ui.vision/demo/webtest/frames/')
});