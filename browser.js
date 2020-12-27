// ./book-scraper/browser.js

// # First, you will require Puppeteer and then create an async function called startBrowser(). This function will start the browser and return an instance of it. Add the following code:

const puppeteer = require('puppeteer');

async function startBrowser(){
    let browser;
    try {
        console.log("In browser.js - Opening the browser......");
        browser = await puppeteer.launch({
            headless: true,
            args: ["--disable-setuid-sandbox"],
            'ignoreHTTPSErrors': true
        });
    } catch (err) {
        console.log("Could not create a browser instance => : ", err);
    }
    return browser;
}

module.exports = {
    startBrowser
};