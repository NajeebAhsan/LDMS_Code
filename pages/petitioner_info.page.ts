import { expect, type Locator, type Page } from '@playwright/test';

export class Petitioner{
    readonly page: Page

    readonly firstName:Locator
    readonly lastName:Locator
    readonly fatherName:Locator
    readonly cnic:Locator
    readonly email:Locator
    readonly number:Locator
    readonly savebtn:Locator
    readonly nextbtn:Locator

    readonly lawyrernext:Locator
    

    constructor(page: Page) {
        this.page = page;

        this.firstName = page.locator("#firstName");
        this.lastName = page.locator("#lastName");
        this.fatherName = page.locator("#fatherName");
        this.cnic = page.locator("#cnic");
        this.email = page.locator("#email");
        this.number = page.locator("#phone");
        this.savebtn = page.locator("button[type='submit']");
        this.nextbtn = page.locator("//button[contains(text(), 'Next')]");
        this.lawyrernext = page.locator("button[type='submit']");

}

    async petitionerinfo(First:string, Last:string, Father:string, CNIC:string, Email:string,Phone:string,)
    {
        await this.firstName.fill(First);
        await this.lastName.fill(Last);
        await this.fatherName.fill(Father);
        await this.cnic.fill(CNIC);
        await this.email.fill(Email);
        await this.number.fill(Phone);
        await this.savebtn.click();
        await this.nextbtn.click();
    }

    async petitionerLawyer(){
        await this.lawyrernext.click();
    }
}