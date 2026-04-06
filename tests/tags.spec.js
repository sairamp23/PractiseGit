import { test } from "@playwright/test";

test.describe('Tags', () => {


    test('1.Tag @UI', async ({ }) => {
        console.log('Tag1')
    });
    test('2.Tags @api', async ({ }) => {
        console.log('Tag2')
    });
    test('3.Tags @UI @smoke', async ({ }) => {
        console.log('Tag3')
    });

});



test('4.Tags',{tag:"@api"}, async ({ }) => {
    console.log('Tag4')
});
test('5.Tags',{tag:"@api"}, async ({ }) => {
    console.log('Tag5')
});
test('6.Tags',{tag:"@UI"}, async ({ }) => {
    console.log('Tag6')
});

test('7.Tags', async ({ }) => {
    console.log('Tag6')
});