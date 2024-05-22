// script.js
document.addEventListener('DOMContentLoaded', function() {
    // Function to add service to added items
    function addToAddedItems(sNo,serviceName, price) {
      bookNow.style.background='blue';
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
        // card presented 
    // Event listener for adding service to added items
    let data=[
      {sNo:'1',serviceName:'CLEANING',imgLink:'./img/clean.webp',price:'200.00'},
      {sNo:'2',serviceName:'DRY CLEANING',imgLink:'./img/dry.webp',price:'100.00'},
      {sNo:'3',serviceName:'IRON',imgLink:'./img/police.webp',price:'50.00'},
      {sNo:'4',serviceName:'WASHING',imgLink:'./img/clean.webp',price:'200.00'},
      {sNo:'5',serviceName:'WEDDING CLEANING',imgLink:'./img/dry.webp',price:'100.00'},
      {sNo:'6',serviceName:'IRON',imgLink:'./img/police.webp',price:'150.00'},
      {sNo:'7',serviceName:'washing',imgLink:'./img/wash.webp',price:'400.00'},
    ];
    // card presented 
data.map((e)=>{
    let card=document.createElement('div');
   card.innerHTML=` <div class="services">
   <img src=${e.imgLink} alt="dry cleaning service" class="serviceImage">
   <div class="service-price">
      <div class="service" id="rightService" >${e.serviceName}</div>
      </div>
   <div class="service-price">

      <div class="price" id="rightPrice">₹ ${e.price}</div>
</div>
   <div class="cart-options">
       <button class="skip">
         <p>Remove item</p>
         <img src="./img/remov.webp" alt="skip button image">
     </button>
       <button class="add">
         <p>Add Item</p>
         <img src="./img/add.webp" alt="add item button image">
     </button>
     </div>
  </div> `;
  
landList.appendChild(card);
})
let add=document.querySelectorAll('.add');
let removeBtn=document.querySelectorAll('.skip');
function removeItem(sNo,serviceName, price) {
  const addedItems = document.querySelectorAll('.column');
  addedItems.forEach((e)=>{
    if(e.firstElementChild.innerHTML===sNo){
      e.remove();
      }   
  })
  ;
  // Update total amount
  const totalAmount = document.getElementById('total-amount');
  const currentTotal = parseFloat(totalAmount.textContent.substring(1));
  const newTotal = currentTotal - parseFloat(price);
  totalAmount.textContent = `₹ ${newTotal.toFixed(2)}`; 
}
// Select all buttons and convert NodeList to Array
const buttons = Array.from(removeBtn);
buttons.forEach(button => {
  button.addEventListener('click', function() {
      // Remove the button from the DOM
      // Find the index of the clicked button in the buttons array
      const index = buttons.indexOf(this);
      // Remove the button from the buttons array
      if (index > -1) {
  
let s=data[index].sNo;
let ser=data[index].serviceName;
let p=data[index].price;
removeItem(s,ser,p)
            add[index].style.display='flex'
            removeBtn[index].style.display='none'
      }      
      // Log the remaining buttons (for debugging purposes)
      // console.log(buttons);
  });
});

for(let i=0;i<add.length;i++){
 add[i].addEventListener('click', function() {
    nothing.style.display="none";
    let sNo=data[i].sNo;
    let serviceName=data[i].serviceName;
    let price=data[i].price;
    // let imgLink=data[i].imgLink;
    addToAddedItems(sNo,serviceName,price);
    add[i].style.display='none'
    removeBtn[i].style.display='flex'
    });
};
    // Event listener for booking form submission
    document.getElementById('booking-form').addEventListener('submit', function(event) {
      event.preventDefault();
  const addedItems = document.querySelectorAll('.column');
if(!(addedItems[0].nextElementSibling)){
  
  msg.innerHTML='<img src="./img/remov.webp" alt="remove image" /><p> Add the items to the cart to book</p>'
}
  else{
    msg.innerHTML='<img src="./img/remov.webp" alt="remove image" /><p>Email has been sent successfully</p>'
    msg.lastElementChild.style.color='green'
  }

  let totalAmount = document.getElementById('total-amount');
  totalAmount.innerHTML='₹ 0.0 '

addedItems.forEach((e)=>{
  if(e.firstElementChild.innerHTML=='S.No.'){
    e;
  }
else{
  e.remove();

}
let removeBtn=document.querySelectorAll('.skip');
let add=document.querySelectorAll('.add');
add.forEach((e)=>{
  e.style.display='flex'
})
removeBtn.forEach((e)=>{
  e.style.display='none';
  })
})
nothing.style.display="flex";
    });
   
  });

  