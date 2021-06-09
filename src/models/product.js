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

    this.purchasable = data.purchasable || false;
    this.onSale = data.onSale || false;

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


  // TODO: This needs to be refactored
  // Pull the Cannabis related attributes
  var thc_value = null;
  var thc_range = null;
  var cbd_value = null;
  var cbd_range = null;
  var weight = null;
  var species = null;

  response.attributes.forEach(element => {
    switch (element.name) {
      case 'THC_VALUE':
        thc_value = element.options[0];
        break;
      case 'THC_RANGE':
        thc_range = element.options[0];
        break;
      case 'CBD_VALUE':
        cbd_value = element.options[0];
        break;
      case 'CBD_RANGE':
        cbd_range = element.options[0];
        break;
      case 'Weight':
        weight = element.options[0];
        break;
      case 'Species':
        species = element.options[0];
        break;
    }
  });

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
  });
}
