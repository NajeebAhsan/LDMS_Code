import { expect, type Locator, type Page } from '@playwright/test';

export class CaseDetails{
    readonly page: Page

    readonly plaintarea: Locator;
    readonly groundarea: Locator;
    readonly prayerarea: Locator;
    readonly miscelleaneous: Locator;
    readonly subtbtn: Locator

    constructor(page: Page) {
        this.page = page;
        this.plaintarea = page.locator("(//div[@role='textbox'])[1]");
        this.groundarea = page.locator("(//div[@role='textbox'])[2]");
        this.prayerarea = page.locator("(//div[@role='textbox'])[3]");
        this.miscelleaneous= page.locator("(//div[@role='textbox'])[4]");
        this.subtbtn = page.locator("button[type='submit']");
    }

    async fillCaseDetails(plaint: string, ground: string, prayer: string, miscellaneous: string) {
        await this.page.waitForLoadState('domcontentloaded');

        await this.plaintarea.waitFor({ state: 'visible' });
        await this.plaintarea.fill(plaint);

        await this.groundarea.waitFor({ state: 'visible' });
        await this.groundarea.fill(ground);
    
        await this.prayerarea.waitFor({ state: 'visible' });
        await this.prayerarea.fill(prayer);

        await this.miscelleaneous.waitFor({ state: 'visible' });
        await this.miscelleaneous.fill(miscellaneous);

        await this.subtbtn.waitFor({ state: 'visible' });
        await this.subtbtn.click();
    }
    

}