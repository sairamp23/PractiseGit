import { test } from "@playwright/test";



//  test.beforeAll('Before All', async () => {
//     console.log("Execute Before All");
// })

//  test.beforeEach('Before Each', async () => {
//     console.log("Execute Before Each");
// })

//  test.afterEach('AfterEach', async () => {
//     console.log("Execute After Each");
// })

 test.afterAll('Afterall', async () => {
    console.log("Execute After all");
})



test.describe("Practise Test Method", async () => {

//     test.beforeEach('BeforEach', async () => {
//     console.log("Execute Before Each");
// })

test('Hooks-1 types', async ({ page }) => {
    await page.goto("https://www.saucedemo.com/")
    console.log("1 Start")
    console.log("End")
});

test('Hooks-2 types', async ({ page }) => {
    await page.goto("https://www.saucedemo.com/")
    console.log("2 Start")
    console.log("End")
});

test('Hooks-3 types', async ({ page }) => {
    await page.goto("https://www.saucedemo.com/")
    console.log("3 Start")
    console.log("End")
});

})

test.describe("Practise Test Method", async () => {

//     test.afterEach('AfterEach', async () => {
//     console.log("Execute After Each");
// })
    test('Hooks-4 types', async ({ page }) => {
        await page.goto("https://www.saucedemo.com/")
        console.log("4 Start")
        console.log("End")
    });

    test('Hooks-5 types', async ({ page }) => {
        await page.goto("https://www.saucedemo.com/")
        console.log("5 Start")
        console.log("End")
    });

    test('Hooks-6 types', async ({ page }) => {
        await page.goto("https://www.saucedemo.com/")
        console.log("6 Start")
        console.log("End")

    });
});

test('Hooks-7 types', async ({ page }) => {
    await page.goto("https://www.saucedemo.com/")
    console.log("7 Start")
    console.log("End")

});