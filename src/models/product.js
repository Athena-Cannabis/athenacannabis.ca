import {ProductImage, responseAdapter as imageResponseAdapter } from './product-image';


export class Product {

  id = null;

  title = '';
  slug = '';

  brand = '';
  description = '';
  shortDescription = '';

  purchasable = false;
  onSale = false;
  stockQuantity = null;

  categories = [];

  images = [];

  // Cannabis specific attributes
  cannabis = {
    thc_value: null,
    thc_range: null,
    cbd_value: null,
    cbd_range: null,
    weight: null,
    species: null,
  };

  // Pricing information as a number
  price = {
    regular: null,
    sale: null,
  };

  error = null;

  constructor(data) {

    // Assing the id
    this.id = data.id || null;

    // Assign the title and slug text
    this.title = data.title || '';
    this.slug = data.slug || '';

    // Brand
    this.brand = data.brand || '';

    // Description
    this.description = data.description || '';
    this.shortDescription = data.shortDescription || '';

    // On sale and or purchasable
    this.purchasable = data.purchasable || false;
    this.onSale = data.onSale || false;

    // The amount of product in stock
    this.stockQuantity = data.stockQuantity || null;

    // Assign the images blocks
    if (Array.isArray(data.categories)) {
      this.categories = data.categories;
    }

    // Assign the images blocks
    if (Array.isArray(data.images)) {
      this.images = data.images;
    }

    // Cannabis specific attributs
    this.cannabis.thc_value = data.thc_value || null;
    this.cannabis.thc_range = data.thc_range || null;
    this.cannabis.cbd_value = data.cbd_value || null;
    this.cannabis.cbd_range = data.cbd_range || null;
    this.cannabis.weight = data.weight || null;
    this.cannabis.species = data.species || null;

     // Price
     this.price.regular = data.regular_price || null;
     this.price.sale = data.sale_price || null;




  }

}

// We use an adapter to bring the API response
// from the WooCommerce API into the correct format
// for our Product class.
export function responseAdapter(response) {

  // Build a list of images
  var images = [];

  response.images.forEach(element => {
    var image = imageResponseAdapter(element);
    images.push(image);
  });

  // Grab the Brand attribute
  var brand = response.attributes.find(element => element.name === 'Brand')?.options[0];

  // Grab the Cannabis attributes if they exist
  var thc_value = response.attributes.find(element => element.name === 'THC_VALUE')?.options[0];
  var thc_range = response.attributes.find(element => element.name === 'THC_RANGE')?.options[0];
  var cbd_value = response.attributes.find(element => element.name === 'CBD_VALUE')?.options[0];
  var cbd_range = response.attributes.find(element => element.name === 'CBD_RANGE')?.options[0];
  var weight = response.attributes.find(element => element.name === 'Weight')?.options[0];
  var species = response.attributes.find(element => element.name === 'Species')?.options[0];

  return new Product({
    id: response.id,
    title: response.name,
    slug: response.slug,
    description: response.description,
    shortDescription: response.short_description,
    purchasable: response.purchasable,
    onSale: response.on_sale,
    stockQuantity: parseInt(response.stock_quantity, 10),
    categories: response.categories,
    images,
    brand,
    thc_value,
    thc_range,
    cbd_value,
    cbd_range,
    regular_price: response.regular_price,
    sale_price: response.sale_price,
    species,
    weight,
  });
}
