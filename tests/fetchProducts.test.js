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
  })

  test('Verifica se a função fetchProducts com o argumento "computador" retorna um objeto igual computador search', 
  async () => {
    const func = await fetchProducts('computador')
    expect(func).toEqual(computadorSearch)
  })

  test('Verifica se a função quando não recebe nenhum parametro retorna um erro', async () => {
    expect(await fetchProducts()).toEqual(new Error('You must provide an url'))
  })
})


