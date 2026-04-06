import { test, expect } from "@playwright/test";


test('Doubleclick', async ({ page }) => {

    await page.goto('https://the-internet.herokuapp.com/add_remove_elements/')
    await page.locator('[onclick="addElement()"]').dblclick();
    await page.locator(':text("Delete")').first().isVisible()
    await page.locator(':text("Delete")').nth(1).isVisible()
    page.close()

});


test('RightClick', async ({ page }) => {

    await page.goto('https://swisnl.github.io/jQuery-contextMenu/demo.html')
    await page.locator('.btn-neutral').click({ button: "right" })
    page.close()

});
