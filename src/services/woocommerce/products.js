import request from './api';

function getProductsByCategoryId(id) {
  return request({
    url: '/products',
    params: {
      category: id,
      orderby: 'id',
      per_page: 30,

    },
    method: 'GET',
  });
}

const ProductService = {
  getProductsByCategoryId, //, update, delete, etc. ...
}

export default ProductService;
