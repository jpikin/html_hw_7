const cartItems = document.querySelector('.cart_items');
const cartItemsMainText = document.createElement('span');
cartItemsMainText.classList.add('items');
cartItemsMainText.textContent = 'Cart Items';
cartItemsMainText.style.marginTop = '96px';
cartItemsMainText.style.marginBottom = '64px';
cartItems.appendChild(cartItemsMainText);

const cartItemsArray = [1];

cartItems.style.display = cartItemsArray.length ? 'flex' : 'none';
cartItemsArray.addEventListener('pop', ()=> {
    cartItems.style.display = cartItemsArray.length ? 'flex' : 'none';
});
cartItemsArray.addEventListener('push', ()=> {
    cartItems.style.display = cartItemsArray.length ? 'flex' : 'none';
});
cartItemsArray.addEventListener('splice', ()=> {
    cartItems.style.display = cartItemsArray.length ? 'flex' : 'none';
});

