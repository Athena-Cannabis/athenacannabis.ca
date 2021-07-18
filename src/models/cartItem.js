export class CartItem {

  productId = null;
  quantity = null;

  constructor(data) {

     // Assing the product id
     this.productId = data.productId || null;
     this.quantity = data.quantity || null;

  }

}
