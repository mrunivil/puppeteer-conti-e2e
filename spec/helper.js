(() => {
    'use strict';

    const login = async (page) => {

        let btn = await page.$('.w3-button');
        await btn.click();
        await page.type('#username', 'Petra Super');
        await page.type('#password', 'PS');
        btn = await page.$('.w3-button.w3-green');
        await btn.click();
        return true;
    }

    const logout = async (page) => {
        let btn = await page.$('.w3-bar-item.w3-button');
        await btn.click();
        console.log('logout clicked');
        return true;
    }

    module.exports = {
        login: login,
        logout: logout
    }
})();