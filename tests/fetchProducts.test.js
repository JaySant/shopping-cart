require('../mocks/fetchSimulator');
const { fetchProducts } = require('../helpers/fetchProducts');
const computadorSearch = require('../mocks/search');

describe('1 - Teste a função fecthProducts', () => {
  // implemente seus testes aqui
  test('Verifica se fetchProduts é uma função', () => {
    expect(typeof fetchProducts).toBe('function')
  })

  test('Verifica se a função fetchProducts com o argumento "computador" o fetch é chamado', async () => {
    await fetchProducts('computador');
    expect(fetch).toBeCalled()
  })

  test('Verifica se ao executar a função fetchProducts com o argumento "computador" a função fetch chama o endpoint', 
  async () => {
    await fetchProducts('computador');
    expect(fetch).toBeCalledWith('https://api.mercadolibre.com/sites/MLB/search?q=computador')

  test('Verifica se a função fetchProducts com o argumento "computador" é uma estrutura de dados igual ao objeto computadorSearch', 
  async () => {
    expect(await fetchProducts('computador')).toEqual(computadorSearch);
  })

  })
})
