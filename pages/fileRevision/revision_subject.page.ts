import { test, type Locator, type Page } from '@playwright/test';

export class RevisionSubject {
    readonly page: Page;

    readonly revisiontextbox: Locator;
    readonly nxtButton: Locator

    constructor(page: Page) {
        this.page = page;

        this.revisiontextbox = page.locator("//div[@role='textbox']");
        this.nxtButton = page.locator("button[type='submit']");
    }

    async fillrevisionsbj(revision_sbj: string) {
        await this.revisiontextbox.fill(revision_sbj);
        await this.nxtButton.click();
    }
}

