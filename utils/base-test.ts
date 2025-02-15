import { test, chromium, Browser, Page } from '@playwright/test';

export class BaseTest {
    protected browser!: Browser;
    protected page!: Page;

    // Before each test, launch the browser and create a new page
    async beforeEach(): Promise<void> {
        this.browser = await chromium.launch({ headless: false }); // Launch the browser
        this.page = await this.browser.newPage();  // Create a new page for each test
    }

    // After each test, close the browser
    async afterEach(): Promise<void> {
        await this.browser.close();  // Close the browser after the test
    }

    getPage(): Page {
        if (!this.page) {
            throw new Error('Page is not initialized');
        }
        return this.page;
    }


}