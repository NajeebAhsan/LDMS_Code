import { th } from '@faker-js/faker/.';
import { expect, type Locator, type Page } from '@playwright/test';

export class SignInForm{
    readonly page: Page;

    readonly userId: Locator;
    readonly password: Locator;
    readonly submit_btn: Locator;
    readonly englishLangBtn: Locator;
    readonly captchaText: Locator;
    readonly captchaInput: Locator;
    readonly submitBtn: Locator;

    readonly otpcode: Locator
    readonly verifybtn:Locator

    constructor(page: Page) {
        this.page = page;

        this.userId = page.locator('#userId');
        this.password = page.locator('#password');
        this.submit_btn = page.locator('[id="submit"]');
        this.captchaText = page.locator('/html/body/section[2]/div/div[2]/div/form/div[3]/div/div/div'); 
        this.captchaInput = page.locator('input[placeholder="Enter the Code"]');
        this.submitBtn = page.locator('button[type="submit"]'); 

        this.otpcode = page.locator('input[autocomplete="one-time-code"]');
        this.verifybtn = page.locator("//button[contains(text(), 'Verify')]");

        this.englishLangBtn = page.locator("//button[contains(text(), 'English')]");
    }

    async gotoLogin_Url() {
        await this.page.goto('/login');
      }

    async login(UserId: string, password: string){
        await this.userId.fill(UserId);
        await this.password.fill(password);

        // const captchaValue = await this.captchaText.textContent(); 
        // await this.captchaInput.fill(captchaValue?.trim() || '');

    }

    async captcha(captcha: string, otp: string){
        await this.captchaInput.fill(captcha);
        await this.submitBtn.click();
        await this.otpcode.fill(otp);
        await this.verifybtn.click();

    }

    async selectLanguage() {
        await this.englishLangBtn.click();
    }

}