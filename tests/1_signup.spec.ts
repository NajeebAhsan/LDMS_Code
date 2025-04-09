import { test, expect } from '@playwright/test';
import { SignUpForm } from '../pages/signUpForm.page';
import testData from '../data/testData.json';

test.skip('Citizenship selection and Sign Up process', async ({ page }) => {
    const signUpForm = new SignUpForm(page);

    await signUpForm.gotoSignUp_Url();
    await signUpForm.gotoCitizenshipPage();
    await signUpForm.selectPakistani();
    await signUpForm.enterPhoneNumberAndGetCode(testData.PhoneNumber);
    await signUpForm.enterOTPAndSubmit(testData.otpcode);

    try {
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
    } catch (error) {
        const errorMessage = await page.locator('.error-message-selector').innerText().catch(() => '');

        if (errorMessage.includes('User Signed up failed')) {
            console.log(' Email already registered');
            return; 
        } else {
            throw error;
        }
    }
});
