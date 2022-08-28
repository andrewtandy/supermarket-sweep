const puppeteer = require('puppeteer');
// const testSelector = '#main-content > main > div.product-detail-page__main-cntr > div.product-detail-page__main-detail-cntr > div:nth-child(1) > div > div.pdp-main-details__price-and-uom > div';


async function scrapeSite(data){
    const browser = await puppeteer.launch({
        // headless: false
    });
    const page = await browser.newPage();
    await page.setViewport({
        width: 1920,
        height: 1080
    });

    // Having issues with being blocked by some sites, introducing setUserAgent has helped eliminate timeout/denied issue
    await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/61.0.3163.100 Safari/537.36');

    for(record in data){
        await page.goto(data[record].url, {
            waitUntil: 'domcontentloaded'
        });

        await page.waitForXPath(data[record].product_selector);     

        let elProduct = await page.$x(data[record].product_selector);
        let elPrice = await page.$x(data[record].price_selector);

        let product = await page.evaluate(el => el.textContent, elProduct[0]);
        let price = await page.evaluate(el => el.textContent, elPrice[0]);
        
        console.log(`${ data[record].store }: ${ product } - ${ price }`)
                   
        }
        
    await page.close();
    await browser.close();
}

module.exports = scrapeSite;