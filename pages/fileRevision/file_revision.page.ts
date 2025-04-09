import { test, type Locator, type Page } from '@playwright/test';

export class FileARevision {
    readonly page: Page;

    readonly revisionbtn: Locator;
    readonly caseIdInput: Locator
    readonly fetchButton: Locator
    readonly appealField: Locator
    readonly groundField: Locator
    readonly prayerField: Locator
    readonly submitButton: Locator

    constructor(page: Page) {
        this.page = page;

        this.revisionbtn = page.locator("button:nth-child(6)");
        this.caseIdInput = page.locator("//input[@placeholder='Search by Case Title']");
        this.fetchButton = page.locator("//button[normalize-space()='Fetch']");
        this.appealField = page.locator("(//div[contains(@role,'textbox')])[1]");
        this.groundField = page.locator("(//div[contains(@role,'textbox')])[2]");
        this.prayerField = page.locator("(//div[contains(@role,'textbox')])[3]");
        this.submitButton = page.locator("button[type='submit']");
    }

    async fileAppeal(caseId: string, appeal: string, ground: string, prayer: string) {
        await this.revisionbtn.click();
        await this.caseIdInput.fill(caseId);
        await this.fetchButton.click();

        await this.page.waitForTimeout(2000);

        await this.appealField.fill(appeal);
        await this.groundField.fill(ground);
        await this.prayerField.fill(prayer);

        await this.submitButton.click();
    }
}

