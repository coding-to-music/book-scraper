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
const fs = require('fs');
async function scrapeAll(browserInstance) {
    let browser;
    try {
        browser = await browserInstance;
        let scrapedData = {};

        console.log('In pageController - about to call pageScraper(travel)');

        // Call the scraper for different set of books to be scraped
        scrapedData['Travel'] = await pageScraper.scraper(browser, 'Travel');
        scrapedData['HistoricalFiction'] = await pageScraper.scraper(browser, 'Historical Fiction');
        scrapedData['Mystery'] = await pageScraper.scraper(browser, 'Mystery');

        await browser.close();
        fs.writeFile("data.json", JSON.stringify(scrapedData), 'utf8', function(err) {
            if(err) {
                return console.log(err);
            }
            console.log("The data has been scraped and saved successfully! View it at './data.json'");
        });
    }
    catch(err){
        console.log("Could not resolve the browser instance => ", err);
    }
}
module.exports = (browserInstance) => scrapeAll(browserInstance)

// # This code exports a function that takes in the browser instance and passes it to a function called scrapeAll(). 
// # This function, in turn, passes this instance to pageScraper.scraper() as an argument which uses it to scrape pages.


