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
/*
var contacts_map = document.querySelector(".contacts__map");

    var piter = {lat: 59.936421, lng: 30.321119};
    var center = {lat: 59.936077, lng: 30.321108};
    var map = new google.maps.Map(document.getElementById('map'), {
      scaleControl: true,
      center: center,
      zoom: 16
    });

    image = "img/icon-map-marker.svg";
    var marker = new google.maps.Marker({map: map, position: piter, icon: image});
    marker.addListener('click', function() {
      infowindow.open(map, marker);
    });
*/
/*

function initialize() {

  var contacts_map = document.querySelector(".contacts__map");

  var piter = {lat: 59.936421, lng: 30.321119};
  var center = {lat: 59.936077, lng: 30.321108};
  var map = new google.maps.Map(document.getElementById('map'), {
    scaleControl: true,
    center: center,
    zoom: 17
  });

  image = "img/icon-map-marker.svg";
  var marker = new google.maps.Marker({map: map, position: piter, icon: image});
  marker.addListener('click', function() {
    infowindow.open(map, marker);
  });


}

google.maps.event.addDomListener(window, 'load', initialize);
*/

function initMap() {

    var map;

    var marker = {lat: 59.936421, lng: 30.321119};
    var center = {lat: 59.937078, lng: 30.320990};

    map = new google.maps.Map(document.getElementById('map'), {
      center: center,
      zoom: 16,
      disableDefaultUI: true,
      mapTypeControlOptions: {
        style: google.maps.MapTypeControlStyle.DROPDOWN_MENU
      }
    });

    image = "img/icon-map-marker.svg";
    var marker = new google.maps.Marker({map: map, position: marker, icon: image});
    marker.addListener('click', function () {
      infowindow.open(map, marker);
    });

  }

// Перерисовка при смене размера страницы
window.addEventListener('resize', function(){

  if(google)
    initMap();

});









