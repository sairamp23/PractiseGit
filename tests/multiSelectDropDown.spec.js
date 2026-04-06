import { test, expect } from "@playwright/test"

test('1.Multi Select DropDown', async ({ page }) => {

    await page.goto('https://demoqa.com/select-menu')
    //await page.locator('#cars').selectOption(['Audi'])

    await page.locator('#cars').selectOption(['Audi','Saab','Volvo','Opel'])

    
});