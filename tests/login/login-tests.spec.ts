import { test, expect } from '../fixtures/fixtures'

test('Login with valid credentials', async ({loginSignupPage}) => {
    await loginSignupPage.loginWithValidCredentials();
})

test('Login with invalid credentials', async ({loginSignupPage}) => {
    await loginSignupPage.loginWithInvalidCredentials();
    await loginSignupPage.checkErrorMsgForInvalidCredentials();
})

test('Click login button with empty username and password', async ({loginSignupPage}) => {
    await loginSignupPage.loginButton.click();
    await loginSignupPage.checkEmailField();
})

test('Logout User', async ({loginSignupPage}) => {
    await loginSignupPage.logoutUser();
})