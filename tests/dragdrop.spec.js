import { test} from "@playwright/test";

test.setTimeout(60000000);

test('Mouse_Hover',async({page})=>{


    await page.goto('https://demoqa.com/droppable');
    // await page.locator('#draggable').hover();
    // await page.mouse.down();
    // await page.locator('[id="droppable"]').first().hover();
    // await page.mouse.up();


    await page.locator('.simple-drop-container .ui-draggable').dragTo(page.locator('.simple-drop-container .ui-droppable'));
    await page.locator('.ui-state-highlight').isVisible();

});