window.onload = function(){
  var navMain = document.querySelector('.main-nav');
  var navToggle = document.querySelector('.nav-toggle');
  navMain.classList.remove('main-nav--nojs');
  navToggle.addEventListener('click', function() {
    if (navMain.classList.contains('main-nav--closed')) {
      navMain.classList.remove('main-nav--closed');
      navMain.classList.add('main-nav--opened');
    } else {
      navMain.classList.add('main-nav--closed');
      navMain.classList.remove('main-nav--opened');
    }
  })

var index=document.querySelector(".item__buy");
var сatalog=document.querySelectorAll(".catalog-item__buy");
var modal=document.querySelector(".modal-window");

if (index) {
  index.addEventListener ("click", function (evt) {
  evt.preventDefault();
  modal.classList.remove("modal--close");
  });
}

if (сatalog) {
  for (var i = 0; i <= (сatalog.length-1); i++) {
    сatalog[i].addEventListener ("click", function (evt) {
    evt.preventDefault();
    modal.classList.remove("modal--close");
    });
  }
}

 window.addEventListener("keydown", function (evt) {
   if (evt.keyCode === 27) {
     evt.preventDefault();
     modal.classList.add("modal--close");
   }
 });
};
