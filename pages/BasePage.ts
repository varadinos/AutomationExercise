import { type Locator, type Page } from '@playwright/test';
import { test, expect } from "../tests/fixtures/fixtures"

export class BasePage {
    readonly page: Page;
    readonly consentButton: Locator;

    constructor (page: Page) {
        this.page = page;
        this.consentButton = page.getByRole('button', {name: 'Consent'});
    }

    //Method to get the page title:
    async getPageTitle(): Promise<string> {
        return this.page.title();
    }
    
    //Method to assert the page title:
    async assertPageTitle(expectedTitle: string): Promise<void> {
        await expect(this.page).toHaveTitle(expectedTitle);
    }

    //Method to click consent button:
    async clickConsentButton(): Promise<void>{
        await this.consentButton.click();
    }

}