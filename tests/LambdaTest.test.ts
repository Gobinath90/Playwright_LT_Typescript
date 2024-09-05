import test from "../lambdatest-setup";
const { expect } = require('@playwright/test');
const SimpleFormPage = require('../pages/simpleFormPage');
const SliderPage = require('../pages/sliderPage');
const FormPage = require('../pages/formPage');


test.describe("Browse LambdaTest", () => {
    test.skip('Simple Form Demo', async ({ page }) => {
        const simpleFormPage = new SimpleFormPage(page);
        await simpleFormPage.navigate('https://www.lambdatest.com/selenium-playground');
        await simpleFormPage.clickSimpleFormDemo();
        const LambdaTest = 'Welcome to LambdaTest';
        await simpleFormPage.fillMessage(LambdaTest);
        const message = await simpleFormPage.getMessage();
        await expect(message).toBe(LambdaTest);
    });

    test('Drag & Drop Sliders', async ({ page }) => {
        const sliderPage = new SliderPage(page);
        await sliderPage.navigate('https://www.lambdatest.com/selenium-playground');
        await sliderPage.clickDragDropSliders();
        await page.waitForTimeout(2000);
        await sliderPage.setSliderValue('95');
        await page.waitForTimeout(2000);
        const value = await sliderPage.getSliderValue();
        await expect(value).toBe('95');
    });

    test.skip('Input Form Submit', async ({ page }) => {
        const formPage = new FormPage(page);
        await formPage.navigate('https://www.lambdatest.com/selenium-playground');
        await page.waitForTimeout(2000);
        await formPage.clickInputForm();
        await page.waitForTimeout(2000);
        // Submit the form without filling any data to trigger the error message
        await formPage.submitEmptyForm();
        await page.waitForTimeout(2000);
        //await formPage.validateErrorMessage('Please fill out this field.');
        const actualErrorMessage = await formPage.getErrorMessage();
        switch (actualErrorMessage) {
            case 'Please fill out this field.':
                await formPage.validateErrorMessage('Please fill out this field.');
                break;
            case 'Please fill in this field.':
                await formPage.validateErrorMessage('Please fill in this field.');
                break;
            case 'Please fill in this field.':
                await formPage.validateErrorMessage('fill out this field.');
                break;
            case 'Please fill in this field.':
                await formPage.validateErrorMessage('fill in this field.');
                break;
            default:
                throw new Error(`Unexpected error message: ${actualErrorMessage}`);
        }

        //await formPage.validateErrorMessage('Please fill out this field.');
        // Fill in the form with valid data
        const validData = {
            name: 'John Doe',
            email: 'john.doe@example.com',
            password: 'Password123!',
            company: 'Example Corp',
            website: 'https://example.com',
            country: 'United States',
            city: 'Sydney',
            address1: '123 George Street',
            address2: 'Suite 456',
            state: 'New South Wales (NSW)',
            zip: '2000'
        };
        await page.waitForTimeout(2000);
        await formPage.fillForm(validData);
        await formPage.submitForm();
        await page.waitForTimeout(2000);
        // Verify the success message
        const successMessage = await formPage.getSuccessMessage();
        await expect(successMessage).toBe('Thanks for contacting us, we will get back to you shortly.');
        await page.waitForTimeout(3000);
    });
});




