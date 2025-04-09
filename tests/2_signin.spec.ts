import { test, expect } from '@playwright/test';
import { SignInForm } from '../pages/signInForm.page';
import testData from '../data/testData.json';

test.skip('User should be able to sign in successfully', async ({ page }) => {
    
    const signInForm = new SignInForm(page);
    // Navigate to Login Page
    await signInForm.gotoLogin_Url();

    await signInForm.login(testData.Email, testData.Password);
    await signInForm.captcha(testData.cap, testData.Otp);
    await page.waitForTimeout(5000);

    await page.waitForURL('http://103.167.163.69/dashboard');
    await expect(page).toHaveURL('http://103.167.163.69/dashboard');

    console.log('Login successful, URL verified!');
    await signInForm.selectLanguage();
});

