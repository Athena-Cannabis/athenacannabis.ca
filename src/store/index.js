import { createStore, createLogger } from 'vuex'
import identity from './modules/identity'
import productCategories from './modules/product-categories'


const debug = process.env.NODE_ENV !== 'production'

export const store = createStore({
  modules: {
    identity,
    productCategories,
  },
  strict: debug,
  plugins: debug ? [createLogger()] : []
});
