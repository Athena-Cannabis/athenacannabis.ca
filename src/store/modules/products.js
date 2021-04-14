import { Product } from '../../models/product';
import ProductService from '../../services/woocommerce/products';


// Local Storage Flag
// The flag is set to true when the user is above 19

// initial state
// category: [{ id, quantity }]
//
const state = {
  products: [],
}

// getters
const getters = {

  // Get all categories - no sorting applied
  getProducts (state) {
    return state.products;
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


    // Get all of the Product Categories from the API
    ProductService
    .getProductsByCategoryId(categoryId)
    .then((response) => {

      // We need to harmonise the categories in the ui with the categories
      // from the api service
      if (Array.isArray(response) && response?.length > 0) {

        var products = []

        response.forEach(element => {

          var product = new Product({
            id: element.id,
            title: element.name,
            slug: element.slug,
          })

          products.push(product);

        });

        commit('setProducts', products);

      }

    })

  }

}

// mutations
const mutations = {

  setProducts (state,  products ) {
    state.products = products;
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
