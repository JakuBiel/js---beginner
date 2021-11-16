//1. needed elements
let leftDiv = document.querySelector('.s1');

let rightDiv = document.querySelector('.s2');

//1.1 properties of elements


// left.style.fontSize = textSize + 'px';

//2. function


function changeColor() {
  // leftDiv.classList.toggle('red'),
  //   rightDiv.classList.toggle('red')

  this.classList.toggle('red')
}

//3. trigger / listener
leftDiv.addEventListener('click', changeColor)

rightDiv.addEventListener('click', changeColor)