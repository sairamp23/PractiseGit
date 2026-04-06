import { test } from "@playwright/test";

test('1.Upload Single File', async ({ page }) => {
    await page.goto('https://davidwalsh.name/demo/multiple-file-upload.php')
    await page.locator('[id="filesToUpload"]').setInputFiles("upload\\File1.txt")
    await page.locator('[id="filesToUpload"]').setInputFiles(["upload\\File1.txt", "upload\\File2..txt", "upload\\File3.txt"]);  //Add
    await page.locator('[id="filesToUpload"]').setInputFiles([]) //Remove
});


test('2.Upload File', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/upload')

    await page.locator('[id="file-upload"]').setInputFiles("upload\\File1.txt")
    await page.locator('[id="file-submit"]').click();


    //What if type input element is hidden?




});

// test('3.Upload File', async ({ page }) => {
//     await page.goto('https://the-internet.herokuapp.com/upload')
//     //What if type input element is hidden?

//     const file = page.waitForEvent("filechooser");

//     await page.locator('[id="drag-drop-upload"]').click();

//     const files = await file;
//     await files.setInputFiles("upload\\File3.txt")



// });