import { test, expect } from "@playwright/test";


test('FileList,PressSequentially,input', async ({ page }) => {

    await page.goto('https://ultimateqa.com/filling-out-forms/')
    await page.locator('[id="et_pb_contact_name_0"]').fill('abcdAbcd')
    await page.locator('[id="et_pb_contact_message_0"]').pressSequentially("About Blog,Java, SDET, AcademyContact", { delay: 100 })

});

test('Test Press Methods', async ({ page }) => {

    await page.goto('https://www.google.com/')
    await page.locator('[class="gLFyf"]').pressSequentially('playwright')
    await page.locator('[class="gLFyf"]').press('Backspace')
    await page.locator('[class="gLFyf"]').press('Backquote')
    await page.locator('[class="gLFyf"]').press('Minus')
    await page.locator('[class="gLFyf"]').press('Equal')
    await page.locator('[class="gLFyf"]').press('Backslash')
    await page.locator('[class="gLFyf"]').press('Tab')
    await page.locator('[class="gLFyf"]').press('Delete')
    // await page.locator('[class="gLFyf"]').press('Enter')

});




test('Test1 Press Methods', async ({ page }) => {
    await page.goto('https://www.google.com/')

    const searchBox = page.locator('[title="Search"]')

    await searchBox.pressSequentially('playwright')

    // Wait for suggestions to appear (important)
    await page.waitForTimeout(1000)

    // Press ArrowDown multiple times
    await searchBox.press('ArrowDown')
    await searchBox.press('ArrowDown')
    await searchBox.press('ArrowDown')
    await searchBox.press('Enter')
});



