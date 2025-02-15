import { expect, type Locator, type Page } from '@playwright/test';

export class AccountCreated {
    readonly page: Page;
    readonly accountCreatedMessage: Locator;
    readonly congratMessage: Locator;
    readonly continueButton: Locator;
    readonly loggedInAs: Locator;

    constructor (page: Page) {
        this.page = page;
        this.accountCreatedMessage = page.getByText("Account Created!");
        this.congratMessage = page.getByText("Congratulations! Your new account has been successfully created!");
        this.continueButton = page.locator('[data-qa="continue-button"]');
        this.loggedInAs = page.getByText(" Logged in as ");
    }
   
    async verifyAccount(): Promise<void> {
        await expect(this.accountCreatedMessage).toBeVisible();
        await expect(this.congratMessage).toBeVisible();
    }

    async checkUserIsLoggedIn(): Promise<void> {
        await this.continueButton.click();
        await expect(this.loggedInAs).toBeVisible();
        await expect(this.loggedInAs).toHaveText(" Logged in as " + process.env.NAME!);
    }

}