class FormPage {
    constructor(page) {
        this.page = page;
        this.inputFormSubmitLink = this.page.locator("//a[text()='Input Form Submit']");
        this.nameInput = this.page.locator('#name');
        this.emailInput = this.page.locator('#inputEmail4');
        this.passwordInput = this.page.locator('#inputPassword4');
        this.companyInput = this.page.locator('#company');
        this.websiteInput = this.page.locator('#websitename');
        this.countrySelect = this.page.locator("select[name='country']");
        this.cityInput = this.page.locator('#inputCity');
        this.address1Input = this.page.locator('#inputAddress1');
        this.address2Input = this.page.locator('#inputAddress2');
        this.stateInput = this.page.locator('#inputState');
        this.zipInput = this.page.locator('#inputZip');
        this.submitButton = this.page.getByRole('button', { name: 'Submit' });
        this.successMessage = this.page.locator("//p[@class='success-msg hidden']");
        this.errorMessage = this.page.locator('input[name="name"]:invalid');

    }

    async navigate(baseURL) {
        await this.page.goto(baseURL);
    }

    async clickInputForm() {
        await this.inputFormSubmitLink.click();
    }

    async submitEmptyForm() {
        await this.submitButton.click();
        await this.page.waitForTimeout(3000);
    }

    async validateErrorMessage(expectedMessage) {
        const errorMessageElement = await this.page.waitForSelector('input[name="name"]:invalid', { state: 'attached' });
        if (errorMessageElement) {
            // Use evaluate to get the validation message from the element
            const errorMessage = await this.page.evaluate(el => el.validationMessage, errorMessageElement);
            console.log(errorMessage);
            // Compare the retrieved message with the expected message
            return errorMessage === expectedMessage;
        }
        console.log("Error message element was not found.");
        return false;
    }

    async fillForm(data) {
        await this.nameInput.fill(data.name);
        await this.emailInput.fill(data.email);
        await this.passwordInput.fill(data.password);
        await this.companyInput.fill(data.company);
        await this.websiteInput.fill(data.website);
        await this.countrySelect.selectOption(data.country);
        await this.cityInput.fill(data.city);
        await this.address1Input.fill(data.address1);
        await this.address2Input.fill(data.address2);
        await this.stateInput.fill(data.state);
        await this.zipInput.fill(data.zip);
    }

    async submitForm() {
        await this.submitButton.click();
    }

    async getSuccessMessage() {
        return await this.successMessage.textContent();
    }
}

module.exports = FormPage;