const colors = ['green', 'red', 'rgba(133, 122, 200)', '#f15025']

// botones del html
const btn = document.getElementById('btn')
const color = document.querySelector('.color')

// funcion para sacar el num aletorio
// Math.floor rendondea para abajo
function getRamdomNumer () {
  return Math.floor(Math.random() * colors.length)
}
// evento botón
btn.addEventListener('click', () => {
// obtener numero aleatorio entre 0 y 3 para el arry de colores
  const randomNunmber = getRamdomNumer()
  document.body.style.background = colors[randomNunmber]
  color.textContent = colors[randomNunmber]
})
