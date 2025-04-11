import { test, type Locator, type Page } from '@playwright/test';

export class AppealSubject {
    readonly page: Page;

    readonly appealtextbox: Locator;
    readonly nxtButton: Locator

    constructor(page: Page) {
        this.page = page;

        this.appealtextbox = page.locator("//div[@role='textbox']");
        this.nxtButton = page.locator("button[type='submit']");
    }

    async fillrevisionsbj(appeal_sbj: string) {
        await this.appealtextbox.fill(appeal_sbj);
        await this.nxtButton.click();
    }
}

