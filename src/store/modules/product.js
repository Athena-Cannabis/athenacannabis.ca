import { Product } from '../../models/product';
import ProductService from '../../services/woocommerce/product';

// initial state
// products: [{ ...product info }]
// cache: [{
//   type: 'category',
//   data: 11,
//   loadDate: DATETIME
// }]
const state = {
  all: [],
  cache: {
    category: []
  }
}

// getters
const getters = {


   // Get all products - no sorting applied
   getCategoryCache (state) {
    return state.cache.category;
  },

  // Get Boolean status of category cache
  getCacheStatusByCategoryId: (state, getters) => (id) => {

    // TIMELIMIT FOR CACHE (1000 ms * 5 minutes)
    const INVALIDATECACHETIME = 1000 * 60 * 5;

    // Initialise variable to false
    var cacheStatus = false;

    // Check if the category is in the array
    const findIndex = getters.getCategoryCache.findIndex((categoryCache) => categoryCache.id === id);

    // Update the state cache variable
    if (findIndex === -1) {
      // Category Cache not found
      cacheStatus = false;
    }
    else {
      // Category Cache was found - check if it's older than 5 minutes
      // Negative value means it's older
      const cacheTimeLimitAgo = Date.now() - INVALIDATECACHETIME;
      cacheStatus = getters.getCategoryCache[findIndex].date > cacheTimeLimitAgo;
    }

    return cacheStatus;
  },

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

  // Get all products - no sorting applied
  getProductByProductId: (state, getters) => (id) => {

    var product = null;

    // Get product by matching the id
    product = getters.getProducts.find((element) => element.id === id);

    return product ? product : null;

  },


  // Validate a Product ID
  // Check the parameter provided and then try to find the
  // product in the vuex store
  getLoadedStatusOfProductId: (state, getters) => (id) => {

    // initialise found value to false
    var found = false;

    // Check if the param is undefined
    if (id) {

      var record = getters.getProducts.find((element) => {
        return element.id === id;
      });

      // If the record is found the return return value
      found = record ? true : false;

    }

    return found;
  }


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

    // Check if there is an entry in the cache for the category id
    if (!getters.getCacheStatusByCategoryId(categoryId)) {

      // TODO: Validate the ID is a number
      ProductService
      .getProductsByCategoryId(categoryId)
      .then((products) => {

        // Get an array of product objects
        // from the service
        var uniqueProducts = [];

        // Indentify unique products that aren't in the vuex store already
        products.forEach(element => {

          // Check if the product is already in the array
          const findIndex = getters.getProducts.findIndex((product) => product.id === element.id );

          // Only add the product if it's not found
          if (findIndex === -1) {
            uniqueProducts.push(element);
          }

        });

        commit('addProducts', uniqueProducts);
        commit('addCategoryCache', categoryId);

      })
      .catch((error) => {
        console.log('Error:', error);
      })

    }

  }

}

// mutations
const mutations = {

  setProducts (state,  products ) {
    state.all = products;
  },

  // Get an array of prodcut objects
  // and put them into an associative array
  addProducts (state, products ) {
    state.all.push(...products);
  },

  // Add the cache entry with the categoryId
  addCategoryCache(state, categoryId) {

    // Check if the category is already in the array
    const findIndex = state.cache.category.findIndex((cacheCategory) => cacheCategory.id === categoryId);

    // Update the state cache entry
    if (findIndex === -1) {
      // Entry not found
      state.cache.category.push({
        id: categoryId,
        date: Date.now(),
      });
    }
    else {
      // Entry found
      state.cache.category[findIndex].date = Date.now();
    }

  }

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
