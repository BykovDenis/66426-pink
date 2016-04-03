/**
 * Created by Denis on 31.03.2016.
 */

function ready() {

  /* Работа с выпадающим меню */

  var main_nav = document.getElementById("main_nav");
  var main_link = document.getElementById("main_link");
  var main = document.querySelector(".main-nav__layout");
  var main_icon = document.getElementById("main_icon");
  var main_layout = document.getElementById("main_layout");

  var main = document.getElementById("main");


  if(main.classList.contains("main-nav--mobile"))
    main.classList.remove("main-nav--mobile");

  main_layout.classList.remove("main-nav__layout--active");

  if(main_nav.classList.contains("main-nav__items--active"))
    main_nav.classList.remove("main-nav__items--active");

  main_link.addEventListener("click", function () {

    if(main_nav.classList.contains("main-nav__items--active")) {

      main_nav.classList.remove("main-nav__items--active")

      document.querySelector(".main-nav__icon--active").style.display = "none";
      document.querySelector(".main-nav__icon").style.display = "block";

      if(main_layout.classList.contains("main-nav__layout--active"))
        main_layout.classList.remove("main-nav__layout--active");

    }
    else {

      main_nav.classList.add("main-nav__items--active");

      document.querySelector(".main-nav__icon--active").style.display = "block";
      document.querySelector(".main-nav__icon").style.display = "none";

      if(!main_layout.classList.contains("main-nav__layout--active"))
        main_layout.classList.add("main-nav__layout--active");

    }

  });



  /* Работа с формой */
  /* Показывается и закрываются окно с удачной и не удачной попыткой передачи данных формы на сервер */
  /* каждое нечетное нажатие на кнопку открывает успешную отправку на сервер, каждое четное отображает не успешное */

  var form = document.getElementById("frm1");

  var i = 0;

  if(form){

   var btn_send = document.getElementById("btn_send");
   var btn_close = document.getElementById("btn_close");
   var btn_close1 = document.getElementById("btn_close1");
   var popup_success = document.getElementById("popup_success");
   var popup_failure = document.getElementById("popup_failure");

    if(btn_send) {

      btn_send.addEventListener("click", function () {

        if (!i) {
          if (!popup_success.classList.contains("popup--active"))
            popup_success.classList.add("popup--active");

          i++;
        }
        else {
          if (!popup_failure.classList.contains("popup--active"))
            popup_failure.classList.add("popup--active");

          i=0;

        }


      });

      if (btn_close)

        btn_close.addEventListener("click", function () {


            if (popup_success.classList.contains("popup--active"))
              popup_success.classList.remove("popup--active");

        });

        btn_close1.addEventListener("click", function () {

          if (popup_failure.classList.contains("popup--active"))
            popup_failure.classList.remove("popup--active");

        });

    }

  }

}

document.addEventListener("DOMContentLoaded", ready);

map = document.getElementById("map");

if(map){

  map.style.display = "block";

  var contact_img = document.querySelector(".contacts_img");

  if(contact_img)
    contact_img.style.display = "none";

  function initMap() {

    var map;

    var marker = {lat: 59.936421, lng: 30.321119};
    var center = {lat: 59.937078, lng: 30.320990};

    map = new google.maps.Map(document.getElementById("map"), {
      center: center,
      zoom: 16,
      disableDefaultUI: true,
      mapTypeControlOptions: {
        style: google.maps.MapTypeControlStyle.DROPDOWN_MENU
      }
    });

    image = "img/icon-map-marker.svg";
    var marker = new google.maps.Marker({map: map, position: marker, icon: image});
    marker.addListener("click", function () {
      infowindow.open(map, marker);
    });

    var contentString = "г. Санкт-Петербург, ул. Большая Конюшенная, 19/8";

    var infowindow = new google.maps.InfoWindow({
      content: contentString
    });

  }

  // Перерисовка при смене размера страницы
  window.addEventListener("resize", function(){

    if(google)
      initMap();

  });

}











