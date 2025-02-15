import { expect, type Locator, type Page } from '@playwright/test';
import { BasePage } from './BasePage';
import { promises } from 'dns';

export class RegistrationPage extends BasePage {
    readonly page: Page;
    readonly url: string;
    readonly titleRadioButtonMr: Locator;
    readonly titleRadioButtonMs: Locator;
    readonly nameInput: Locator;
    readonly emailInput: Locator;
    readonly passwordInput: Locator;
    readonly dayDropdown: Locator;
    readonly monthDropdown: Locator;
    readonly yearDropdown: Locator;
    readonly newsletterCheckbox: Locator;
    readonly specialOffersCheckbox: Locator;
    readonly firstNameInput: Locator;
    readonly lastNameInput: Locator;
    readonly companyInput: Locator;
    readonly addressInput: Locator;
    readonly addressSecondInput: Locator;
    readonly countryDropdown: Locator;
    readonly stateInput: Locator;
    readonly cityInput: Locator;
    readonly zipcodeInput: Locator;
    readonly mobileNumberInput: Locator;
    readonly createAccountButton: Locator;


    constructor (page: Page) {
        super(page);
        this.page = page;
        this.url = "https://www.automationexercise.com/signup";
        this.titleRadioButtonMr = page.locator('input[name="title"][value="Mr"]');
        this.titleRadioButtonMs = page.locator('input[name="title"][value="Ms"]');
        this.nameInput = page.locator('#name');
        this.emailInput = page.locator('#email');
        this.passwordInput = page.locator('#password');
        this.dayDropdown = page.locator('#days');
        this.monthDropdown = page.locator('#months');
        this.yearDropdown = page.locator('#years');
        this.newsletterCheckbox = page.locator('input[name=newsletter]');
        this.specialOffersCheckbox = page.locator('input[name=optin]');
        this.firstNameInput = page.locator('#first_name');
        this.lastNameInput = page.locator('#last_name');
        this.companyInput = page.locator('#company');
        this.addressInput = page.locator('#address1');
        this.addressSecondInput = page.locator('#address2');
        this.countryDropdown = page.locator('#country');
        this.stateInput = page.locator('#state');
        this.cityInput = page.locator('#city');
        this.zipcodeInput = page.locator('#zipcode');
        this.mobileNumberInput = page.locator('#mobile_number');
        this.createAccountButton = page.locator('[data-qa="create-account"]');

    }


    async enterAccountInformation():Promise<void> {
       await this.titleRadioButtonMr.click();
       await this.nameInput.fill(process.env.NAME!);
       await this.passwordInput.fill(process.env.VALID_PASSWORD!);
       await this.dayDropdown.selectOption(process.env.BIRTH_DAY!);
       await this.monthDropdown.selectOption(process.env.BIRTH_MONTH!);
       await this.yearDropdown.selectOption(process.env.BIRTH_YEAR!);
       await this.newsletterCheckbox.check();
       await this.specialOffersCheckbox.check();
    }

    async enterAddressInformation():Promise<void> {
        await this.firstNameInput.fill(process.env.USER_FIRST_NAME!);
        await this.lastNameInput.fill(process.env.USER_LAST_NAME!);
        await this.companyInput.fill(process.env.COMPANY_NAME!);
        await this.addressInput.fill(process.env.ADDRESS!);
        await this.addressSecondInput.fill(process.env.ADDRESS_TWO!);
        await this.countryDropdown.selectOption(process.env.COUNTRY!);
        await this.stateInput.fill(process.env.STATE!);
        await this.cityInput.fill(process.env.CITY!);
        await this.zipcodeInput.fill(process.env.ZIPCODE!);
        await this.mobileNumberInput.fill(process.env.MOBILE_NUMBER!);
        await this.createAccountButton.click();
    }

}

