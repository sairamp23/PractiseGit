import { test, expect } from "@playwright/test"

test('1.Locator,selectDropDown,Text', async ({ page }) => {

    await page.goto('https://artoftesting.com/samplesiteforselenium')
    await page.locator('#testingDropdown').selectOption("Manual Testing");
    await page.locator('#testingDropdown').selectOption("Database Testing");
    await page.locator('#testingDropdown').selectOption("Performance Testing");
    //await page.locator('#testingDropdown').selectOption("Automation Testing");
});

test('2.Locator,selectDropDown,value', async ({ page }) => {
    await page.goto('https://artoftesting.com/samplesiteforselenium')
    await page.locator('#testingDropdown').selectOption({ value: 'Manual' });
    await page.locator('#testingDropdown').selectOption({ value: 'Database' });
    await page.locator('#testingDropdown').selectOption({ value: 'Performance' });
    //await page.locator('#testingDropdown').selectOption({ value: 'Automation' });
});


test('3.Locator,selectDropDown,Text', async ({ page }) => {

    await page.goto('https://artoftesting.com/samplesiteforselenium');

    await page.locator('#testingDropdown').selectOption({ label: 'Manual Testing' });
    await page.locator('#testingDropdown').selectOption({ label: 'Database Testing' });
    await page.locator('#testingDropdown').selectOption({ label: 'Performance Testing' });
    // await page.locator('#testingDropdown').selectOption({ label: 'Automation Testing' });

});

test('4.Locator,selectDropDown,Index', async ({ page }) => {

    await page.goto('https://artoftesting.com/samplesiteforselenium');

    await page.locator('#testingDropdown').selectOption({ index: 3 });
    await page.locator('#testingDropdown').selectOption({ index: 2 });
    await page.locator('#testingDropdown').selectOption({ index: 1 });
    await page.locator('#testingDropdown').selectOption({ index: 3});

});


test('4.Locator,selectDropDown,Text', async ({ page }) => {

    await page.goto('https://www.w3schools.com/tags/tryit.asp?filename=tryhtml_option_label');
    await page.locator('iframe[name="iframeResult"]').contentFrame().getByLabel('Choose a car:').selectOption('Audi (Auto Union Deutschland Ingolstadt)');
});

