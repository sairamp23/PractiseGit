import { test, expect } from "@playwright/test"

test('Radio Button', async ({ page }) => {

    await page.goto("https://artoftesting.com/samplesiteforselenium")
    await page.locator('[id="male"]').click()
    await expect(page.locator('[id="male"]')).toBeChecked()
    await page.locator('[id="female"]').click()
    await expect(page.locator('[id="female"]')).toBeChecked()

    await expect(page.locator('[id="male"]')).not.toBeChecked()
    await page.close()

});