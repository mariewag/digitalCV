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



