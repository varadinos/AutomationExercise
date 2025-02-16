import { expect, type Locator, type Page } from '@playwright/test';
import { BasePage } from './BasePage';
import { LoadFnOutput } from 'module';

export class LoginSignupPage extends BasePage {
    readonly page: Page;
    readonly loginButton: Locator;
    readonly signupButton: Locator;
    readonly loginLabel: Locator;
    readonly newUserLabel: Locator;
    readonly url: string;
    readonly passwordInput: Locator;
    readonly loginEmailInput: Locator;
    readonly loginErrorMessage: Locator;
    readonly emptyFieldMessage: Locator;
    readonly signupNameInput: Locator;
    readonly signupEmailInput: Locator;
    readonly loggedInText: Locator;
    readonly emailExistMsg: Locator;
    readonly logoutButton:  Locator;
    readonly loginSignupPageTitle: string;
    

    constructor (page: Page) {
        super(page);
        this.page = page;
        this.loginButton = page.getByRole('button', { name: 'Login'});
        this.signupButton = page.getByRole('button', { name: 'Signup'});
        this.loginLabel = page.locator('h2', {hasText: 'Login to your account'})
        this.newUserLabel = page.locator('h2', {hasText: 'New User Signup!'})
        this.url = "https://www.automationexercise.com/login";
        this.loginEmailInput = page.locator('[data-qa="login-email"]');
        this.passwordInput = page.locator('[data-qa="login-password"]');
        this.loginErrorMessage = page.getByText('Your email or password is incorrect!');
        this.emptyFieldMessage = page.locator('Please fill out this field.');
        this.signupNameInput = page.locator('[data-qa="signup-name"]')
        this.signupEmailInput = page.locator('[data-qa="signup-email"]')
        this.loggedInText = page.getByText('Logged in as Sia QA');
        this.emailExistMsg = page.locator('p', {hasText: "Email Address already exist!"});
        this.logoutButton = page.locator('a', {hasText: " Logout"});
        this.loginSignupPageTitle = 'Automation Exercise - Signup / Login';

    }


    //Method to go to signup / login page
    async goTo() {
        await this.page.goto(this.url);
    }

    //Method to verify 'New User Signup!' label is visible
    async verifyLoginLabelIsVisible(): Promise<void>{
        await expect(this.loginLabel).toBeVisible()
    }

    //Method to check if email field message without input is valid
    async checkEmailField(): Promise<void>{
        const isEmailInvalid = await this.loginEmailInput.evaluate(input => (input as HTMLInputElement).validity.valueMissing);
    }

    async newUserSignup(name: string, email: string): Promise<void>{
        await this.signupNameInput.fill(name);
        await this.signupEmailInput.fill(email);
        await this.signupButton.click();
    }

    async loginWithInvalidCredentials(): Promise<void>{
        await this.loginEmailInput.fill(process.env.INVALID_EMAIL!);
        await this.passwordInput.fill(process.env.INVALID_PASSWORD!);
        await this.loginButton.click();
    }

    async checkErrorMsgForInvalidCredentials(): Promise<void>{
        await expect(this.loginErrorMessage).toBeVisible();
        await expect(this.loginErrorMessage).toHaveText('Your email or password is incorrect!');
    }

    async loginWithValidCredentials(): Promise<void>{
        await this.loginEmailInput.fill(process.env.VALID_EMAIL!);
        await this.passwordInput.fill(process.env.VALID_PASSWORD!);
        await this.loginButton.click();
        await expect(this.loggedInText).toBeVisible();
        await expect(this.loggedInText).toHaveText('Logged in as Sia QA');
    }

    async checkErrorMsgForExistingEmail(): Promise<void>{
        await expect(this.emailExistMsg).toBeVisible();
        await expect(this.emailExistMsg).toHaveText("Email Address already exist!");
    }
}

