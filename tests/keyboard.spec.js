import { test } from "@playwright/test";

test('KeyBoard_Actions', async ({ page }) => {
    await page.goto('https://testpages.eviltester.com/pages/forms/html-form/');

    const textArea = page.locator('[name="comments"]');

    await textArea.press("Control+A");
    await textArea.press("Backspace");
    await textArea.fill('New Comments..........are Loading');
    await textArea.press('Control+A+C');
    await page.locator('[name="username"]').press('Control+v');

    await page.keyboard.press('PageUp');
    await page.keyboard.press('PageDown');

    console.log('Keyboard Actions are Performed Successfully');

    await page.close();
});