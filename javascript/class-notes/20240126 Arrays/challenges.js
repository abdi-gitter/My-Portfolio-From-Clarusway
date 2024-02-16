// CHALLENGE 1:
// replace the first item in an array and the last item in an array
// change "red" to "orange" and "yellow" to "purple"

// Methods to use:
    // shift would remove the first item in an array
    // pop would remove the last item in an array
    // unshift would add an item to the beginning of an array
    // push would add an item to the end of an array
const arr = ['red', 'blue', 'green', 'yellow']

arr.shift()
arr.unshift('orange')
arr.pop()
arr.push('purple')

console.log(arr)

// CHALLENGE 2:
const arr1=['red','blue','purple']
const removed = arr1.splice(0,0,'yellow')
console.log(arr1) // ['yellow','red','blue','purple']
console.log(removed) // [] empty array because we didn't remove anything

// CHALLENGE 3:
// how to reverse a string - COMMON INTERVIEW QUESTION!
const str = "Hello World!"
console.log(str)
const arr2 = str.split('') // ['H','e','l','l','o',' ','W','o','r','l','d','!']
arr2.reverse() // ['!','d','l','r','o','W',' ','o','l','l','e','H']
const newStr = arr2.join('') // "!dlroW olleH"
console.log(newStr)
