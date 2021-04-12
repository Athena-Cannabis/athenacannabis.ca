import { categories } from '../../config/categories';
import { ProductCategory } from '../../models/product-catagory';
import ProductCategoryService from '../../services/woocommerce/product-category';


// Local Storage Flag
// The flag is set to true when the user is above 19

// initial state
// category: [{ id, quantity }]
//
const state = {
  categories: [],
  loaded: false,
}

// getters
const getters = {

  // Get all categories - no sorting applied
  getLoadedState (state) {
    return state.loaded;
  },

  // Get all categories - no sorting applied
  getCategories (state) {
    return state.categories;
  },

  getParentCategories (state, getters) {

    var categories = [];

    // Get parent categories
    categories = getters.getCategories.filter(element => element.parent === null);

    // Sort parents by weight
    categories.sort((a, b) => b.weight - a.weight);

    return categories;
  },

  // Find a category with a matching slug value
  getCategoryBySlug: (state, getters) => (slug) => {
    return getters.getCategories.find(category => category.slug === slug) || null;
  }

}

// actions
const actions = {

  // Run this at the start of the app to initialise
  // the categories
  initialiseCategories ({ commit, dispatch }) {

    dispatch('fetchCategories');

  },

  // Fetch and load the categories
  fetchCategories ({ commit, state, getters }) {

    // Have the categories been loaded into the store
    if (!getters.getLoadedState) {

      var loadedCategories = categories;

      commit('setCategories', loadedCategories);

      commit('setLoadedState', true);

    }

  }

}

// mutations
const mutations = {

  setCategories (state,  categories ) {
    state.categories = categories;
  },

  setLoadedState (state,  flag ) {
    state.loaded = flag;
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
