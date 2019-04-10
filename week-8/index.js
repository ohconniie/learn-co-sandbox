let number = document.getElementById('number')
const buttonAdd = document.getElementById('button-add')
const buttonMinus = document.getElementById('button-minus')

buttonAdd.addEventListener('click', () => {
  const currentNumber = parseInt(number.innerHTML) 
  const newNumber = currentNumber + 1
  number.innerHTML = newNumber
})

buttonMinus.addEventListener('click', () => {
  const currentNumber = number.innerHTML
  if (currentNumber >= 1) {
    const newNumber = currentNumber - 1
    number.innerHTML = newNumber
  }
})