import { test, expect } from '../../../setup/fixtures'

test("Contact Us Form is loaded", async ({contactUsPage}) => {
    await contactUsPage.verifyGetInTouchIsVisible();
})

test("Contact Us Form is send after filling", async ({contactUsPage, basePage}) => {
    await basePage.acceptAlert();
    await contactUsPage.fillContactUsForm();
    await contactUsPage.validateSuccessMessage();
})