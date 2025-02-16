import { test, expect } from '../fixtures/fixtures';


test("Register User", async ({loginSignupPage, registrationPage, accountCreatedPage}) => {
    const uniqueEmail = process.env.NAME! + `_${Date.now()}@example.com`;
    console.log("Email addres used for registration: ", uniqueEmail);
    await loginSignupPage.newUserSignup(process.env.NAME!, uniqueEmail);
    await registrationPage.enterAccountInformation();
    await registrationPage.enterAddressInformation();
    await accountCreatedPage.verifyAccount();
    await accountCreatedPage.checkUserIsLoggedIn();
});


test("Register User with existing email", async ({loginSignupPage}) =>{
    await loginSignupPage.newUserSignup(process.env.NAME!, process.env.VALID_EMAIL!);
    await loginSignupPage.checkErrorMsgForExistingEmail();
})