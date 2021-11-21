//1. elements
const btn = document.querySelector('.burger')

const aside = document.querySelector('aside')

//1.1 element properties

// const mLeft = 0

//2. function

function active() {
  console.log("dziala");
  // btn.style.transform = 'rotate(135deg)';
  btn.classList.toggle('active')
  aside.classList.toggle('active')
}

//3. listenerss

btn.addEventListener('click', active)