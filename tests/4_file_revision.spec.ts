import { test, expect } from '@playwright/test';
import { SignInForm } from '../pages/signInForm.page';
import testData from '../data/testData.json';
import { FileARevision } from '../pages/fileRevision/file_revision.page';
import revisiondata from '../data/revisiondata.json';
import { AppellantInformation } from '../pages/fileRevision/add_appellant.page';
import { RevisionSubject } from '../pages/fileRevision/revision_subject.page'
import { DefendentInfo } from '../pages/fileRevision/defendent_info.page'
import { AdditionalDocumentsPage } from '../pages/fileRevision/additional_doc.page'


test.skip('User files a Revision', async ({ page }) => {
    const signInForm = new SignInForm(page);
    await signInForm.gotoLogin_Url();

    await signInForm.login(testData.Email, testData.Password);
    await signInForm.captcha(testData.cap, testData.Otp);
    await page.waitForTimeout(2000);
    await signInForm.selectLanguage();

    //Fetch Case_ID
    const fileAnAppeal = new FileARevision(page);
    await fileAnAppeal.fileAppeal(
        revisiondata.fetchRevision.CaseId,
        revisiondata.fetchRevision.Revision,
        revisiondata.fetchRevision.Ground,
        revisiondata.fetchRevision.Prayer
    );

    //Add Appellant
    const addappellant = new AppellantInformation(page);
    await addappellant.fillAppellantDetails(
        revisiondata.appellantInformation.FirstName,
        revisiondata.appellantInformation.LastName,
        revisiondata.appellantInformation.FatherName,
        revisiondata.appellantInformation.Cnic,
        revisiondata.appellantInformation.Email,
        revisiondata.appellantInformation.Phone
    )

    //Revision Subject
    const revisionsbj = new RevisionSubject(page);
    await revisionsbj.fillrevisionsbj(revisiondata.revisionSubject.subject);

    //State Defendant
    const defendantInfo = new DefendentInfo(page);
    await defendantInfo.adddefendent(revisiondata.stateDefendant.stDefedant,
        revisiondata.stateDefendant.DefInfo
    );

    //Additional document upload
    const additionaldoc = new AdditionalDocumentsPage(page);
    await additionaldoc.addDocument(revisiondata.additionalDocument.FieldName,
        revisiondata.additionalDocument.docPath
    );
});