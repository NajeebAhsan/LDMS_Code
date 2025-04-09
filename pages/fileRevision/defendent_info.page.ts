import { test, type Locator, type Page } from '@playwright/test';

export class DefendentInfo {
    readonly page: Page;

    readonly statebox: Locator;
    readonly defdropdown: Locator;
    readonly saveButton: Locator;
    readonly selectdefendant: Locator;
    readonly nextButton: Locator

    constructor(page: Page) {
        this.page = page;

        this.statebox = page.locator("#state");
        this.defdropdown = page.locator("(//select[@class='input'])[1]");
        this.saveButton = page.locator("//button[normalize-space()='Save']");
        this.selectdefendant = page.locator(".input");
        this.nextButton = page.locator("//button[normalize-space()='Next']");
    }

    async adddefendent(defendant: string, defendant_info: string) {
        await this.statebox.click();
        await this.defdropdown.selectOption(defendant);
        await this.saveButton.click();
        await this.selectdefendant.click();
        await this.selectdefendant.selectOption(defendant_info);
        await this.nextButton.click();
    }
}

