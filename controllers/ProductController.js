const axios = require('axios');
const cheerio = require('cheerio');

class ProductController {
  constructor() {}

  Scrape = async () => {
    let prices = {};
    try {
      const { data } = await axios.get(
        'https://www.smithsfoodanddrug.com/p/powerade-mountain-berry-blast-electrolyte-vitamin-sports-drink/0004900007935?fulfillment=PICKUP&searchType=default_search'
      );
      const $ = cheerio.load(data);
      const pickup = $('label[for=PICKUP] data[typeOf=Price]');
      pickup.map((i, item) => (prices['pickup'] = item.attribs.value));
      const delivery = $('label[for=DELIVERY] data[typeOf=Price]');
      delivery.map((i, item) => (prices['delivery'] = item.attribs.value));
      return prices;
    } catch (e) {
      console.log(e);
      return null;
    }
  };
}

module.exports = ProductController;
