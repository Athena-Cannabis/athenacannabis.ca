import request from './api';

function getAll() {
  return request({
    url: '/products/categories',
    params: {
      per_page: 100,
      orderby: 'id'
    },
    method: 'GET',
  });
}

const ProductCategoryService = {
  getAll, //, update, delete, etc. ...
}

export default ProductCategoryService;
