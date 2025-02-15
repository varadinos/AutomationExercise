import { beforeEach } from 'node:test';
import { test, expect } from '../tests/fixtures/fixtures';
import { BaseTest } from '../utils/base-test';

test('Verify that home page is visible successfully', async ({homePage}) => {
    await homePage.verifyThatHomePageIsVisibe();
})


test('Verify Home page title', async ({homePage}) => {
    const expectedPageTitle: string = "Automation Exercise";
    await homePage.assertPageTitle(expectedPageTitle);
});


test('Verify Login/Signup button is visible and clickable', async ({homePage}) => {
    await homePage.checkLoginSignupButtonIsVisible();
    await homePage.clickLoginSignupButton();
})





