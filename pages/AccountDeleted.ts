import { expect, type Locator, type Page } from '@playwright/test';

export class AccountDeleted {
    readonly page: Page;
    readonly accountDeletedMessage: Locator;
    readonly congratMessage: Locator;
    readonly continueButton: Locator;
    readonly loggedInAs: Locator;

    constructor (page: Page) {
        this.page = page;
        this.accountDeletedMessage = page.getByText("Account Deleted!");
        this.congratMessage = page.getByText("Your account has been permanently deleted!");
        this.continueButton = page.locator('[data-qa="continue-button"]');
        this.loggedInAs = page.getByText(" Logged in as ");
    }
   
    async accountIsDeleted(): Promise<void> {
        await expect(this.accountDeletedMessage).toBeVisible();
        await expect(this.congratMessage).toBeVisible();
    }

    async redirectToHomePage(): Promise<void> {
        await this.continueButton.click();
        await expect(this.page.title).toBe("Automation Exercise");
    }

}