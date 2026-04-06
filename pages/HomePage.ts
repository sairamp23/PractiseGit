import { Locator, Page } from '@playwright/test'


export class HomePage {

    readonly page: Page;
    readonly homePageHeading: Locator;
    readonly backPackAddTocart: Locator;
    readonly backPackRemove: Locator;
    readonly cartIcon: Locator;


    constructor(page: Page) {

        this.page = page;
        this.homePageHeading = page.getByText('Swag Labs')
        this.backPackAddTocart = page.locator('[data-test="add-to-cart-sauce-labs-backpack"]')
        this.backPackRemove = page.getByRole('button', { name: 'Remove' })
        this.cartIcon = page.locator('[data-test="shopping-cart-link"]')

    }


    async addToCart() {
        await this.backPackAddTocart.click()
    }

    async goToCart() {
        await this.cartIcon.click()
    }

}