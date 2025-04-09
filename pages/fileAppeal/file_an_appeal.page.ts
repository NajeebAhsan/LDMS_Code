import { test, type Locator, type Page } from '@playwright/test';

export class FileAnAppeal {
    readonly page: Page;

    readonly appealbtn: Locator;
    readonly caseIdInput: Locator
    readonly fetchButton: Locator
    readonly appealField: Locator
    readonly groundField: Locator
    readonly prayerField: Locator
    readonly submitButton: Locator

    constructor(page: Page) {
        this.page = page;

        this.appealbtn = page.locator("//h2[normalize-space()='File an Appeal']");
        this.caseIdInput = page.locator("//input[@placeholder='Search by Case Title']");
        this.fetchButton = page.locator("//button[normalize-space()='Fetch']");
        this.appealField = page.locator("(//div[@role='textbox'])[1]");
        this.groundField = page.locator("(//div[@role='textbox'])[2]");
        this.prayerField = page.locator("(//div[@role='textbox'])[3]");
        this.submitButton = page.locator("button[type='submit']");
    }

    async fillappealdetails(CaseId: string, appeal: string, ground: string, prayer: string){
        await this.appealbtn.click();
        await this.caseIdInput.fill(CaseId);
        await this.fetchButton.click();
        await this.appealField.fill(appeal);
        await this.groundField.fill(ground);
        await this.prayerField.fill(prayer);
        await this.submitButton.click();
    }
}