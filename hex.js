const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F']

const btn = document.getElementById('btn')
const color = document.querySelector('.color')
// color se compone de # y 6 numeros y/o letra
function getRandomHex () {
  return Math.floor(Math.random() * hex.length)
}

btn.addEventListener('click', () => {
  let hexColor = '#' // conseguimos lo que siempre lleva el principio y buscamos el resto

  for (let i = 0; i < 6; i++) {
    hexColor += hex[getRandomHex()]
  }
  color.textContent = hexColor
  document.body.style.background = hexColor
})
