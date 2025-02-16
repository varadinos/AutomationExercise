import { test, expect } from '../fixtures/fixtures'

test("Contact Us Form is loaded", async ({contactUsPage}) => {
    await contactUsPage.verifyGetInTouchIsVisible();
})

test("Contact Us Form is send after filling", async ({contactUsPage}) => {
    await contactUsPage.acceptAlert();
    await contactUsPage.fillContactUsForm();
    await contactUsPage.validateSuccessMessage();
})