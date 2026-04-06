import { test, expect } from "@playwright/test"

test('1.Alerts and Confirm, Dialogs box Js Alert', async ({ page }) => {

    await page.goto('https://the-internet.herokuapp.com/javascript_alerts')

    //Dialog Event 
    page.on("dialog", dialog => {

        expect(dialog.type()).toEqual("alert");
        expect(dialog.message()).toEqual("I am a JS Alert");
        dialog.accept();
    })

    await page.locator('[onclick="jsAlert()"]').click()
    await expect(page.locator("//p[(text())='You successfully clicked an alert']")).toHaveText('You successfully clicked an alert');

});

test('2.Alerts and Confirm, Dialogs box Js Confirm', async ({ page }) => {

    await page.goto('https://the-internet.herokuapp.com/javascript_alerts')

    //Dialog Event 
    page.on("dialog", dialog => {

        expect(dialog.type()).toEqual("confirm");
        expect(dialog.message()).toEqual("I am a JS Confirm");
        dialog.accept();
    })

    await page.locator('[onclick="jsConfirm()"]').click()
    await expect(page.locator("//p[(text())='You clicked: Ok']")).toHaveText('You clicked: Ok');
});

test('3.Alerts and Confirm, Dialogs box Js Confirm,Dismiss', async ({ page }) => {

    await page.goto('https://the-internet.herokuapp.com/javascript_alerts')

    //Dialog Event 
    page.on("dialog", dialog => {

        expect(dialog.type()).toEqual("confirm");
        expect(dialog.message()).toEqual("I am a JS Confirm");
        dialog.dismiss();
    })

    await page.locator('[onclick="jsConfirm()"]').click()
    await expect(page.locator("//p[(text())='You clicked: Cancel']")).toHaveText('You clicked: Cancel');
});


test('4.Alerts and Confirm, Dialogs box Js Prompt', async ({ page }) => {

    await page.goto('https://the-internet.herokuapp.com/javascript_alerts')

    //Dialog Event 
    page.on("dialog", dialog => {

        expect(dialog.type()).toEqual("prompt");
        expect(dialog.message()).toEqual("I am a JS prompt");
        dialog.accept("Abcd");
    })

    await page.locator('[onclick="jsPrompt()"]').click()
    await expect(page.locator("//p[(text())='You entered: Abcd']")).toHaveText('You entered: Abcd');
});

test('5.Alerts and Confirm, Dialogs box Js Prompt Dismiss', async ({ page }) => {

    await page.goto('https://the-internet.herokuapp.com/javascript_alerts')

    //Dialog Event 
    page.on("dialog", dialog => {

        expect(dialog.type()).toEqual("prompt");
        expect(dialog.message()).toEqual("I am a JS prompt");
        dialog.accept();
    })

    await page.locator('[onclick="jsPrompt()"]').click()
    await expect(page.locator("//p[(text())='You entered: ']")).toHaveText('You entered: ');
});