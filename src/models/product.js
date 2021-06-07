import {ProductImage, responseAdapter as imageResponseAdapter } from './product-image';


export class Product {

  id = null;

  title = '';
  slug = '';

  description = '';
  shortDescription = '';

  purchasable = false;
  onSale = false;
  stockQuantity = null;

  categories = [];

  images = [];

  error = null;

  constructor(data) {

    // Assing the id
    this.id = data.id || null;

    // Assign the title and slug text
    this.title = data.title || '';
    this.slug = data.slug || '';

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
    images: images,
  });
}
