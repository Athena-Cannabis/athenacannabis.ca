// Local Storage Flag
// The flag is set to true when the user is above 19

const ATHENAENABLEAGE = 'athena-enable-age';

// initial state
// shape: [{ id, quantity }]
const state = {
  isOverAgeOfMajority: false,
}

// getters
const getters = {

  getIsAllowed (state) {
    return state.isOverAgeOfMajority;
  }

}

// actions
const actions = {

  initialiseStore ({ commit, state }) {

    try {

      var isOverAgeOfMajority;

      var localStorageVar = window.localStorage.getItem(ATHENAENABLEAGE);

      // Check if the data is actually set
      if (localStorageVar !== null) {

        isOverAgeOfMajority = JSON.parse(localStorageVar)

      }
      else {
        isOverAgeOfMajority = false;
      }

      commit('setAgeFlag', isOverAgeOfMajority)

    } catch(e) {
      // If an error happens set the age flag to false
      console.error(e);
      commit('setAgeFlag', false);
    }

  },

  updateAgeOfMajority ({ commit, state }, isOverAgeOfMajority) {

    // Try to set the flag in the local storage
    try {

      window.localStorage.setItem(ATHENAENABLEAGE, isOverAgeOfMajority);

    } catch (eror) {
      console.error(e);
    }

    // Set the flag in the vuex store
    commit('setAgeFlag', isOverAgeOfMajority);

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
