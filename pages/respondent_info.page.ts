import { th } from '@faker-js/faker/.';
import { expect, type Locator, type Page } from '@playwright/test';

export class RespondentInfo{
    readonly page: Page

    readonly addmorebtn: Locator;
    readonly stateAsRespondentCheckbox: Locator;
    readonly respondentDropdown: Locator;
    readonly saveButton: Locator;
    readonly addrespondentbtn: Locator;
    readonly firstNameInput: Locator;
    readonly lastNameInput: Locator;
    readonly fatherNameInput: Locator;
    readonly cnicInput: Locator;
    readonly emailInput: Locator;
    readonly phoneInput: Locator;
    readonly savebtn: Locator;
    readonly nextbtn: Locator;

    constructor(page: Page) {
        this.page = page;

        this.addmorebtn = page.locator("//button[normalize-space()='Add More']");
        this.stateAsRespondentCheckbox = page.locator("#state");
        this.respondentDropdown = page.locator("//select[@class='input']");
        this.saveButton = page.locator("//button[normalize-space()='Save']");
        this.addrespondentbtn = page.locator("//button[normalize-space()='Add Respondent']");
        this.firstNameInput = page.locator("#firstName");
        this.lastNameInput = page.locator("#lastName");
        this.fatherNameInput = page.locator("#fatherName");
        this.cnicInput = page.locator("#cnic");
        this.emailInput = page.locator("#email");
        this.phoneInput = page.locator("#phone");
        this.savebtn = page.locator("//button[@type='submit']");
        this.nextbtn = page.locator("//button[normalize-space()='Next']");
    }

    async RespondentInformation(resp: string, firstName: string, lastName: string, fatherName: string, cnic: string, email: string, phone: string) {
        await this.addmorebtn.click();
        await this.stateAsRespondentCheckbox.click();
        await this.respondentDropdown.selectOption(resp);
        await this.saveButton.click();
        await this.addrespondentbtn.click();
        await this.firstNameInput.fill(firstName);
        await this.lastNameInput.fill(lastName);
        await this.fatherNameInput.fill(fatherName);
        await this.cnicInput.fill(cnic);
        await this.emailInput.fill(email);
        await this.phoneInput.fill(phone);
        await this.savebtn.click()
        await this.nextbtn.click();
    }
}