const fetchItem = async (id) => {
  try {
    const api = await fetch(`https://api.mercadolibre.com/items/${id}`);
    const datas = await api.json();
    return datas;
  } catch (error) {
    return new Error('You must provide an url');
  } 
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchItem,
  };
}
