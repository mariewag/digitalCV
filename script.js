// BURGER MENU 

/** Setup burger-menu and buttons */
const menu = document.querySelector(".navbar-links");
const menuBtn = document.querySelector(".menu-btn");
const cancelBtn = document.querySelector(".cancel-btn");

// Add cancel-button and hide burger-icon when clicking on the menu
menuBtn.onclick = ()=> {
  menu.classList.add("active");
  menuBtn.classList.add("hide");
}

// Remove cancel-button and show burger-icon when clicking on it  
cancelBtn.onclick = ()=> {
  menu.classList.remove("active");
  menuBtn.classList.remove("hide");
}


// HEADER SCROLL

/** Add function that runs when scrolling */
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {

// Show menu only when scrolling upwards
var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("header-nav").style.top = "0";
  } else {
    document.getElementById("header-nav").style.top = "-50rem";
  }
  prevScrollpos = currentScrollPos;
}


// TEXT EFFECT

/** Add text, go through each word and create start position */
const text = ["Frontend-utvikler", "Grafisk designer"];
let count = 0;
let index = 0;
let currentText = "";
let letter = "";

// Count length of words
(function type() {
  if(count === text.length) {
    count = 0;
  }
  // Add next letter
  currentText = text[count];
  letter = currentText.slice(0, ++index);

  // Add new word after typing all the letters in the present word
  document.querySelector(".typing").textContent = letter;
  if(letter.length === currentText.length){
    count++;
    index = 0;
  }
  setTimeout(type,200);
}());



