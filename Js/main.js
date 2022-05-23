// * show menu *

const nav_menu =document.querySelector(".nav_menu"),
      close_btn = document.querySelector(".nav_close"),
      toggle_btn = document.querySelector(".nav_toggle"),
      nav_links = document.querySelectorAll(".nav_item_link");

toggle_btn.addEventListener("click", ()=>{
    nav_menu.classList.add("show_menu");
})
close_btn.addEventListener("click",()=>{
    nav_menu.classList.remove("show_menu");
})

nav_links.forEach((link)=>{
    link.addEventListener("click",()=>{
        nav_menu.classList.remove("show_menu");
    })
   
})

// * Change the header background *

const header = document.getElementById("header");
window.addEventListener("scroll", ()=>{
    if(this.scrollY >= 50){
        header.classList.add("header-scroll");
    }else{
        header.classList.remove("header-scroll");
    }
})