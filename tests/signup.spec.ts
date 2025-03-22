import { test, expect } from '@playwright/test';
import { SignUpForm } from '../pages/signUpForm.pgae';
import testData from '../data/testData.json';

test('Citizenship selection and Sign Up process', async ({ page }) => {
    // Sign Up Process
    const signUpForm = new SignUpForm(page);
    // hitting Url
    await signUpForm.gotoSignUp_Url();
    // open citizen page
    await signUpForm.gotoCitizenshipPage();
    // select country
    await signUpForm.selectPakistani();
    // entering mobile number
    await signUpForm.enterPhoneNumberAndGetCode(testData.PhoneNumber);
    // entering otp code
    await signUpForm.enterOTPAndSubmit(testData.otpcode);
    // filling sinUp details
    await signUpForm.signUp(
        testData.CNIC,
        testData.FirstName,
        testData.LastName,
        testData.FatherName,
        testData.Email,
        testData.Password,
        testData.ConfirmPassword,
        testData.BarCouncilNumber

    );
    await page.waitForTimeout(5000);
});

