
# Here you will create an object literal with a url property and a scraper() method. 
# The url is the web URL of the web page you want to scrape, 
# while the scraper() method contains the code that will perform your actual scraping, 
# although at this stage it merely navigates to a URL. 
# Add the following code:

./book-scraper/pageScraper.js
const scraperObject = {
    url: 'http://books.toscrape.com',
    async scraper(browser){
        let page = await browser.newPage();
        console.log(`Navigating to ${this.url}...`);
        await page.goto(this.url);

    }
}

module.exports = scraperObject;
 
# Puppeteer has a newPage() method that creates a new page instance in the browser, 
# and these page instances can do quite a few things. 
# In our scraper() method, you created a page instance and 
# then used the page.goto() method to navigate to the books.toscrape.com homepage.