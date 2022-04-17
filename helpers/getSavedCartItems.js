const getSavedCartItems = () => {
 const saveItem = localStorage.getItem('cartItems');
 return saveItem
};

if (typeof module !== 'undefined') {
  module.exports = getSavedCartItems;
}
