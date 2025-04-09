import { test, expect, type Page, type Locator } from '@playwright/test';

export class AppellantInformation {
    readonly page: Page;

    readonly addAppellantButton: Locator;
    readonly firstNameInput: Locator;
    readonly lastNameInput: Locator;
    readonly fatherNameInput: Locator;
    readonly cnicInput: Locator;
    readonly emailInput: Locator;
    readonly phoneInput: Locator;
    readonly saveButton: Locator;
    readonly nextButton: Locator;

    constructor(page: Page) {
        this.page = page;

        this.addAppellantButton = page.locator("//button[normalize-space()='Add Appellant']");
        this.firstNameInput = page.locator("#firstName");
        this.lastNameInput = page.locator("#lastName");
        this.fatherNameInput = page.locator("#fatherName");
        this.cnicInput = page.locator("#cnic");
        this.emailInput = page.locator("#email");
        this.phoneInput = page.locator("#phone");
        this.saveButton = page.locator("button[type='submit']");
        this.nextButton = page.locator("//button[normalize-space()='Next']");
    }

    async fillAppellantDetails(firstName: string, lastName: string, fatherName: string, cnic: string, email: string, phone: string) {
        await this.addAppellantButton.click();
        await this.firstNameInput.fill(firstName);
        await this.lastNameInput.fill(lastName);
        await this.fatherNameInput.fill(fatherName);
        await this.cnicInput.fill(cnic);
        await this.emailInput.fill(email);
        await this.phoneInput.fill(phone);
        await this.saveButton.click();
        await this.page.waitForTimeout(2000);
        await this.nextButton.click();
    }

}