import { createStore, createLogger } from 'vuex'
import identity from './modules/identity'
import productCategory from './modules/product-category'


const debug = process.env.NODE_ENV !== 'production'

export const store = createStore({
  modules: {
    identity,
    productCategory,
  },
  strict: debug,
  plugins: debug ? [createLogger()] : []
});
