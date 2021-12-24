const button = document.querySelector('.toggler');
const menu = document.querySelector('.menu');
const topBar = document.querySelector('.top-bar')
const bottomBar = document.querySelector('.bottom-bar')
const main = document.querySelector('main')
const container = document.querySelector('.h-100')
const footer = document.querySelector('footer')


button.addEventListener('click', () => {
    menu.classList.toggle('active')
    topBar.classList.toggle('active-toggle')
    bottomBar.classList.toggle('active-toggle')
    main.classList.toggle('blur')
    container.classList.toggle('blur')
    footer.classList.toggle('blur')
})


const navigation = document.querySelector('.navbar')

window.onscroll = function() {myFunction()};

function myFunction() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    navigation.classList.add('sticky')
  } else {
    navigation.classList.remove('sticky')
  }
}