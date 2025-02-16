import {test as base} from '@playwright/test';
import playwright from 'playwright';
import dotenv from 'dotenv';
import { HomePage } from "../../pages/HomePage";
import { LoginSignupPage } from "../../pages/LoginSignupPage";
import { BasePage } from '../../pages/BasePage';
import { RegistrationPage } from '../../pages/RegistrationPage';
import { AccountCreated } from '../../pages/AccountCreated';
import { ContactUs } from '../../pages/ContactUs'

dotenv.config();

type Fixtures = {
    homePage: HomePage;
    loginSignupPage: LoginSignupPage;
    basePage: BasePage;
    registrationPage: RegistrationPage;
    accountCreatedPage: AccountCreated;
    contactUsPage: ContactUs;

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

    homePage: async ({page, basePage}, use) => {
        const homePage = new HomePage(page);
        await homePage.goTo();
        await basePage.clickConsentButton();
        await use(homePage);
    },
    
    loginSignupPage: async ({page, basePage}, use) => {
        const loginSignupPage = new LoginSignupPage(page);
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

    contactUsPage: async({page,basePage}, use) => {
        const contactUsPage = new ContactUs(page);
        await contactUsPage.goTo();
        await basePage.clickConsentButton();
        await use(contactUsPage);
    },

})

export { expect } from '@playwright/test';

