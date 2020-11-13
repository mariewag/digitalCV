// BURGER MENU 
const menu = document.querySelector(".navbar-links");
const menuBtn = document.querySelector(".menu-btn");
const cancelBtn = document.querySelector(".cancel-btn");
menuBtn.onclick = ()=> {
  menu.classList.add("active");
  menuBtn.classList.add("hide");
}
cancelBtn.onclick = ()=> {
  menu.classList.remove("active");
  menuBtn.classList.remove("hide");
}


// HEADER SCROLL
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("header-nav").style.top = "0";
  } else {
    document.getElementById("header-nav").style.top = "-50rem";
  }
  prevScrollpos = currentScrollPos;
}


// TEXT EFFECT
const text = ["Frontend-utvikler", "Grafisk designer"];
let count = 0;
let index = 0;
let currentText = "";
let letter = "";

(function type() {
  if(count === text.length) {
    count = 0;
  }
  currentText = text[count];
  letter = currentText.slice(0, ++index);

  document.querySelector(".typing").textContent = letter;
  if(letter.length === currentText.length){
    count++;
    index = 0;
  }
  setTimeout(type,200);


}());



