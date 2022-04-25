//Menu 
// const menuIcone = document.querySelector(".menu");
// const navMenu = document.querySelector(".links-menu");
// const menuLinks = document.querySelectorAll(".menu-link");
// // mobile menu
// function mobileMenu() {
//   menuIcone.classList.toggle("active");
//   navMenu.classList.toggle("active");
// };
// function closeMenu() {
//   menuIcone.classList.remove("active");
//   navMenu.classList.remove("active");
// };

// menuIcone.addEventListener("click", mobileMenu);
// menuLinks.forEach((nl) => nl.addEventListener("click", closeMenu));
// menuIcone.addEventListener("click", );

// Cards Slider
const swiperOptions = {
        slidesPerView: 3,
        spaceBetween: 40,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
          dynamicBullets: true,
        },
        breakpoints: {
          320: {
            slidesPerView: 1,
            spaceBetween: 20
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 20
          },
          999: {
            slidesPerView: 2,
            spaceBetween: 30
          },
        },
}

// Slides Soluções 
const swiperAdm = new Swiper('.admSwiper' , swiperOptions);
const swiperCidadao = new Swiper('.cidadaoSwiper' , swiperOptions);
const swiperEducacao = new Swiper('.educacaoSwiper' , swiperOptions);
const swiperSaude = new Swiper('.saudeSwiper' , swiperOptions);
const swiperServicos = new Swiper('.servicosSwiper' , swiperOptions);
const swiperTributaria = new Swiper('.tributariaSwiper' , swiperOptions);
const swiperWeb = new Swiper('.webSwiper' , swiperOptions);
const sliders = [swiperAdm, swiperCidadao, swiperEducacao, swiperSaude, swiperServicos, swiperTributaria, swiperWeb ];


// Tabs de soluções
const btnTabs = document.querySelectorAll('.btn-sec');
function openSection(btn) {
  const currSec = document.querySelector(`[data-cont='${btn.dataset.go}']`);
  if(!currSec) return
  const sectionList = document.querySelectorAll('.tab');
  sectionList.forEach(sec => sec.classList.remove('show'));
  currSec.classList.add('show');
  btnTabs.forEach(btn => btn.classList.remove('ativo'));
  btn.classList.add('ativo');
  sliders.forEach(slide => slide.slideTo( 0, 300))
}
btnTabs.forEach(btn => btn.addEventListener('click', e => openSection(e.target)));

//Scroll Btns
(() => {
    const scrollBtns = document.querySelector(".scrollx");
    scrollBtns.addEventListener("wheel", (ev) => {
      ev.preventDefault();
      scrollBtns.scrollLeft += ev.deltaY;
    });
  })();