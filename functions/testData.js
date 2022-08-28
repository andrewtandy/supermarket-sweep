const testDataArray = [
    // {
    //     url: 'https://groceries.asda.com/product/cat-litter-accessories/catsan-hygiene-non-clumping-odour-control-cat-litter/20904',
    //     price_selector: '#main-content > main > div.product-detail-page__main-cntr > div.product-detail-page__main-detail-cntr > div:nth-child(1) > div > div.pdp-main-details__price-and-uom > div',
    //     store: 'Asda',
    //     product_selector: '#main-content > main > div.product-detail-page__main-cntr > div.product-detail-page__main-detail-cntr > div:nth-child(1) > div > div:nth-child(1) > h1'
    // },
    {
        url: 'https://www.sainsburys.co.uk/gol-ui/product/catsan-hygiene-cat-litter-10l',
        price_selector: '/html/body/div[1]/div[2]/div[2]/div[2]/div/div/div/div/section[1]/div/div/div[2]/div[4]/div[1]/div/div',
        store: 'Sainsbury\'s',
        product_selector: '/html/body/div[1]/div[2]/div[2]/div[2]/div/div/div/div/section[1]/div/div/div[2]/h1'
    },
    {
        url: 'https://groceries.asda.com/product/cat-litter-accessories/catsan-hygiene-non-clumping-odour-control-cat-litter/20904',
        price_selector: '/html/body/div[1]/div[2]/section/main/div[3]/div[2]/div[1]/div/div[3]/div/strong',
        store: 'Asda',
        product_selector: '/html/body/div[1]/div[2]/section/main/div[3]/div[2]/div[1]/div/div[1]/h1'
    },
    {
        url: 'https://www.tesco.com/groceries/en-GB/products/254960689',
        price_selector: '//*[@id="main"]/div[1]/div/div[1]/div[2]/div[2]/div/div/div[1]/div/div[3]/form/div/div[1]/div[1]/div/div/span/span[2]',
        store: 'Tesco',
        product_selector: '//*[@id="main"]/div[1]/div/div[1]/div[2]/div[2]/div/div/div[1]/div/div[1]/h1'
    },
    // {
    //     url: 'https://groceries.asda.com/product/cat-litter-accessories/catsan-hygiene-non-clumping-odour-control-cat-litter/20904',
    //     price_selector: '#main-content > main > div.product-detail-page__main-cntr > div.product-detail-page__main-detail-cntr > div:nth-child(1) > div > div.pdp-main-details__price-and-uom > div',
    //     store: 'Asda',
    //     product_selector: '#main-content > main > div.product-detail-page__main-cntr > div.product-detail-page__main-detail-cntr > div:nth-child(1) > div > div:nth-child(1) > h1'
    // },
  ]


  module.exports = testDataArray;