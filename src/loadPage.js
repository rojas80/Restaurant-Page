import homePage from '../src/components/home'
import menuPage from './components/menu';
import contactPage from './components/contact';

function createHeader(){
    //creates html element
    const header = document.createElement('header');
    //add class attribute to to the element
    const restaurantName =  document.createElement('h1');
    restaurantName.classList.add('header-ResName');
    restaurantName.textContent = 'Tagline Restaurant';

    header.classList.add('header');
    header.appendChild(restaurantName);
    header.appendChild(createNavTaps());

    return header;
}

function createNavTaps(){
    const navigationTaps = document.createElement('nav');

    const homeBtn = document.createElement('button');
    homeBtn.classList.add('navBtn');
    homeBtn.id = 'navHomeBtn';
    homeBtn.textContent = 'Home';
    homeBtn.addEventListener('click',function(event){

        if(event.target.classList.contains('active')){
            return;
        }
        //import homepage
        selectActiveBtn(homeBtn);
        homePage();
    });

    const menuBtn = document.createElement('button');
    menuBtn.classList.add('navBtn');
    menuBtn.textContent = 'Menu';

    menuBtn.addEventListener('click', function(event){
        if(event.target.classList.contains('active')){
            return;
        }
        selectActiveBtn(menuBtn);
        menuPage();
    });

    const contactBtn = document.createElement('button');
    contactBtn.classList.add('navBtn');
    contactBtn.textContent = 'Contact';
    contactBtn.addEventListener('click',function(event){
        if(event.target.classList.contains('active')){
            return;
        }
        selectActiveBtn(contactBtn);
        contactPage();
    });

    navigationTaps.appendChild(homeBtn);
    navigationTaps.appendChild(menuBtn);
    navigationTaps.appendChild(contactBtn);
    
    return navigationTaps;
}

function selectActiveBtn(button) {
    const buttons = document.querySelectorAll(".navBtn");
  
    buttons.forEach((button) => {
      if (button !== this) {
        button.classList.remove("active");
      }
    });
    button.classList.add("active");
  }
  
function createBody(){
    const bodyContainer = document.createElement('div');
    bodyContainer.classList.add('body-container');
    return bodyContainer;
}
function createFooter(){
    const footerContainer = document.createElement('footer');
    footerContainer.classList.add('footer-container');

    const footerText = document.createElement('p');
    footerText.textContent = 'Created by HZR'
    footerContainer.appendChild(footerText);

    return footerContainer;
}

function initializeWebPage(){
    const content = document.getElementById('content');
    content.appendChild(createHeader());
    content.appendChild(createBody());
    content.appendChild(createFooter());
    //selectActiveBtn(document.querySelectorAll('navBtn'));
    homePage();
}
export default initializeWebPage;