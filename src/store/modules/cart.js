// import { Product } from '../../models/product';
// import ProductService from '../../services/woocommerce/product';

import { CartItem } from "../../models/cartItem";

// TODO: Load cart to / from local storage

// initial state
const state = {
  cart: [],
  subtotalPrice: '',
  totalTax: '',
  totalPrice: '',
}

// getters
const getters = {

  // Get all cart items - no sorting applied
  getCartItems(state) {
    return state.cart;
  },

  // Get all cart items
  // Walk through the array of cart items and grab the quantity of each cart item
  getCartItemsCount(state) {

    // Set default value
    var itemsCount = 0;

    // Walk though the array of cart items and add up the quantities
    if (state.cart && state.cart.length >= 0) {
      state.cart.forEach(element => {
        itemsCount += element.quantity;
      });
    }

    return itemsCount;
  },

  // Get the Subtotal
  getCartPriceSubtotal(state) {
    return state.subtotalPrice;
  },

  // Get the Total Tax
  getCartPriceTotalTax(state) {
    return state.totalTax;
  },

  // Get the Total
  getCartPriceTotal(state) {
    return state.totalPrice;
  },

}

// actions
const actions = {

  // Initialise the cart in vuex by first checking to see if a cart id
  // is in the localstorage. If it is, try to fetch the cart. If both
  // don't succeed then create a new cart
  initialiseCart({ dispatch }) {


  },

  // Add a line item to the vuex cart
  // This will then trigger a mutation call to Shopify's
  // checkout api
  // Calling function should provide a variant ID and the quantity to add
  // in the form of a line item object
  addToCart({ state, commit, rootGetters }, payload) {

    // Check that payload.productId is a valid product ID from the product store
    var validProductId = rootGetters['product/getLoadedStatusOfProductId'](payload.id);

    // Check that payload.quantity is a number
    var validProductQuantity = !isNaN(payload.quantity);

    // Payload is valid
    if ( validProductId && validProductQuantity) {

      // Check that there is sufficient product stock for the item

      // Add the cart item (product and quantity) to the cart

      // Is the cart item already in the cart?
      var findIndex = state.cart.findIndex((element) => element.productId === payload.id );

      if (findIndex >= 0) {
        // Item in the cart, now we need to know the new quanity

      }
      else {
        // Item not in the cart
        var cartItem = new CartItem({
          productId: payload.productId,
          quantity: payload.quantity,
        });

        commit('addCartItemToCart', cartItem);

      }

    }
    else {
      // Throw error that the component can catch

    }

  },

  // Remove a line item from the vuex cart
  removeFromCart({ state, commit }, payload) {


  },



}

// mutations
const mutations = {

  // Add a CartItem to the cart
  addCartItemToCart (state,  cartItem ) {
    state.cart.unshift(cartItem);
  },

}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}

