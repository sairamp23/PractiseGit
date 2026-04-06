import { test, expect } from '../fixtures/loginlogoutfixtures';

test('Add to cart', async ({ loginPage }) => {

    await loginPage.locator("text='Sauce Labs Backpack'").click();
    await loginPage.locator("text='Add to cart'").click();
    await loginPage.locator('.shopping_cart_link').click();
    await loginPage.locator('.cart_button').click();

});

test('Sort,Filter', async ({ loginPage }) => {

    await loginPage.locator('[class="product_sort_container"]').selectOption('za');
    await loginPage.locator('[class="product_sort_container"]').selectOption('az');
    await loginPage.locator('[class="product_sort_container"]').selectOption('lohi');
    await loginPage.locator('[class="product_sort_container"]').selectOption('hilo');

});

test('Open Menu & Close Menu', async ({ loginPage }) => {

    await loginPage.locator("text='Open Menu'").click();
    await loginPage.locator('[class="bm-cross-button"]').click();

});

test('Verify in Cart Page', async ({ loginPage }) => {

    await loginPage.locator('.shopping_cart_link').click();

    await expect(loginPage.locator('[data-test="title"]')).toBeVisible();
    await expect(loginPage.locator('[class="cart_quantity_label"]')).toBeVisible();
    await expect(loginPage.locator('[class="cart_desc_label"]')).toBeVisible();
    await expect(loginPage.locator('[data-test="continue-shopping"]')).toBeVisible();
    await expect(loginPage.locator('[data-test="checkout"]')).toBeVisible();
    await expect(loginPage.locator('[class="app_logo"]')).toBeVisible();

});