const getSavedCartItems = () => {
 const save = localStorage.getItem('cartItems');
 const cart = document.querySelector('.cart__items');
 cart.innerHTML = save;
};

if (typeof module !== 'undefined') {
  module.exports = getSavedCartItems;
}
