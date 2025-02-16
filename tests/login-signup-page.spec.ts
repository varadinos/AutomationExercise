import { test, expect } from '../tests/fixtures/fixtures';

test('Verify that login/signup page is loaded successfully', async ({loginSignupPage, basePage}) => {
    await loginSignupPage.verifyLoginLabelIsVisible();
    await basePage.assertPageTitle(loginSignupPage.loginSignupPageTitle);
})