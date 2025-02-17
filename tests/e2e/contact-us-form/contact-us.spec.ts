import { test, expect } from '../../../setup/fixtures'

test("Contact Us Form is loaded", async ({contactUsPage}) => {
    await expect(contactUsPage.getInTouchLabel).toBeVisible();
    await expect(contactUsPage.getInTouchLabel).toHaveText(contactUsPage.getInTouchLabelText);
})

test("Contact Us Form is send after filling", async ({contactUsPage, basePage}) => {
    await basePage.acceptAlert();
    await contactUsPage.fillContactUsForm();
    await expect(contactUsPage.contactUsSuccessMessage).toBeVisible();
    await expect(contactUsPage.contactUsSuccessMessage).toHaveText(contactUsPage.contactUsSuccessMessageText);
})