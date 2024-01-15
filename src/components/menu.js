import { name } from "file-loader";

function createMenu(){
    const menu = document.createElement('div');
    menu.classList.add('menu');

    menu.appendChild(
        createItemMenu('Steam Mussels', 'Briny, toothsome mussels steamed in heavenly aromatics and white wine sauce boosted with butter and chopped fresh herbs')
    );
    menu.appendChild(
        createItemMenu('Herb Broiled Chicken','Spatchcock chicken is one of the easiest preparations with the greatest reward.')
    );
    menu.appendChild(createItemMenu('Steak au Poivre', 'A meal that comes together in a single skillet with perfectly pan-seared, peppercorn-crusted steaks.'));
    
    menu.appendChild(createItemMenu('Potato Gnocchi','Gnocchi look like small rolled pasta shapes but are actually fluffy dumplings made of potatoes and flour.'));

    return menu;
}

function createItemMenu(menuItemName, itemDescription){
    const menuItemContainer= document.createElement('div');
    menuItemContainer.classList.add('menu-item');

    const dishName = document.createElement('h2');
    dishName.textContent = menuItemName;

    const dishDescription = document.createElement('p');
    dishDescription.textContent = itemDescription;

    let tempName = menuItemName.replace(/\s/g,'').toLowerCase();

    const dishImage = document.createElement('img');
    dishImage.src = require(`/src/img/${tempName}.png`);
    dishImage.alt = `${menuItemName}`;

    menuItemContainer.appendChild(dishImage);
    menuItemContainer.appendChild(dishName);
    menuItemContainer.appendChild(dishDescription);

    return menuItemContainer;
}

function menuPage(){
    const mainBody = document.querySelector('.body-container');
    mainBody.textContent = '';


    mainBody.appendChild(createMenu());
    return mainBody;
}

export default menuPage;