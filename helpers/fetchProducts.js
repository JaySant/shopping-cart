const fetchProducts = async (product) => {
  // seu código aqui
  try{
    const api = await fetch(`https://api.mercadolibre.com/sites/MLB/search?q=${product}`)
    const datas = api.then((response) => { return response.json() })
    return datas
    
  } catch(error) {
    return new Error('You must provide an url');
  }
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
  };
}
