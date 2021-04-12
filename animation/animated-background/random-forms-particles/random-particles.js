const colors = ['#2196F3', '#E91E63', '#FFEB3B', '#74FF1D']
const format = [
  'polygon(0 25%, 60% 25%, 60% 0%, 100% 50%, 60% 100%, 60% 75%, 0 75%)', // arrow (right arrow)
  'polygon(20% 0%, 0% 20%, 30% 50%, 0% 80%, 20% 100%, 50% 70%, 80% 100%, 100% 80%, 70% 50%, 100% 20%, 80% 0%, 50% 30%)', // ex (X)
  'polygon(0% 0%, 0% 100%, 25% 100%, 25% 25%, 75% 25%, 75% 75%, 25% 75%, 25% 100%, 100% 100%, 100% 0%)', // frame
  'polygon(100% 0, 100% 100%, 0 100%, 0 0)', // rectangle
  'polygon(50% 0%, 61% 35%, 100% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 0% 35%, 39% 35%)', // star
  'polygon(0 25%, 25% 25%, 25% 0, 75% 0, 75% 25%, 100% 25%, 100% 75%, 75% 75%, 75% 100%, 25% 100%, 25% 75%, 0 75%)' // sum (+)
]

var chooseForm = -1
const element = ['arrow', 'ex', 'frame', 'rectangle', 'star', 'sum', 'all']

function removeAnimation() {
  window.document.querySelector('.animated').classList.remove('animated')
}


function insertAnimation(value) {
  let position = value
  if (value === -1) {
    position = element.length - 1
  } 

  document.querySelector(`.${element[position]}`).classList.add('animated')
  setTimeout(removeAnimation, 1500)
}

function handleChooseForm(value) {
  chooseForm = value
  insertAnimation(value)
}


function createSquare() {
  const section = document.querySelector('section')
  const square = document.createElement('span')
  var size = Math.random() * 50
  const bg = colors[Math.floor(Math.random() * colors.length)]
  const form = format[Math.floor(Math.random() * format.length)]

  square.style.width = 20 + size + 'px'
  square.style.height = 20 + size + 'px'

  square.style.top = Math.random() * innerHeight + 'px'
  square.style.left = Math.random() * innerWidth + 'px'

  square.style.background = bg
  square.style.clipPath = (chooseForm !== -1) ? format[chooseForm] : form

  section.appendChild(square)

  setTimeout(() => {
    square.remove()
  }, 5000)
}

setInterval(createSquare, 150)