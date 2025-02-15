import { test, expect } from '../tests/fixtures/fixtures';

test('Verify that login/signup page is loaded successfully', async ({loginSignupPage}) => {
    await loginSignupPage.verifyLoginLabelIsVisible();
    await loginSignupPage.assertPageTitle('Automation Exercise - Signup / Login');
})