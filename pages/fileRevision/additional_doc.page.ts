import { type Locator, type Page } from '@playwright/test';

export class AdditionalDocumentsPage {
    readonly page: Page;

    readonly docNameInput: Locator;
    readonly fileUploadBtn: Locator;
    readonly nextButton: Locator;
    readonly subtBtn: Locator;

    constructor(page: Page) {
        this.page = page;

        this.docNameInput = page.locator("//input[@placeholder='Enter Additional Document Name']");
        this.fileUploadBtn = page.locator("label[for='additionalDoc.0']");
        this.nextButton = page.locator("button[type='submit']");
        this.subtBtn = page.locator("//button[normalize-space()='Submit']");
    }

    async addDocument(documentName: string, filePath: string) {
        await this.docNameInput.fill(documentName);
        await this.fileUploadBtn.setInputFiles(filePath);
        await this.nextButton.click();
        await this.subtBtn.click();
    }
}
