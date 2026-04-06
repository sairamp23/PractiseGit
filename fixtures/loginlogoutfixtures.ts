import { test as baseTest, Page } from '@playwright/test';

type Fixtures = {
    loginPage: Page;
};

export const test = baseTest.extend<Fixtures>({

    // 🔹 Login Fixture
    loginPage: async ({ page }, use) => {

        await page.goto("https://www.saucedemo.com/");
        await page.getByPlaceholder('Username').fill("standard_user");
        await page.getByPlaceholder('Password').fill("secret_sauce");
        await page.getByRole('button').click();

        await use(page); // pass logged-in page

        // 🔹 Logout after test
        await page.locator("text='Open Menu'").click();
        await page.locator("text='Logout'").click();
    }

});

export const expect = test.expect;