class SimpleFormPage {
    constructor(page) {
        this.page = page;
        this.simpleFormDemoLink = this.page.locator("//a[text()='Simple Form Demo']");
        this.messageInput = this.page.locator("(//input[@id='user-message'])[1]");
        this.showMessageButton = this.page.locator('#showInput');
        this.displayedMessage = this.page.locator('#message');
    }

    async navigate(baseURL) {
        await this.page.goto(baseURL);
    }

    async clickSimpleFormDemo() {
        await this.simpleFormDemoLink.click();
    }

    async fillMessage(text) {
        await this.messageInput.fill(text);
        await this.showMessageButton.click();
    }

    async getMessage() {
        return await this.displayedMessage.textContent();
    }
}

module.exports = SimpleFormPage;