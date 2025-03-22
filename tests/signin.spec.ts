import { test, expect } from '@playwright/test';
import { SignInForm } from '../pages/signInForm.page';
import testData from '../data/testData.json';

test.skip('User should be able to sign in successfully', async ({ page }) => {
    
    const signInForm = new SignInForm(page);
    // Step 1: Navigate to Login Page
    await signInForm.gotoLogin_Url();

    await signInForm.login(testData.Email, testData.Password);
    // await signInForm.selectLanguage();
    // await signInForm.navigateToInitiateCase();
    // await signInForm.clickInitiateNewCase();
    // await signInForm.verifyNoReLoginRequired();
});
