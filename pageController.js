# pageController.js controls your scraping process. 
# It uses the browser instance to control the pageScraper.js file, which is where all the scraping scripts execute.
# Eventually, you will use it to specify what book category you want to scrape. 
# For now, however, you just want to make sure that you can open Chromium and navigate to a web page:

./book-scraper/pageController.js
const pageScraper = require('./pageScraper');
async function scrapeAll(browserInstance){
    let browser;
    try{
        browser = await browserInstance;
        await pageScraper.scraper(browser);

    }
    catch(err){
        console.log("Could not resolve the browser instance => ", err);
    }
}

module.exports = (browserInstance) => scrapeAll(browserInstance)
 
# This code exports a function that takes in the browser instance and passes it to a function called scrapeAll(). 
# This function, in turn, passes this instance to pageScraper.scraper() as an argument which uses it to scrape pages.