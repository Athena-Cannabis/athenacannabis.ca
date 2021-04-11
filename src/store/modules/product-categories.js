import categories from '../../config/categories';

import CONFIG from '../../config/woocommerce';
// Local Storage Flag
// The flag is set to true when the user is above 19

// initial state
// category: [{ id, quantity }]
//
const state = {
  categories: [
    {
      id: 1,
      name: "Albums",
      woo: {
        // Woo data
      }
    },
    {
      id: 2,
      name: "Monkeys",
    }
  ],
}

// getters
const getters = {

  getCategories (state) {
    return state.categories;
  }

}

// actions
const actions = {

  fetchCatagories ({ commit, state }) {

    // Try to set the flag in the local storage
    try {

      var configCategories = categories;
      console.log(configCategories);
      console.log('API_TEST', CONFIG.API_TEST);

    } catch (error) {
      console.error(error);
    }



    // Set the flag in the vuex store
    // commit('setAgeFlag', isOverAgeOfMajority);

  }

}

// mutations
const mutations = {

  setAgeFlag (state,  flag ) {
    state.isOverAgeOfMajority = flag
  },

}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
