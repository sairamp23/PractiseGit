import { test as baseTest } from "@playwright/test"
import { LoginPage } from "../pages/LoginPage"
import { HomePage } from "../pages/HomePage";
import { CartPage } from "../pages/CartPage";

type MyPomFixtures = {
    loginPage: LoginPage;
    homePage: HomePage;
    cartPage: CartPage;
}

export const test = baseTest.extend<MyPomFixtures>({
    loginPage: async ({ page }, use) => {
        await use(new LoginPage(page));
    },

    homePage: async ({ page }, use) => {
        await use(new HomePage(page));
    },

    cartPage: async ({ page }, use) => {
        await use(new CartPage(page));
    }
})

