import { test } from '@playwright/test';
import { SignInForm } from '../pages/signInForm.page';
import testData from '../data/testData.json';
import { FileAnAppeal } from '../pages/fileAppeal/file_an_appeal.page'
import appealdata from '../data/appealdata.json'
import { AppealAppellantInfo } from '../pages/fileAppeal/appellant_info.page'
import { AppealSubject } from '../pages/fileAppeal/appealSbj.page'
import { DefendentInfo } from '../pages/fileAppeal/appeal_defendent.page'
import { AdditionalDocumentsPage } from '../pages/fileAppeal/appeal_additional.page'

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

    const appealAppellant = new AppealAppellantInfo(page);
    await appealAppellant.fillAppellantDetails(appealdata.appellantInfo.FirstName,
        appealdata.appellantInfo.LastName,
        appealdata.appellantInfo.FatherName,
        appealdata.appellantInfo.Cnic,
        appealdata.appellantInfo.Email,
        appealdata.appellantInfo.Phone
    );

    const appealsbj = new AppealSubject(page);
    await appealsbj.fillrevisionsbj(appealdata.appealSubject.subject);

    const defendantInfo = new DefendentInfo(page);
    await defendantInfo.adddefendent(appealdata.stateDefendant.stDefedant,
        appealdata.stateDefendant.DefInfo
    );

    const additionaldoc = new AdditionalDocumentsPage(page);
    await additionaldoc.addDocument(appealdata.additionalDocument.FieldName,
        appealdata.additionalDocument.docPath
    );
});