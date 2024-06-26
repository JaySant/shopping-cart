const ol = document.querySelector('.cart__items');
const session = document.querySelector('.items');

function loadingPage() {
  const loading = document.createElement('p');
  loading.className = 'loading';
  loading.innerText = 'carregando...';
  session.appendChild(loading);
}

function createProductImageElement(imageSource) {
  const img = document.createElement('img');
  img.className = 'item__image';
  img.src = imageSource;
  return img;
}

function createCustomElement(element, className, innerText) {
  const e = document.createElement(element);
  e.className = className;
  e.innerText = innerText;
  return e;
}

function createProductItemElement({ sku, name, image }) {
  const section = document.createElement('section');
  section.className = 'item';

  section.appendChild(createCustomElement('span', 'item__sku', sku));
  section.appendChild(createCustomElement('span', 'item__title', name));
  section.appendChild(createProductImageElement(image));
  section.appendChild(createCustomElement('button', 'item__add', 'Adicionar ao carrinho!'));
  return section;
}

function cartItemClickListener(event) {
  const button = event.target;
  button.remove();
}

function createCartItemElement({ sku, name, salePrice }) {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `SKU: ${sku} | NAME: ${name} | PRICE: $${salePrice}`;
  li.addEventListener('click', cartItemClickListener);
  return li;
}

const addCardItem = async (event) => {
  const id = event.target.parentNode.firstChild.innerText;
  const endpointId = await fetchItem(id);
  const infoCard = {
    sku: endpointId.id,
    name: endpointId.title,
    salePrice: endpointId.price,
  };
  
  const cart = ol.appendChild(createCartItemElement(infoCard));
  cart.appendChild(saveCartItems(ol.innerHTML));
  return cart;
};

function loadingRemove() {
  const loadingText = document.querySelector('.loading');
  loadingText.remove();
}

async function createItemApi() {
  const endpoint = await fetchProducts('computador');
  const product = endpoint.results.map((item) => {
    const listProduct = {
      sku: item.id,
      name: item.title,
      image: item.thumbnail,
    };
    return listProduct;
    });
      product.map((item) => {
      const create = session.appendChild(createProductItemElement(item));
      return create;
    });
    loadingRemove();
    const buttons = document.querySelectorAll('.item__add');
    buttons.forEach((button) => {
    button.addEventListener('click', addCardItem);
  });
}

function btnemptyCart() {
  const btnCart = document.querySelector('.empty-cart');
  btnCart.addEventListener('click', () => {
  const itemAdd = document.querySelector('.cart__items');
  itemAdd.innerText = '';
  saveCartItems(itemAdd.innerHTML);
  });
}

function getSaveCart() {
  ol.addEventListener('click', cartItemClickListener);
  ol.innerHTML = getSavedCartItems();
}
// function getSkuFromProductItem(item) {
//   return item.querySelector('span.item__sku').innerText;
// }

window.onload = () => {
  createItemApi();
  addCardItem();
  btnemptyCart();
  getSaveCart();
  loadingPage();
};