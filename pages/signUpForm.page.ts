import { expect, type Locator, type Page } from '@playwright/test';

export class SignUpForm {
    readonly page: Page;

    readonly lawyerButton: Locator
    readonly citizenshipDropdown: Locator
    readonly cnicButton: Locator;

    readonly phoneNumberInput: Locator;
    readonly getCodeButton: Locator;

    readonly otpField: Locator;
    readonly nextButton: Locator;

    readonly cnic: Locator;
    readonly firstName: Locator;
    readonly lastName: Locator;
    readonly fatherName: Locator;
    readonly email: Locator;
    readonly password: Locator;
    readonly cpassword: Locator;
    readonly bar_council_numb: Locator;
    readonly captchaText: Locator;
    readonly captchaInput: Locator;
    readonly submitBtn: Locator;

    constructor(page: Page) {
        this.page = page;

        this.lawyerButton = page.locator("//button[normalize-space()='Lawyer']");
        this.citizenshipDropdown = page.locator("//select[@id='citizenship']");
        this.cnicButton = page.locator("//button[contains(text(), 'CNIC')]");

        this.phoneNumberInput = page.locator("input[type='tel']");
        this.getCodeButton = page.locator("//button[contains(text(), 'Get Code')]");

        this.otpField = page.locator("input[autocomplete='one-time-code']");
        this.nextButton = page.locator("button[type='button']");

        this.cnic = page.locator('#cnic');
        this.firstName = page.locator('#firstName');
        this.lastName = page.locator('#lastName');
        this.fatherName = page.locator('#fatherName');
        this.email = page.locator('#email');
        this.password = page.locator('#password');
        this.cpassword = page.locator('#confirmPassword');
        this.bar_council_numb = page.locator('#BarCouncilRegNo');

        this.captchaText = page.locator('xpath=/html/body/section[2]/div/div[2]/div/form/div[2]/div/div/div'); 
        this.captchaInput = page.locator('input[placeholder="Enter the Code"]'); 
        this.submitBtn = page.locator('button[type="submit"]');
    }

    async gotoSignUp_Url() {
        await this.page.goto('/role');
    }

    async gotoCitizenshipPage(){
        await this.lawyerButton.click();
        await this.citizenshipDropdown.click();
    }

    async selectPakistani() {
        await this.citizenshipDropdown.selectOption({ label: 'Pakistani' });
        await this.cnicButton.click();
    }

    async enterPhoneNumberAndGetCode(phoneNumber: string) {
        await this.phoneNumberInput.fill(phoneNumber);
        await this.getCodeButton.click();
    }

    async enterOTPAndSubmit(otpcode: string){
        await this.otpField.fill(otpcode);
        await this.nextButton.click();
    }
    async signUp(CNIC: string, Firstname: string, Lastname: string, Fathername: string,
        Email: string, Pass: string, Cpass: string, Barcouncil: string) {
        
        await this.cnic.fill(CNIC);
        await this.firstName.fill(Firstname);
        await this.lastName.fill(Lastname);
        await this.fatherName.fill(Fathername);
        await this.email.fill(Email);
        await this.password.fill(Pass);
        await this.cpassword.fill(Cpass);
        await this.bar_council_numb.fill(Barcouncil);

        // Fetch CAPTCHA
        const captchaValue = await this.captchaText.textContent(); 
        await this.captchaInput.fill(captchaValue?.trim() || '');
        await this.submitBtn.click();
    }
}