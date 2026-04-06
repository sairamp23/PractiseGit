import { test } from '@playwright/test'
import fs from "fs";
import { parse } from "csv-parse/sync"

const records = parse(fs.readFileSync("testdata/testdata.csv"),
    {
        columns: true,
        skip_empty_lines: true,
    })

records.forEach((record) => {


    test(`CSV-${record.ID}`, async ({ page }) => {


        await page.goto('https://demoqa.com/automation-practice-form')
        await page.locator('[id="firstName"]').fill();
        await page.locator('[id="lastName"]').fill();

    });
});