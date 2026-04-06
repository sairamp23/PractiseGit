import { test, expect } from "@playwright/test"

test('Radio Button', async ({ page }) => {

    await page.goto("https://artoftesting.com/samplesiteforselenium")
    await page.locator('[class="Automation"]').click()
    await expect(page.locator('[class="Automation"]')).toBeChecked()

    await page.locator('[class="Performance"]').click()
    await expect(page.locator('[class="Performance"]')).toBeChecked()
    


    if (await (page.locator('[class="Automation"]')).isChecked)
    {
        await page.locator('[class="Automation"]').uncheck()
        console.log('Unchecked')
    }

    await page.close()

});