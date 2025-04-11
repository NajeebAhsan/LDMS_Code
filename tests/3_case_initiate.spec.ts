import { test, expect } from '@playwright/test';
import { SignInForm } from '../pages/signInForm.page';
import testData from '../data/testData.json';
import { CaseInitiation } from '../pages/initiate_case.page';
import { Petitioner } from '../pages/petitioner_info.page';
import formsdata from '../data/formsdata.json';
import { SuitProperty } from '../pages/suit_property.page';
import { RespondentInfo } from '../pages/respondent_info.page';
import { CaseType } from '../pages/case_type.page';
import { CaseDetails } from '../pages/detail_case.page';
import { UploadDocuments } from '../pages/upload_documents.page';

test.skip('User is able to initiate a Case', async ({ page }) => {

    const signInForm = new SignInForm(page);
    await signInForm.gotoLogin_Url();

    await signInForm.login(testData.Email, testData.Password);
    await signInForm.captcha(testData.cap, testData.Otp);
    await page.waitForTimeout(2000);
    await signInForm.selectLanguage();

    // Initiation a Case
    const caseInitiation = new CaseInitiation(page);
    await caseInitiation.navigateToInitiateCase();
    await caseInitiation.InitiateNewCase();

    // Petitioner Info
    const petitioner = new Petitioner(page);
    await petitioner.petitionerinfo(
        formsdata.petitionerInformation.Firstname,
        formsdata.petitionerInformation.LastName,
        formsdata.petitionerInformation.FatherName,
        formsdata.petitionerInformation.CNIC,
        formsdata.petitionerInformation.Email,
        formsdata.petitionerInformation.Phone
    );

    await petitioner.petitionerLawyer();
    await page.waitForTimeout(5000);

    //suit property
    const suitProperty = new SuitProperty(page);
    await suitProperty.SuitProperty(
        formsdata.suitProperty.Division,
        formsdata.suitProperty.District,
        formsdata.suitProperty.Tehsil,
        formsdata.suitProperty.Mauza,
        formsdata.suitProperty.Khewat,
        formsdata.suitProperty.Parcel

    );

    const respondentinfo = new RespondentInfo(page);
    await respondentinfo.RespondentInformation(
        formsdata.respondentInformation.StateRespondent,
        formsdata.respondentInformation.FirstName,
        formsdata.respondentInformation.LastName,
        formsdata.respondentInformation.FatherName,
        formsdata.respondentInformation.CNIC,
        formsdata.respondentInformation.Email,
        formsdata.respondentInformation.Phone

    );

    console.log("Respondent Data:", formsdata.respondentInformation);

    await page.waitForTimeout(3000);

    const casetype = new CaseType(page);
    await casetype.fillCaseDetails(
        formsdata.caseType.type,
        formsdata.caseType.subType
    );

    const caseDetail = new CaseDetails(page);
    await caseDetail.fillCaseDetails(
        formsdata.detailOfTheCase.Plaint,
        formsdata.detailOfTheCase.Ground,
        formsdata.detailOfTheCase.Prayer,
        formsdata.detailOfTheCase.Misccellanous
    );

    const documents = new UploadDocuments(page);
    const filePaths = Array.isArray(formsdata.documents.filePath) 
        ? formsdata.documents.filePath 
        : [formsdata.documents.filePath];

    await documents.uploadAllDocuments(filePaths);
    await documents.previewSubmission();
    console.log("Respondent Data:", formsdata.respondentInformation);
    await page.pause();

});
