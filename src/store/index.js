import { createStore, createLogger } from 'vuex'
import identity from './modules/identity'
import productCategory from './modules/product-category'
import products from './modules/products'


const debug = process.env.NODE_ENV !== 'production'

export const store = createStore({
  modules: {
    identity,
    productCategory,
    products,
  },
  strict: debug,
  plugins: debug ? [createLogger()] : []
});
