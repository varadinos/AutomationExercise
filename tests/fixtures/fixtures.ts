import {test as base} from '@playwright/test';
import playwright from 'playwright';
import dotenv from 'dotenv';
import { HomePage } from "../../pages/HomePage";
import { LoginSignupPage } from "../../pages/LoginSignupPage";
import { BasePage } from '../../pages/BasePage';
import { RegistrationPage } from '../../pages/RegistrationPage';
import { AccountCreated } from '../../pages/AccountCreated';

dotenv.config();

type Fixtures = {
    homePage: HomePage;
    loginSignupPage: LoginSignupPage;
    basePage: BasePage;
    registrationPage: RegistrationPage;
    accountCreatedPage: AccountCreated;

};

export const test = base.extend<Fixtures>({
    browser: async ({}, use) => {
        const browser = await playwright.chromium.launch({ headless: false, args: ['--start-maximized'] }); // For example, run with UI
        await use(browser);
        await browser.close();
      },
    
      // Page fixture that creates a new page and attaches it to a browser context
      page: async ({ browser }, use) => {
        const page = await browser.newPage();
        page.setViewportSize({width: 1920, height: 1040});
        await use(page);
        await page.close();
      },

    homePage: async ({page}, use) => {
        const homePage = new HomePage(page);
        await homePage.goTo();
        await homePage.clickConsentButton();
        await use(homePage);
    },
    
    loginSignupPage: async ({page}, use) => {
        const loginSignupPage = new LoginSignupPage(page);
        const basePage = new BasePage(page);
        await loginSignupPage.goTo();
        await basePage.clickConsentButton();
        await use(loginSignupPage);
    },

    basePage: async ({page}, use) => {
        const basePage = new BasePage(page);
        await use(basePage);
    },

    registrationPage: async({page}, use) => {
        const registrationPage = new RegistrationPage(page);
        await use(registrationPage);
    },
    
    accountCreatedPage: async({page}, use) => {
        const accountCreatedPage = new AccountCreated(page);
        await use(accountCreatedPage);
    },

})

export { expect } from '@playwright/test';

