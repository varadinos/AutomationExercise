import { expect, type Locator, type Page } from '@playwright/test';

export class HomePage {
    readonly page: Page;
    readonly loginSignupButton: Locator;
    readonly consentButton: Locator;
    readonly caruselInner: Locator;
    readonly url: string;
    readonly homePageTitle: string;

    constructor (page: Page) {
        this.page = page;
        this.loginSignupButton = page.getByRole('link', { name: 'Signup / Login'});
        this.consentButton = page.getByRole('button', {name: 'Consent'});
        this.caruselInner = page.locator('#slider-carousel');
        this.homePageTitle = 'Automation Exercise';
        this.url = "https://www.automationexercise.com";
    }

    //Method to click Login/Signup button
    async clickLoginSignupButton(): Promise<void> {
        await this.loginSignupButton.click();
    }

    //Method to check if Login/Signup button is visible
    async checkLoginSignupButtonIsVisible(): Promise<void> {
        await expect(this.loginSignupButton).toBeVisible();
    
    }

    //Method to verify that home page is visible successfully
    async verifyThatHomePageIsVisibe(): Promise<void> {
        await expect(this.caruselInner).toBeVisible()
    }

    //Method to go to home page
    async goTo() {
        await this.page.goto(this.url);
    }

}