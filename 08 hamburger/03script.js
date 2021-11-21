//1. elements
const btn = document.querySelector('.burger')

const aside = document.querySelector('aside')

const bars = document.querySelector('.fa-bars')

const iconX = document.querySelector('.fa-times')

//1.1 element properties

const mLeft = 0

//2. function

function move() {
  aside.style.left = mLeft;
  console.log("dziala");
  bars.classList.toggle('show')
  iconX.classList.toggle('show')
}

//3. listener

btn.addEventListener('click', move)