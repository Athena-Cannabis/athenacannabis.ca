export class ProductImage {

  id = null;

  src= null;
  alt= null;

  error = null;

  constructor(data) {

    // Set the image attributes
    this.id = data.id || null;
    this.src = data.src || null;
    this.alt = data.alt || null;

    // Make sure that the src attribute is set
    if (this.src === null || this.src === '') {
      this.error = true;
    }

  }

}

// We use an adapter to bring the API response
// from the WooCommerce API into the correct format
// for our Product class.
export function responseAdapter(response) {
  return new ProductImage({
    id: response.id,
    src: response.src,
    alt: response.alt,
  });
}
