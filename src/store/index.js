import { createStore, createLogger } from 'vuex'
import identity from './modules/identity'
import category from './modules/category'
import product from './modules/product'

const debug = process.env.NODE_ENV !== 'production'

export const store = createStore({
  modules: {
    identity,
    category,
    product,
  },
  strict: debug,
  plugins: debug ? [createLogger()] : []
});
