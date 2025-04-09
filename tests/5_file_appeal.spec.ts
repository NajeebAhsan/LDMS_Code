import { test, expect } from '@playwright/test';
import { SignInForm } from '../pages/signInForm.page';
import testData from '../data/testData.json';
import { FileAnAppeal } from '../pages/fileAppeal/file_an_appeal.page'
import appealdata from '../data/appealdata.json'

test.skip('User files an Appeal', async ({ page }) => {
    const signInForm = new SignInForm(page);
    await signInForm.gotoLogin_Url();

    await signInForm.login(testData.Email, testData.Password);
    await signInForm.captcha(testData.cap, testData.Otp);
    await page.waitForTimeout(2000);
    await signInForm.selectLanguage();

    const fileAppeal = new FileAnAppeal(page);
    await fileAppeal.fillappealdetails(appealdata.fetchAppeal.CaseId,
        appealdata.fetchAppeal.Appeal, appealdata.fetchAppeal.Ground,
        appealdata.fetchAppeal.Prayer);
});