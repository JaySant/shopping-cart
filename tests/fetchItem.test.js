require('../mocks/fetchSimulator');
const { fetchItem } = require('../helpers/fetchItem');
const item = require('../mocks/item');

describe('2 - Teste a função fecthItem', () => {
  // implemente seus testes aqui
  test('Verifica se fetchItem é uma função', () => {
    expect(typeof fetchItem).toBe('function')
  })

  test('Verifica se a função fetchItem com o argumento "MLB1615760527" o fetch é chamado', async () => {
    await fetchItem('MLB1615760527');
    expect(fetch).toBeCalled()
  })

  test('Verifica se ao executar a função fetchItem com o argumento "MLB1615760527" a função fetch chama o endpoint', 
  async () => {
    await fetchItem('MLB1615760527');
    expect(fetch).toBeCalledWith("https://api.mercadolibre.com/items/MLB1615760527");
  })

  test('Verifica se a função fetchItem com o argumento "MLB1615760527" retorna um objeto igual item', 
  async () => {
    const func = await fetchItem('MLB1615760527')
    expect(func).toEqual(item)
  })

  test('Verifica se a função quando não recebe nenhum parametro retorna um erro', async () => {
    expect(await fetchItem()).toEqual(new Error('You must provide an url'))
  })
});
