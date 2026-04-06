import { test, expect } from '@playwright/test';
import data from '../testdata/logindata.json';
import data1 from '../testdata/testdata1.json';

test.setTimeout(60000);


test('test', async ({ page }) => {
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

    await page.getByRole('textbox', { name: 'Username' }).fill(data.username);
    await page.getByRole('textbox', { name: 'Password' }).fill(data.password);
    await page.getByRole('button', { name: 'Login' }).click();
    await page.waitForLoadState('load');
    await page.getByRole('link', { name: 'Recruitment' }).click();
    await page.waitForLoadState('networkidle');
    await page.locator('[class="oxd-button oxd-button--medium oxd-button--secondary"]').click();
    await page.waitForLoadState('networkidle');
    await page.getByRole('textbox', { name: 'First Name' }).fill(data1['First Name']);
    await page.getByRole('textbox', { name: 'Middle Name' }).fill(data1['Middle Name']);
    await page.getByRole('textbox', { name: 'Last Name' }).fill(data1['Last Name']);
    await page.getByRole('textbox', { name: 'Type here' }).first().fill(data1.email);
    await page.getByRole('button', { name: 'Save' }).click();

});