import { test} from "@playwright/test";

test.setTimeout(60000000);



test('Mouse_Hover',async({page})=>{


    await page.goto('https://playwright.dev/');
    await page.locator('[class="navbar__link"]').hover();
    await page.locator('a').filter({ hasText: 'Java' }).first().click();
    await page.getByRole('button', { name: 'Java' }).isVisible();





});