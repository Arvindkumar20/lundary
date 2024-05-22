// script.js
document.addEventListener('DOMContentLoaded', function() {
    // Function to add service to added items
    function addToAddedItems(sNo,serviceName, price) {
      const addedItems = document.getElementById('added-items');
      const listItem = document.createElement('div');
      listItem.innerHTML=`<div class="column">
      <p>${sNo}</p>
      <p>${serviceName}</p>                              
  <p>₹ ${price}</p>
  </div> `;
        
      // listItem.textContent = `${serviceName} - $${price}`;
      addedItems.appendChild(listItem);
  
      // Update total amount
      const totalAmount = document.getElementById('total-amount');
      const currentTotal = parseFloat(totalAmount.textContent.substring(1));
      const newTotal = currentTotal + parseFloat(price);
      totalAmount.textContent = `₹ ${newTotal.toFixed(2)}`;
      
    }
    let nothing=document.querySelector('.nothing');
    nothing.style.display="flex";
    // Event listener for adding service to added items
    let data=[
      {sNo:'1',serviceName:'CLEANING',imgLink:'clean.webp',price:'200.00'},
      {sNo:'2',serviceName:'DRY CLEANING',imgLink:'dry.webp',price:'100.00'},
      {sNo:'3',serviceName:'IRON',imgLink:'police.webp',price:'50.00'},
      {sNo:'4',serviceName:'WASHING',imgLink:'clean.webp',price:'200.00'},
      {sNo:'5',serviceName:'WEDDING CLEANING',imgLink:'dry.webp',price:'100.00'},
      {sNo:'6',serviceName:'IRON',imgLink:'police.webp',price:'150.00'}
    ];
    let serviceImage=document.querySelector('.serviceImage');
    let service=document.querySelector('.service');
    let prices=document.querySelector('.price');
    
    const itemsValuesAssign=(imgLink,serviceName,price)=>{
          serviceImage.src=`${imgLink}`;
          service.innerHTML=`${serviceName}`
          prices.innerHTML=`₹ ${price}`
    }

    document.getElementById('skip').addEventListener('click', function() {
      let serviceName=data[itemShow].serviceName;
      let price=data[itemShow].price;
      let imgLink=data[itemShow].imgLink;
    itemsValuesAssign(imgLink,serviceName,price);
    if(itemShow==data.length-1){
      itemShow=0;
    }
    else{
      itemShow++
    }
    });
    let itemShow=0;
    document.getElementById('add').addEventListener('click', function() {
    nothing.style.display="none";
    let sNo=data[itemShow].sNo;
    let serviceName=data[itemShow].serviceName;
    let price=data[itemShow].price;
    let imgLink=data[itemShow].imgLink;
    addToAddedItems(sNo,serviceName,price);
    itemsValuesAssign(imgLink,serviceName,price);
if(itemShow==data.length-1){
  itemShow=0;
}
else{
  itemShow++;
}
    });
  
    // Event listener for booking form submission
    document.getElementById('booking-form').addEventListener('submit', function(event) {
      event.preventDefault();
      // Handle form submission (validation, AJAX request, etc.)
      alert('Booking Successful!');
    });
  });
  