import { Product } from '../../models/product';
import ProductService from '../../services/woocommerce/products';


// Local Storage Flag
// The flag is set to true when the user is above 19

// initial state
// products: [{ id, products }]
//
const state = {
  all: [],
}

// getters
const getters = {

  // Get all products - no sorting applied
  getProducts (state) {
    return state.all;
  },

  // Get all products - no sorting applied
  getProductsByCategoryId: (state, getters) => (id) => {

    var products = [];

    // Get products by categories
    getters.getProducts.forEach((element) => {
      element.categories.forEach((category) => {
        if (category.id === id) {
          products.push(element);
        }
      })
    });

    return products;

  },

  // Find a category with a matching slug value
  // getCategoryBySlug: (state, getters) => (slug) => {
  //  return getters.getCategories.find(category => category.slug === slug) || null;
  //}

}

// actions
const actions = {

  // TODO: Maybe we want to proactively load a product category?
  // Run this at the start of the app to initialise
  // the categories
  // initialiseCategories ({ commit, dispatch }) {
  //  dispatch('fetchCategories');
  // },

  // Fetch and load the categories by an id
  fetchProductsByCategoryId ({ commit, state, getters }, categoryId) {

    // TODO: Validate the ID is a number
    ProductService
    .getProductsByCategoryId(categoryId)
    .then((products) => {

      // Get an array of product objects
      // from the service
      commit('setProducts', products);

    })
    .catch((error) => {
      console.log('Error:', error);
    })

  }

}

// mutations
const mutations = {

  setProducts (state,  products ) {
    state.all = products;
  },

  // Get an array of prodcut objects
  // and put them into an associative array
  addProducts (state,  products ) {

    // Loop through the array and add products
    // to the array
    products.forEach(element => {

      // Check if the product is already in the array


    })

  },

}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}

/**
 *
 * Code to do a service call
 *

// Get all of the Product Categories from the API
ProductCategoryService
.getAll()
.then((response) => {

  // We need to harmonise the categories in the ui with the categories
  // from the api service
  if (Array.isArray(response) && response?.length > 0) {

    var categories = []

    response.forEach(element => {

      // See if there is an overide in the config file
      var overide = categoryOverides.filter(el => {
        return el.id === element.id;
      })

      if (overide?.length > 0)
        console.log('Overide', overide)

      var category = new ProductCategory({
        id: element.id,
        parent: element.parent,
        title: overide[0]?.replace?.name || element.name,
        slug: element.slug,
      })

      categories.push(category);

    });

    commit('setCategories', categories);

  }

})

*/
