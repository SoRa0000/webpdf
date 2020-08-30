const navSlide = ()=> {
    const lines = document.querySelector('.lines');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');
    const bookSlide = document.querySelectorAll('.swiper-container')
    lines.addEventListener('click', () =>{
        nav.classList.toggle('nav-active');
        navLinks.forEach((link, index) => {
            if(link.style.animation){
                link.style.animation = '';
            }
            else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index/6+0.5}s`;
                console.log(index / 7 + 2);
            }
        });  
        lines.classList.toggle('toggle');
        bookSlide.classList.toggle('display-none');
    });
}
const scrollShadow = () => {
    $(window).scroll(function(){
        if ($(window).scrollTop()>10){
            $('nav').addClass('navbar-shadow');
        }
        else{
            $('nav').removeClass('navbar-shadow')
        }
    });
}
const swiper = new Swiper('.swiper-container', {
    slidesPerView: 4,
    spaceBetween: 30,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
      navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
      },
  });

navSlide();
scrollShadow();
