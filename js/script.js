/**
 * Created by Denis on 31.03.2016.
 */

function ready() {

  var main_nav = document.getElementById("main_nav");
  var main_link = document.getElementById("main_link");
  var main = document.querySelector(".main-nav__layout");
  var main_icon = document.getElementById("main_icon");

  // При загрузке с мобильного

  document.querySelector(".main-nav__icon--active").style.display = "none";
  document.querySelector(".main-nav__icon").style.display = "block";

  if(document.body.clientWidth < 700)
    document.querySelector(".main-nav__items").style.display = "none";
  main.classList.remove("main-nav--active");

  main_link.addEventListener("click", function () {


    if (document.querySelector(".main-nav__icon--active").style.display == "none") {

      document.querySelector(".main-nav__icon--active").style.display = "block";
      document.querySelector(".main-nav__icon").style.display = "none";

      main_nav.style.display = "flex";
      main.classList.add("main-nav--active");

    }
    else {

      document.querySelector(".main-nav__icon--active").style.display = "none";
      document.querySelector(".main-nav__icon").style.display = "block";

      main_nav.style.display = "none";
      main.classList.remove("main-nav--active");

    }

    //main_icon.classList.toggle("main-nav__icon--active");
    //main_icon.classList.toggle("main-nav__icon");


  });

}

document.addEventListener("DOMContentLoaded", ready);


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

if(document.getElementById('map')){

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

}









