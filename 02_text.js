//1. elements
const p = document.querySelector('p')

const btnSmall = document.querySelector('button.smaller')

const btnBig = document.querySelector('button.bigger')

//1.1 properties of elements
let textSize = 16;


//2. function
function textSmall() {
  textSize--,
    document.querySelector('p').style.fontSize = textSize + 'px'
};

function textBig() {
  textSize++,
    p.style.fontSize = textSize + 'px'
};


//3. listener
btnSmall.addEventListener('click', textSmall)

btnBig.addEventListener('click', textBig)