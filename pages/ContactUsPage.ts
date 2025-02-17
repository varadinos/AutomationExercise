import { expect, type Locator, type Page } from '@playwright/test';

export class ContactUsPage {
    readonly page: Page;
    readonly contactUsPageTitle: string;
    readonly url: string;
    readonly contactUsPageLabel: Locator;
    readonly getInTouchLabel: Locator;
    readonly contactUsNameInput: Locator;
    readonly contactUsEmailInput: Locator;
    readonly contactUsSubjectInput: Locator;
    readonly contactUsMessageInput: Locator;
    readonly contactUsSubmitButton: Locator;
    readonly contactUsSuccessMessage: Locator;
    readonly contactUsSuccessMessageText: string;
    readonly getInTouchLabelText: string;
    
    constructor (page: Page) {
        this.page = page;
        this.contactUsPageTitle = 'Automation Exercise - Contact Us';
        this.url = "https://www.automationexercise.com/contact_us";
        this.contactUsPageLabel = page.locator('h2', {hasText: 'CONTACT US'});
        this.getInTouchLabel = page.locator("h2", {hasText: 'Get In Touch'});
        this.contactUsNameInput = page.getByPlaceholder('Name');
        this.contactUsEmailInput = page.locator('[data-qa="email"]');
        this.contactUsSubjectInput = page.getByPlaceholder('Subject');
        this.contactUsMessageInput = page.getByPlaceholder('Your Message Here');
        this.contactUsSubmitButton = page.locator('[data-qa="submit-button"]');
        this.contactUsSuccessMessage = page.locator('#contact-page').getByText('Success! Your details have been submitted successfully.');
        this.contactUsSuccessMessageText = 'Success! Your details have been submitted successfully.';
        this.getInTouchLabelText = 'Get In Touch';
    }
   
    //Method to go to contact us page
    async goTo() {
        await this.page.goto(this.url);
    }

    async fillContactUsForm():Promise<void> {
        await this.contactUsNameInput.fill(process.env.NAME!);
        await this.contactUsEmailInput.fill(process.env.USER_EMAIL!);
        await this.contactUsSubjectInput.fill(process.env.SUBJECT!);
        await this.contactUsMessageInput.fill(process.env.MESSAGE!);
        await this.contactUsSubmitButton.click();
    }

    
}