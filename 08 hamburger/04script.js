//1. elements
const btn = document.querySelector('.burger')

const aside = document.querySelector('aside')

const bars = document.querySelector('.fa-bars')

const iconX = document.querySelector('.fa-times')

const parag = document.querySelector('.wrapper')

//2. function

function move() {
  aside.classList.toggle('show')
  bars.classList.toggle('show')
  iconX.classList.toggle('show')
  parag.classList.toggle('show')
}

//3. listener

btn.addEventListener('click', move)




// jQ code:

// $(".burger").on("click", function () {
//   $(".fas, aside").toggleClass("show");
// })