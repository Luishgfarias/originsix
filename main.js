//   ABRE E FECHA O MENU //
const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')

for (const element of toggle) {
  element.addEventListener('click', function () {
    nav.classList.toggle('show')
  })
}

//   FECHAO MENU QUANDO CLICAR   //

const links = document.querySelectorAll('nav ul li a')

for (const link of links) {
  link.addEventListener('click', function () {
    nav.classList.remove('show')
  })
}

//   SOMBRA DO SCROLL //

const header = document.querySelector('#header')
const navHeight = header.offsetHeight

window.addEventListener('scroll', function () {
  if (window.scrollY >= navHeight) {
    header.classList.add('scroll')
  } else {
    header.classList.remove('scroll')
  }
})

// button home //

const body = document.querySelector('body')
const about = document.querySelector('#about')
const navegation = about.offsetHeight

window.addEventListener('scroll', function () {
  if (window.scrollY >= navegation) {
    body.classList.add('home')
  } else {
    body.classList.remove('home')
  }
})

// Swiper //

const swiper = new Swiper('.swiper-container', {
  slidesPerView: 1,
  pagination: {
    el: '.swiper-pagination'
  },
  moousewheel: true,
  keyboard: true,
  breakpoints: {
    767: {
      slidesPerView: 2,
      setWrapperSize: true
    }
  }
})

// SCROLLREVEAL  //

const scrollreveal = ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700,
  reset: true
})

scrollreveal.reveal(
  `#home .image, #home .text,
#about .image, #about .text,
#services header, #services .card,
#testimonials header, #testimonials .testimonials,
#contact .text, #contact .links
`,
  { interval: 100 }
)
