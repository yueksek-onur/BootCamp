class ShoppingCart {
  // todo: implement your code here
  constructor() {
    this.cart = {
      description: [],
      price: [],
      quantity: [],
    };
  }

  addToCart(description, price, quantity) {
    this.cart.description.push(description);
    this.cart.price.push(price);
    this.cart.quantity.push(quantity);
  }

  getCartPrice() {
    let sum = 0;
    for (let i = 0; i < this.cart.description.length; i++) {
      sum += this.cart.price[i] * this.cart.quantity[i];
    }
    return sum;
  }

  removeFromCart(description, quantity) {
    for (let i = 0; i < this.cart.description.length; i++) {
      if (this.cart.description[i] == description) {
        if (quantity) {
          this.cart.quantity[i] = this.cart.quantity[i] - quantity;
        } else {
          this.cart.quantity[i] = 0;
        }
      }
    }
  }
}
