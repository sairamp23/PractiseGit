import { test } from "@playwright/test";


test.beforeEach(async ({ page }) => {
    await page.goto("https://www.saucedemo.com/")
    await page.getByPlaceholder('Username').fill("standard_user");
    await page.getByPlaceholder('Password').fill("secret_sauce");
    await page.getByRole('button').click();
});


test('Add to cart', async ({ page }) => {
    test.slow()

    await page.locator("text='Sauce Labs Backpack'").click();
    await page.locator("text='Add to cart'").click()
    await page.locator('.shopping_cart_link').click()
    await page.locator(' .cart_button').click()
    await page.locator('[class="inventory_item_name"]').isVisible();

})

test('e cart Navigate and logout the user)', async ({ page }) => {

    await page.locator('.shopping_cart_link').click()
    await page.locator("#continue-shopping").click()
    await page.locator("text='Open Menu'").click()
    await page.locator("text='Logout'").click()
    await page.close()

})