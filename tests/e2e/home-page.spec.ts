import { test, expect } from '../../setup/fixtures'

test('Verify that home page is visible successfully', async ({homePage}) => {
    await homePage.verifyThatHomePageIsVisibe();
})


test('Verify Home page title', async ({homePage, basePage}) => {
    await basePage.assertPageTitle(homePage.homePageTitle);
});


test('Verify Login/Signup button is visible and clickable', async ({homePage}) => {
    await homePage.checkLoginSignupButtonIsVisible();
    await homePage.clickLoginSignupButton();
})





