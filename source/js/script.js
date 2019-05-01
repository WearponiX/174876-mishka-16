window.onload = function(){
  var navMain = document.querySelector('.site-list');
  var navToggle = document.querySelector('.nav-toggle');
  document.querySelector('.main-nav').classList.remove('main-nav--nojs');
  navToggle.addEventListener('click', function() {
    if (navMain.classList.contains('main-nav--closed')) {
      navToggle.classList.remove('nav-toggle--open');
      navToggle.classList.add('nav-toggle--close');
      navMain.classList.remove('main-nav--closed');
      navMain.classList.add('main-nav--opened');
    } else {
      navToggle.classList.remove('nav-toggle--close');
      navToggle.classList.add('nav-toggle--open');
      navMain.classList.add('main-nav--closed');
      navMain.classList.remove('main-nav--opened');
    }
  })
};
