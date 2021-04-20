export class ProductCategory {

  id = null;
  parent = null;

  title = '';
  slug = '';
  weight= null;

  image = {
    src: null,
    alt: null,
  };

  validCategoryPage = null;

  error = null;

  constructor(data) {

    // Assing the id
    this.id = data.id || null;
    this.parent = data.parent || null;

    // Assign the title and slug text
    this.title = data.title || '';
    this.slug = data.slug || '';
    this.weight = data.weight || 0;

    // Assign the cover image
    this.image.src = data.image?.src || null;
    this.image.alt = data.image?.alt || null;

    // Flag to determine if the category gets a category page
    this.validCategoryPage = data.validCategoryPage || null;

  }

}

// We use an adapter to bring the API response
// from the WooCommerce API into the correct format
// for our Category class.
export function responseAdapter(response) {

  return new ProductCategory({
    id: response.id,
    parent: response.parent,
    title: response.name,
    slug: response.slug,
  });

}
