const burger = document.querySelector('.burger')
const navbar = document.querySelector('.navbar')

burger.addEventListener('click', function () {
  burger.classList.toggle('show')
  navbar.classList.toggle('show')
  console.log('ok')
})