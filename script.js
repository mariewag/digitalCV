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

















//const mainMenu = document.querySelector('.navbar-links');
//const closeMenu = document.querySelector('.close-menu');
//const openMenu = document.querySelector('.burger-menu');

//openMenu.addEventListener('click',show);
//closeMenu.addEventListener('click',close);

//function show(){
 // mainMenu.style.display = 'flex';
//mainMenu.style.top = '0';
//}

//function close(){
 // mainMenu.style.top = '-100%';
//}

