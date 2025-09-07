$(document).ready(function(){
  $(".owl-carousel").owlCarousel(
    {
     items:5,
     nav:true,
      navText :['<i class="fa-solid fa-chevron-left bg-black p-3 text-white "></i>','<i class="fa-solid fa-chevron-right  p-3 bg-black text-white"></i>']
    }
  );
});const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))