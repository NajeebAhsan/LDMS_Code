import { expect, type Locator, type Page } from '@playwright/test';

export class SignInForm{
    readonly page: Page;

    readonly userId: Locator;
    readonly password: Locator;
    readonly submit_btn: Locator;
    readonly englishLangBtn: Locator;
    readonly initiateCaseBtn: Locator;
    readonly initiateNewCaseBtn: Locator;
    readonly captchaText: Locator;
    readonly captchaInput: Locator;
    readonly submitBtn: Locator;

    constructor(page: Page) {
        this.page = page;

        this.userId = page.locator('#userId');
        this.password = page.locator('#password');
        this.submit_btn = page.locator('[id="submit"]');
        this.captchaText = page.locator('/html/body/section[2]/div/div[2]/div/form/div[3]/div/div/div'); 
        this.captchaInput = page.locator('input[placeholder="Enter the Code"]');
        this.submitBtn = page.locator('button[type="submit"]'); 
        this.englishLangBtn = page.locator('');
        this.initiateCaseBtn = page.locator('');
        this.initiateNewCaseBtn = page.locator('');
    }

    async gotoLogin_Url() {
        await this.page.goto('http://103.167.163.69/login');
      }

    async login(UserId: string, password: string){
        await this.userId.fill(UserId);
        await this.password.fill(password);
        await this.submit_btn.click();

        const captchaValue = await this.captchaText.textContent(); 
        await this.captchaInput.fill(captchaValue?.trim() || '');
        await this.submitBtn.click();
    }

    async selectLanguage() {
        await this.englishLangBtn.click();
    }

    async navigateToInitiateCase() {
        await this.initiateCaseBtn.click();
    }

    async clickInitiateNewCase() {
        await this.initiateNewCaseBtn.click();
    }
}