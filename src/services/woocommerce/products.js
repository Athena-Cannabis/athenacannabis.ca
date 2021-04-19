import request from './api';
import {Product, responseAdapter as productResponseAdapter } from '../../models/product';

// Use the request object to get the
// products data from the api service
// and then create Product objects
// and return those objects
function getProductsByCategoryId(id) {

  return request({
    url: '/products',
    params: {
      category: id,
      orderby: 'id',
      per_page: 100,

    },
    method: 'GET',
  })
    .then((response) => {

      var products = [];

      // We need to harmonise the categories in the ui with the categories
      // from the api service
      if (Array.isArray(response) && response?.length > 0) {

        response.forEach(element => {
          // Use the response adapter to create a product
          // object and then add it to the array of products
          //products.push(productResponseAdapter(element));
          var product = productResponseAdapter(element);
          products.push(product);
        });

      }

      return products;

    })
    .catch((error) => {
      console.error(error);
      return (error);
    });

}

const ProductService = {
  getProductsByCategoryId, //, update, delete, etc. ...
}

export default ProductService;
