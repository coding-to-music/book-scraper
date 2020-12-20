// ./book-scraper/index.js

// # Here you will require browser.js and pageController.js. You will then call the startBrowser() function and pass the created browser instance to our page controller, which will direct its actions. Add the following code:

const browserObject = require('./browser');
const scraperController = require('./pageController');

//Start the browser and create a browser instance
let browserInstance = browserObject.startBrowser();

// Pass the browser instance to the scraper controller
scraperController(browserInstance)