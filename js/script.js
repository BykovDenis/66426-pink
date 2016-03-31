/**
 * Created by Denis on 31.03.2016.
 */

var main_nav = document.getElementById("main_nav");
var main_link = document.getElementById("main_link");
var main = document.querySelector(".main-nav");
var main_icon = document.getElementById("main_icon");


  main_link.addEventListener("click", function () {

    if(main_icon.classList.contains("main-nav__icon")){

      main_icon.classList.remove("main-nav__icon");
      main_icon.classList.add("main-nav__icon--active");

      main_nav.style.display = "flex";
      main.classList.add("main-nav--active");

    }
    else{

      main_icon.classList.add("main-nav__icon");
      main_icon.classList.remove("main-nav__icon--active");

      main_nav.style.display = "none";
      main.classList.remove("main-nav--active");

    }

    //main_icon.classList.toggle("main-nav__icon--active");
    //main_icon.classList.toggle("main-nav__icon");


  })



