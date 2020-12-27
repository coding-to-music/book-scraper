// ./book-scraper/pageController.js

// # pageController.js controls your scraping process. 
// # It uses the browser instance to control the pageScraper.js file, which is where all the scraping scripts execute.
// # Eventually, you will use it to specify what book category you want to scrape. 
// # For now, however, you just want to make sure that you can open Chromium and navigate to a web page:

// let numPage = 0;
// numPage++ 
// console.log(scrapedData);
// console.log(`URL ${numPage} of ${scrapedData.length}`);

const pageScraper = require('./pageScraper');
async function scrapeAll(browserInstance){
    let browser;
    try{
        browser = await browserInstance;
        let scrapedData = {};

        console.log('In pageController - about to call pageScraper(travel)');

        // Call the scraper for different set of books to be scraped
        scrapedData['Travel'] = await pageScraper.scraper(browser, 'Travel');

        await browser.close();
        console.log(scrapedData)
    }
    catch(err){
        console.log("Could not resolve the browser instance => ", err);
    }
}
module.exports = (browserInstance) => scrapeAll(browserInstance)
 
// # This code exports a function that takes in the browser instance and passes it to a function called scrapeAll(). 
// # This function, in turn, passes this instance to pageScraper.scraper() as an argument which uses it to scrape pages.


