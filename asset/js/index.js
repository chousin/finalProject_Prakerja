function toggleMenu() {
  const navLinks = document.querySelector('.nav-links');
  navLinks.classList.toggle('active');
}




document.querySelector('.header-action-aria .btn').addEventListener('click', function(event) {
  event.preventDefault(); 
  window.open('./asset/document/cv_kelfin.pdf', '_blank'); 
});


function scrollToTop() {
  window.scrollTo(0, 0);
}


document.querySelector('.menu-icon').addEventListener('click', scrollToTop);