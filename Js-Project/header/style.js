// menu nav icon change and show and hide nav
let checkbox = document.querySelector(".fa-bars")
let menuShow =  document.querySelector("nav")
checkbox.addEventListener("click",function(){
    if(checkbox.classList.contains("fa-bars")){
checkbox.classList.replace("fa-bars","fa-circle-xmark")
menuShow.style.left="0";
    }else{
        checkbox.classList.replace("fa-circle-xmark","fa-bars");
        menuShow.style.left="-100%";
    }
})

// go top button
 let goTop = document.querySelector(".go-top")
 window.addEventListener("scroll",()=>{
    if(window.scrollY > 100){
        goTop.style.display = "block" ;
        goTop.style.transition = "all 0.5s";
    }else{goTop.style.display = "none"}
 })
// stickt header
 let header = document.querySelector(".header")
 window.addEventListener("scroll",()=>{
    if(window.scrollY > 100){
        header.style.position = "fixed" ;
    }else{
        header.style.position = "relative"
       
     }
 })
