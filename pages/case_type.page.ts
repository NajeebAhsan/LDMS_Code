import { type Locator, type Page } from '@playwright/test';

export class CaseType {
    readonly page: Page;
    readonly caseTypeDropdown: Locator;
    readonly caseSubjectTextarea: Locator;
    readonly nextBtn: Locator;

    constructor(page: Page) {
        this.page = page;
        this.caseTypeDropdown = page.locator("#caseType");
        this.caseSubjectTextarea = page.locator("#caseSubject");
        this.nextBtn = page.locator("button[type='submit']");
    }

    async fillCaseDetails(caseType: string, caseSubj: string) {
        await this.caseTypeDropdown.selectOption(caseType);
        await this.caseSubjectTextarea.fill(caseSubj);
        await this.nextBtn.click();
    }
}
