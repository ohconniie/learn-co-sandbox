const myArray = [4, 5, 6, 7, 8]

myArray.push(5)
myArray.push(13)

console.log(myArray[0])
console.log(myArray[myArray.length - 1])

// Non-Destructive

const myArrayCopy = myArray.slice()
myArrayCopy.push(3)


/* 
destructive
pop() - deletes from the end
push(someItem) - adds to the end
shift() - deletes from the beginning
unshift(someItem - adds to the beginning
*/