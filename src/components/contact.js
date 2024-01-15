const businessHours = {
    monday: { open: '09:00 AM', close: '06:00 PM' },
    tuesday: { open: '09:00 AM', close: '06:00 PM' },
    wednesday: { open: '09:00 AM', close: '06:00 PM' },
    thursday: { open: '09:00 AM', close: '08:00 PM' },
    friday: { open: '09:00 AM', close: '06:00 PM' },
    saturday: { open: '10:00 AM', close: '04:00 PM' },
    sunday: { open: 'Closed', close: 'Closed' }
  };
  
function createLabel(day,open,close){
    let h = document.createElement('p');
    h.classList.add('hour-item');
    h.textContent = day +' ' + open + ' ' + close;
    return h;
}
function infoDisplay(){
    const infoContainer = document.createElement('div');
    infoContainer.classList.add('info-container');
    const hoursTitle = document.createElement('h2');
    infoContainer.appendChild(hoursTitle);


    hoursTitle.textContent = 'Hours'

    const hours = document.createElement('p');
    for(let [day,{open, close}] of Object.entries(businessHours)){
        infoContainer.appendChild(createLabel(day,open,close));
    }
    const addressTitle = document.createElement('h2');
    addressTitle.textContent = 'Address';
    infoContainer.appendChild(addressTitle);

    const address = document.createElement('p');
    address.textContent = '200 N Spring St, Los Angeles, CA 90012';
    infoContainer.appendChild(address);

   

    return infoContainer;
}

function contactPage(){
    console.log("ContactPage");
    
    const mainBody = document.querySelector('.body-container');
    mainBody.textContent = '';
    
    mainBody.appendChild(infoDisplay());
    return mainBody;
}
export default contactPage;