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


  });


// Показать карту

var contacts_map = document.querySelector(".contacts__map");



    var piter = {lat: 59.9387942, lng: 30.323083300000008};
    var center = {lat:59.939462, lng:30.316732};   //59.939462, 30.316732
    var map = new google.maps.Map(document.getElementById('map'), {
      scaleControl: true,
      center: center,
      zoom: 16
    });

    var infowindow = new google.maps.InfoWindow;
    infowindow.setContent('<b>г. Санкт-Петербург, ул. Б. Конюшенная, д. 19</b>');

    var marker = new google.maps.Marker({map: map, position: piter});
    marker.addListener('click', function() {
      infowindow.open(map, marker);
    });




