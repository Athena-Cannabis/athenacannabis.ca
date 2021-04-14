export class Product {

  id = null;

  title = '';
  slug = '';

  image = {
    src: null,
    alt: null,
  };

  error = null;

  constructor(data) {

    // Assing the id
    this.id = data.id || null;

    // Assign the title and slug text
    this.title = data.title || '';
    this.slug = data.slug || '';

    // Assign the image
    this.image.src = data.image?.src || null;
    this.image.alt = data.image?.alt || null;

  }

}
