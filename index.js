const test = require('./spec/helper.js');


(async () => {
    const puppeteer = require('puppeteer');
    let browser, page;
    browser = await puppeteer.launch({
        headless: false,
        slowMo: 10
    });
    page = await browser.newPage();
    await page.goto('https://prototyp-conti-hrinbox.firebaseapp.com/home');

    await test.login(page);
    await test.logout(page);
    await browser.close();
    // page = await browser.newPage();
    // await page.goto('https://prototyp-conti-hrinbox.firebaseapp.com/home');
    // let btn = await page.$('.w3-button')
    // await btn.click();
    // await page.type('#username', 'Petra Super');
    // await page.type('#password', 'PS');
    // btn = await page.$('.w3-button.w3-green');
    // btn.click();

})();