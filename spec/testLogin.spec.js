(() => {
    'use-strict';

    describe('test conti prototype login functionality', () => {

        const width = 1920;
        const height = 1080;

        const utils = require('./helper');
        const puppeteer = require('puppeteer');
        let browser, page;

        beforeAll(async (done) => {
            browser = await puppeteer.launch({
                headless: false,
                slowMo: 50,
                args: [`--window-size=${width},${height}`]
            });
            page = await browser.newPage();
            await page.setViewport({
                width,
                height
            });
            await page.goto('https://prototyp-conti-hrinbox.firebaseapp.com/home');
            await utils.login(page);
            done();
        }, 15000);

        it('should show the sign out button after login', async (done) => {
            await page.waitForSelector('.fa-sign-out');
            done();
        }, 15000);

        afterAll(async (done) => {
            await utils.logout(page);
            await browser.close();
            done();
        }, 15000);
    });

})();