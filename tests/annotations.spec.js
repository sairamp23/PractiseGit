import { test } from "@playwright/test";

//test(({browserName})=> browserName==="chromium")
test.describe.skip("Practise Test Method", async () => {

    test.fail('First test', async ({ page }) => {
        await page.goto("https://www.saucedemo.com/")
        console.log("Starting Practise Test-1")
        console.log("Ending Practise Test-1")
        await page.close()
    });

    test.fail('Second test', async ({ page }) => {
        await page.goto("https://www.saucedemo.com/")
        console.log("Starting Practise Test-1")
        console.log("Ending Practise Test-1")
        await page.close()
    });

    test.skip('Third test', async ({ page }) => {
        await page.goto("https://www.saucedemo.com/")
        console.log("Starting Practise Test-1")
        console.log("Ending Practise Test-1")
        await page.close()
    });

    test.skip('Fourth test', async ({ page }) => {
        await page.goto("https://www.saucedemo.com/")
        console.log("Starting Practise Test-1")
        console.log("Ending Practise Test-1")
        await page.close()
    });

    test.fixme('Fifth test', async ({ page }) => {
        await page.goto("https://www.saucedemo.com/")
        console.log("Starting Practise Test-1")
        console.log("Ending Practise Test-1")
        await page.close()
    });



});

test.slow('Sixth test', async ({ page }) => {
    await page.goto("https://www.saucedemo.com/")
    console.log("Starting Practise Test-1")
    console.log("Ending Practise Test-1")
    await page.close()
});


test.slow('Seventh test', async ({ page }) => {
    await page.goto("https://www.saucedemo.com/")
    console.log("Starting Practise Test-1")
    console.log("Ending Practise Test-1")
    await page.close()
});




