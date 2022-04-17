const saveCartItems = () => {
const cart = document.querySelector('.cart__items').innerHTML;
localStorage.setItem('cartItems', cart);
};

if (typeof module !== 'undefined') {
  module.exports = saveCartItems;
}
