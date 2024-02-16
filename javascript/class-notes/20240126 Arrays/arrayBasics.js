const arr = [1,2,3]
console.log(arr[0])

// length is a property of the array object
// This holds a value representing the number of items in the array
console.log(arr.length)

// The typeof operator returns the type of a value:
console.log(typeof arr)//object.  Arrays are a type of object!

// We can use a different method to check if something is an array:
console.log(Array.isArray(arr))//true

// we can also use the instanceof operator to check if something is an array:
console.log(arr instanceof Array)//true

// Strings are immutable, meaning they cannot be changed
let str = "Hello World!"
str[0] = "B"
console.log(str)

// However, arrays are mutable, meaning they can be changed
// EVEN IF WE USE CONST!
// This is because the array itself is an object, and the const keyword only prevents us from reassigning the variable
let arr2 = [1,2,3]
arr2[0] = 5
console.log(arr2)
// This is happening because arrays are objects, and objects are passed by reference
// meaning the value stored in the variable is a reference to the object in memory

// We can also add values to an array by referencing an index that doesn't exist yet:
arr2[3] = 4
console.log(arr2)

// The best way to add values to an array is with the push method:
// the PUSH method adds values to the end of an array
// we can push one value, or multiple values at a time
arr2.push(5)//single value at a time
arr2.push(6,7,8)//multiple values at a time
console.log(arr2)

// Remember the value stored in the variable is a reference to the object in memory
// if we use CONST, the memory address CAN NOT change.
// meaning if we try to assign our variable to a new array, we will get an error
// This is because if our computer creates a new array, it will be stored in a new memory address
// if we declare our variable with CONST, it will not be able to change the memory address
// however, if we use LET, we can reassign the variable to a new array (memory address)

const arr3 = [1,2,3]
arr3[0] = 5
// arr3 = ["a","b","c"] //WE CAN NOT DO THIS WITH CONST
console.log(arr3)

// if we assign an array to another array, we are not creating a new array!!!
// we are simply creating a new variable that points to the same array in memory
// We are only storing a memory address in the variable!!!
const arr4 = [1,2,3]
const arr5 = arr4
arr4[0] = 100
console.log(arr5[0])

// The easiest way to copy an array to a new array is with the SPREAD operator!
// WE WILL LEARN MORE ABOUT THE SPREAD OPERATOR LATER!!!
const arr6 = [1,2,3]
// the spread operator is "..." followed by the array name
// when you use the spread operator, imagine putting in the array we're spreading
// and removing the brackets!  Think of this as extracting the literral values from the array
const arr7 = [...arr6]
arr6[0] = 100
console.log(arr7[0])