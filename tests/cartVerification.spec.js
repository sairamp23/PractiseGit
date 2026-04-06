import { expect } from '@playwright/test'
import { test } from "../fixtures/pomfixtures";

test('cart Verification', async ({ loginPage, homePage, cartPage }) => {

    await loginPage.openApplication();
    await loginPage.login("standard_user", "secret_sauce")

    await expect(homePage.homePageHeading).toHaveText("Swag Labs")

    await homePage.addToCart()

    await expect(homePage.cartIcon).toHaveText("1")

    await expect(homePage.backPackRemove).toBeVisible()

    await homePage.goToCart()

    await expect(cartPage.backPackItemLink).toBeVisible();
});