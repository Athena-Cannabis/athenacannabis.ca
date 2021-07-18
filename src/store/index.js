import { createStore, createLogger } from 'vuex'
import cart from './modules/cart'
import category from './modules/category'
import identity from './modules/identity'
import product from './modules/product'

const debug = process.env.NODE_ENV !== 'production'

export const store = createStore({
  modules: {
    cart,
    category,
    identity,
    product,
  },
  strict: debug,
  plugins: debug ? [createLogger()] : []
});
