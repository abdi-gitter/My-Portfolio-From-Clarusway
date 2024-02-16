const arr = [1,2,3,4,5,6,7,8,9,10]
console.log(arr[0])
let num = arr[0]

// PUSH
// To add something to the end of an array, we can use the push method:
arr.push(11)
console.log(arr) // [1,2,3,4,5,6,7,8,9,10,11]

// SLICE
// The slice method returns a copy of a portion of an array
// It takes 2 arguments: the starting index, and the ending index
// The starting index is inclusive (included), the ending index is exclusive (not included)
// If we don't pass an ending index, it will return a copy of the array from the starting index to the end of the array
// if we don't pass any arguments, it will return a copy of the entire array
const arr2 = arr.slice(3,6)
console.log(arr2) // from [1,2,3,4,5,6,7,8,9,10,11] returns [4,5,6]

// POP
// The pop method removes the last item from an array
// It returns the value that was removed
// It takes no arguments
const lastItem = arr.pop() // removes 11 from the end of the array and return 11
console.log(lastItem) // 11
console.log(arr) // [1,2,3,4,5,6,7,8,9,10]

// UNSHIFT
// The unshift method adds an item to the beginning of an array
// It returns the new length of the array
// It takes 1 or more arguments
const newLength = arr.unshift(0) // 11 (the new length of the array)
console.log(newLength) // 11
console.log(arr) // [0,1,2,3,4,5,6,7,8,9,10] // adds 0 to the beginning of the array

// SHIFT
// The shift method removes the first item from an array, returns the value that was removed
// It takes no arguments
const firstItem = arr.shift() // removes 0 from the beginning of the array and returns 0
console.log(firstItem) // 0
console.log(arr) // [1,2,3,4,5,6,7,8,9,10]

// SPLICE
// The splice method removes items from an array and/or adds items to an array
// It takes 2 or 3+ arguments: 
// 2 arguments: starting index, number of items to remove. This is used to remove items from an array
// 3+ arguments: starting index, number of items to remove, items to add. This is used to remove and add items to an array
// It returns an array of the items that were removed
console.log(arr) // [1,2,3,4,5,6,7,8,9,10]
const removedItems = arr.splice(3,3) // removes items starting at index 3, and removes 3 items
console.log(removedItems) // [4,5,6]
console.log(arr) // [1,2,3,7,8,9,10]
const removedItems2 = arr.splice(3,0,4,5,6) // removes 0 items starting at index 3, and adds 4,5,6
console.log(removedItems2) // [] empty array because we didn't remove anything
console.log(arr) // [1,2,3,4,5,6,7,8,9,10]

// CONCAT
// The concat method combines 2 or more arrays into a new array
// It takes 2 or more arguments
// It returns a NEW array, which means a new memory address!
const arr3 = [1,2,3]
const arr4 = [4,5,6]
const arr5 = [7,8,9]
const arr6 = arr3.concat(arr4,arr5)
console.log(arr6) // [1,2,3,4,5,6,7,8,9]

// INDEXOF and LASTINDEXOF
// The indexOf method returns the index of the first occurrence of a value in an array
// It takes 1 argument: the value to search for
// It returns the index of the first occurrence of the value, or -1 if the value is not found
// The lastIndexOf method returns the index of the last occurrence of a value in an array
// It takes 1 argument: the value to search for
// It returns the index of the last occurrence of the value, or -1 if the value is not found
// Both methods start searching from the beginning of the array
// These methods are used to get an index so we can use it to refer to that element in our array!
const arr7 = [1,2,3,4,5,6,7,8,9,10,1,2,3,4] // 14 items // indexes 0-13
// find the first index of 3
const firstIndexOf3 = arr7.indexOf(3)// 2
console.log(firstIndexOf3)
console.log(arr7[firstIndexOf3])// 3

// find the last index of 3
const lastIndexOf3 = arr7.lastIndexOf(3)// 12
console.log(lastIndexOf3) // 12
console.log(arr7[lastIndexOf3]) // 3

// REVERSE
// The reverse method reverses the order of the elements in an array
// It takes no arguments
// It returns the reversed array
const reversed = arr.reverse()
console.log(reversed) // [10,9,8,7,6,5,4,3,2,1]

// JOIN
// The join method combines all the elements in an array into a string
// It takes 1 argument: the separator
// It returns a string
// how to reverse a string - COMMON INTERVIEW QUESTION!
const str = "Hello World!"
console.log(str)
const arr8 = str.split('') // ['H','e','l','l','o',' ','W','o','r','l','d','!']
arr2.reverse() // ['!','d','l','r','o','W',' ','o','l','l','e','H']
const newStr = arr8.join('') // "!dlroW olleH"
console.log(newStr)

// SORT
// The sort method sorts the elements in an array
// It takes a function as an argument! - MORE ON THIS LATER
// It returns the sorted array
// with numbers, it sorts by the first digit
// with strings, it sorts alphabetically
// with mixed data types, it sorts by data type
const arr9 = [1,2,3,4,5,6,7,0,8,9,10,11,12,13,14,100,1000,10000, 'h','b','m','d','k','f','g','a','i','j','e','l','c','n']
arr9.sort()
console.log(arr9) // [1,10,100,1000,10000,11,12,13,14,2,3,4,5,6,7,8,9]

// random out of order numbers:
const arr10 = [12,56,18,3,1,0,36,15,197,4,7,11,10]
arr10.sort() // [0, 1, 10, 11, 12, 15, 18, 197, 3, 36, 4, 56, 7]

//SORTING NUMBERS:
// Without a function, it sorts by the first digit (as a string)
// by passing a function as an argument to the sort method, we can sort by the actual number
// our functions that we pass to the sort method take 2 arguments: the first item, and the second item
// the first item is the item that comes first in the array
// the second item is the item that comes second in the array
// if the function returns a negative number, the first item comes first
// if the function returns a positive number, the second item comes first
// if the function returns 0, the items stay in the same order

// Ascending order:
const asc = (a,b)=>a-b

// Descending order:
const desc = (a,b)=>b-a

console.log("Ascending order: " + arr.sort(asc)) // sorts in ascending order
console.log("Descending order: " + arr.sort(desc)) // sorts in descending order

// INCLUDES
// The includes method checks if an array includes a value
// It takes 1 argument: the value to search for
// It returns true if the value is found, false if it is not found

console.log(arr.includes("Hello")) // false
console.log(arr.includes(1)) // true

