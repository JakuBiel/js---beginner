//1. elements
let btn = document.querySelector('button')
let square = document.querySelector('div')

//1.1 properties of elements
let turn = 0
const step = 15

//2. function
function turnSquare() {
  // turn = turn + step
  turn += step;
  square.style.transform = 'rotate(' + turn + 'deg)';
  square.style.transition = '1s linear'
  console.log(turn + step);
  square.classList.toggle('mica')
}

//3. listener
btn.addEventListener('click', turnSquare)