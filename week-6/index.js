let tacosAvailable = 5
let weather ="sunny"

if (weather === 'sunny' && tacosAvailable > 0) {
  if (tacosAvailable === 2) {
    alert("there's 2 left!" )
  } else if (tacosAvailable === 5) {
    alert('5 omg')
  } else {
    alert('1 left')
  }
}

function fiftyDiscountPrice (nonDiscountedPrice) {
  return nonDiscountedPrice/2
}

function makeNumberAPrice(someNumber) {
  console.log('$' + someNumber + '.00')
}

const price = 20
const discountedPrice = fiftyDiscountPrice(price)

makeNumberAPrice(discountedPrice)
