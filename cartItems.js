const cartItems = document.querySelector('.cart_items');
const cartItemsArray = [];

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

const cartItemsMainText = document.createElement('span');
cartItemsMainText.classList.add('cart_items_main_text');