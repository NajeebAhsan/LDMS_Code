import { expect, type Locator, type Page } from '@playwright/test';

export class SuitProperty{
    readonly page: Page

    readonly divisionDropdown: Locator;
    readonly districtDropdown: Locator;
    readonly tehsilDropdown: Locator;
    readonly mauzaDropdown: Locator;
    readonly khewatDropdown: Locator;
    readonly parcelDropdown: Locator;
    readonly nextButton: Locator;

    constructor(page: Page) {
        this.page = page;

        this.divisionDropdown = page.locator("#division");
        this.districtDropdown = page.locator("#district");
        this.tehsilDropdown = page.locator("#tehsil");
        this.mauzaDropdown = page.locator("//select[@id='mauzas.0.name']");
        this.khewatDropdown = page.locator("//select[@id='mauzas.0.khewats.0.khewat']");
        this.parcelDropdown = page.locator("//select[@id='mauzas.0.khewats.0.parcelNo']");
        this.nextButton = page.locator("//button[contains(text(), 'Next')]");
    }

    async SuitProperty(division: string, district: string, tehsil: string, mauza: string, khewat: string, parcel: string) 
    {
        await this.divisionDropdown.selectOption(division);
        await this.districtDropdown.selectOption(district);
        await this.tehsilDropdown.selectOption(tehsil);
        await this.mauzaDropdown.selectOption(mauza);
        await this.khewatDropdown.selectOption(khewat);
        await this.parcelDropdown.selectOption(parcel);
        await this.nextButton.click();
    }
}