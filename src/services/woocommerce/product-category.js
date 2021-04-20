import request from './api';
import {responseAdapter as categoryResponseAdapter } from '../../models/product-catagory';

function getAll() {
  return request({
    url: '/products/categories',
    params: {
      per_page: 100,
      orderby: 'id'
    },
    method: 'GET',
  })
    .then((response) => {

      var categories = [];

      // We need to harmonise the categories in the ui with the categories
      // from the api service
      if (Array.isArray(response) && response?.length > 0) {

        response.forEach(element => {
          // Use the response adapter to create a product
          // object and then add it to the array of products
          //products.push(productResponseAdapter(element));
          var category = categoryResponseAdapter(element);
          categories.push(category);
        });

      }

      return categories;

    })
    .catch((error) => {
      console.error(error);
      return (error);
    });

}

const ProductCategoryService = {
  getAll, //, update, delete, etc. ...
}

export default ProductCategoryService;
