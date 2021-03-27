burger = document.querySelector(".burger")
nav = document.querySelector(".main-nav")
navList = document.querySelector(".nav-list")
rightNav = document.querySelector(".right-nav")

burger.addEventListener("click",() =>{
    nav.classList.toggle("h-nav-resp")
    rightNav.classList.toggle("v-class-resp")
    navList.classList.toggle("v-class-resp")
})