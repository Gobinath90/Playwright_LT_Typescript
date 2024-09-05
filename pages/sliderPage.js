class SliderPage {
    constructor(page) {
        this.page = page;
        this.dragDropSlidersLink = this.page.getByRole('link', { name: 'Drag & Drop Sliders' });
        this.slider = this.page.locator('#slider3').getByRole('slider');
        this.sliderOutput = this.page.locator('//output[(text())="95"]');
    }

    async navigate(baseURL) {
        await this.page.goto(baseURL);
    }

    async clickDragDropSliders() {
        await this.dragDropSlidersLink.click();
    }

    async setSliderValue(value) {
        await this.slider.fill(value);
    }

    async getSliderValue() {
        return await this.sliderOutput.textContent();
    }
}

module.exports = SliderPage;