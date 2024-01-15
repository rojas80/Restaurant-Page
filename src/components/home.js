
import backGroundImg from '../img/backGroundImg.jpg';

function createHomePage(){
    const logoContainer = document.createElement('div');
    logoContainer.classList.add('logoContainer');

    const restaurantLogoImg = document.createElement('img');
    restaurantLogoImg.classList.add('resturant-logo-img');
    restaurantLogoImg.src = backGroundImg;

    const restaurantName =  document.createElement('h1');
    restaurantName.classList.add('restaurant-name');
    restaurantName.textContent = 'Tagline Restaurant';
    
    logoContainer.appendChild(restaurantName);
    logoContainer.appendChild(restaurantLogoImg);

    return logoContainer;
}

function homePage(){
    console.log("HomePage");
    const bodyContainer = document.querySelector(".body-container");
    bodyContainer.textContent ='';

    bodyContainer.appendChild(createHomePage());

    return bodyContainer;
}

export default homePage;