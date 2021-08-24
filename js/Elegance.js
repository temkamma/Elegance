document.querySelector('.burger').onclick = function() {
  document.querySelector('.burger').classList.toggle('burger-active');
  document.querySelector('.header-menu').classList.toggle('header-menu-active');
  $('body').toggleClass('lock');
}
