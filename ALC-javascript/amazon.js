// amazon shopping
const user = {
  name: "Kim",
  active: true,
  cart: [],
  purchases: [],
};

let amazonHistory = [];

const compose =
  (f, g) =>
  (...args) =>
    f(g(...args));
purchaseItem(
  emptyCart,
  buyItem,
  applyTax,
  addItemToCart
)(user, { name: "Laptop", price: 270 });

function purchaseItem(...fns) {
  return fns.reduce(compose);
}

function addItemToCart(user, item) {
  amazonHistory.push(user);
  const updateCart = user.cart.concat([item]);
  return Object.assign({}, user, { cart: updateCart });
}

function applyTax(user) {
  amazonHistory.push(user);
  const { cart } = user;
  const taxRate = 1.3;
  const updatedCart = cart.map((item) => {
    return {
      name: item.name,
      price: item.price * taxRate,
    };
  });
  return Object.assign({}, user, { cart: updatedCart });
}

function buyItem(user) {
  amazonHistory.push(user);
  return Object.assign({}, user, { purchases: user.cart });
}

function emptyCart(user) {
  amazonHistory.push(user);
  return Object.assign({}, user, { cart: [] });
}

//1. implement a cart feature
//2. add items to cart
//3. buy item: cart --> purchases
// 4. Empty cart
function test() {
  console.log(amazonHistory);
}
test();
function refundItem() {}
// bonus:
//  accept refunds.
//  Track user history
