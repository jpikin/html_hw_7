const features = document.querySelector('.features');
const fromData = JSON.parse(dataFeaturedItems);
const cardButton = document.querySelector('.card_button');
let id = 1;


fromData.forEach(element => {
    const itemID = id++;
    const card = document.createElement('article');
    card.classList.add('card', `item_${itemID}`);
    features.appendChild(card);
    const cardImgContainer = document.createElement('div');
    card.appendChild(cardImgContainer);
    const img = document.createElement('img');
    cardImgContainer.classList.add('card_images');
    img.classList.add('features_img');
    img.src = element.url;
    img.alt = 'foto';
    cardImgContainer.appendChild(img);
    const cloneBtn = cardButton.cloneNode(true);
    cloneBtn.classList.add(`item_${itemID}`);
    cardImgContainer.appendChild(cloneBtn);
    
    const name = document.createElement('span');
    name.classList.add('name');
    name.textContent = element.name;
    card.appendChild(name);
    
    const descript = document.createElement('span');
    descript.classList.add('descript');
    descript.textContent = element.description;
    card.appendChild(descript)
    const price = document.createElement('span');
    price.classList.add('price');
    price.textContent = element.price + ' $';
    card.appendChild(price)
});
