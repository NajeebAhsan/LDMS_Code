import { expect, type Locator, type Page } from '@playwright/test';

export class CaseInitiation {
    readonly page: Page;

    readonly case: Locator
    readonly newcase:Locator
    readonly nextbtn:Locator

    constructor(page: Page) {
        this.page = page;

        this.case = page.locator("//h2[contains(text(), 'Initiate a Case')]");
        this.newcase = page.locator("//h2[contains(text(), 'Initiate a New Case')]");
        this.nextbtn = page.locator("//button[contains(text(), 'Next')]");
    }

    async navigateToInitiateCase() {
        await this.case.click();
    }

    async InitiateNewCase() {
        await this.newcase.click();
        await this.nextbtn.click();
    }
}