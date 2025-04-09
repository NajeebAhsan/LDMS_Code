import { expect, type Locator, type Page } from '@playwright/test';

export class UploadDocuments {
    readonly page: Page;
    readonly fileInput: Locator;
    readonly nextBtn: Locator;
    readonly subtBtn: Locator;
    readonly pageTitle: Locator;

    constructor(page: Page) {
        this.page = page;
        this.fileInput = page.locator("input[type='file']");
        this.nextBtn = page.locator("button[type='submit']");
        this.subtBtn = page.locator("//button[@type='button'][normalize-space()='Submit']");
        this.pageTitle = page.locator("text=Your Application in case titled");
    }

    async uploadFile(index: number, filePath: string) {
        await this.fileInput.nth(index).setInputFiles(filePath);
    }

    async uploadAllDocuments(files: string[]) {
        for (let i = 0; i < files.length; i++) {
            await this.uploadFile(i, files[i]);
        }
        await this.nextBtn.waitFor({ state: 'visible' });
        await this.nextBtn.click();
    }

    async previewSubmission() {
        await this.subtBtn.scrollIntoViewIfNeeded();
        await this.subtBtn.click();
        await expect(this.pageTitle).toBeVisible();

        
        const titleText = await this.pageTitle.innerText();
        console.log("Page Title:", titleText);
    }

}
