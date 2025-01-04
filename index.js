// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDhCy703GMHRL0vpleviPFlRFOVvLZVd2I",
    authDomain: "contectform-842b4.firebaseapp.com",
    databaseURL: "https://contectform-842b4-default-rtdb.firebaseio.com",
    projectId: "contectform-842b4",
    storageBucket: "contectform-842b4.firebasestorage.app",
    messagingSenderId: "565244872425",
    appId: "1:565244872425:web:c8fa0ef417e3e89590d278"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// reference your database
const contectFormDB = firebase.database().ref('contectForm');

document.getElementById("contectForm").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  var name = getElementVal("name");
  var emailid = getElementVal("emailid");
  var msgContent = getElementVal("msgContent");

  saveMessages(name, emailid, msgContent);

  //   enable alert
  document.querySelector(".alert").style.display = "block";

  //   remove the alert
  setTimeout(() => {
    document.querySelector(".alert").style.display = "none";
  }, 3000);

  //   reset the form
  document.getElementById("contectForm").reset();
}

const saveMessages = (name, emailid, msgContent) => {
  var newContactForm = contectFormDB.push();

  newContactForm.set({
    name: name,
    emailid: emailid,
    msgContent: msgContent,
  });
};

const getElementVal = (id) => {
  return document.getElementById(id).value;
};


let cartCount = 0;


function updateCartDisplay() {
    const cartCountElement = document.querySelector('.cart-count');
    cartCountElement.textContent = cartCount; 
}


function addToCart() {
    cartCount++; 
    updateCartDisplay(); 
}


document.addEventListener('DOMContentLoaded', () => {
    const buyBtns = document.querySelectorAll('.p-buy-btn'); 
    
    buyBtns.forEach(btn => {
        btn.addEventListener('click', (event) => {
            event.preventDefault(); 
            addToCart();
        });
    });
});