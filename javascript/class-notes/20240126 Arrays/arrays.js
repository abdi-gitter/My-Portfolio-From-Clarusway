const obj = {
    a: 1,
    b: 2,
    c: 3,
    d: ()=>"hi"
}

console.log(obj.a)
// console.log(obj['a'])

// Create array with array literal:
const arr = [1,2,3,4,5,6,7,8,9,10]
// We access values in an array with indexing:
console.log(arr[0])

// arrays can hold any combination of values and data types:
const arr2=[
    {
        prop1: 1,
        method1:()=>"hi"
    },
    [1,2,3],
    [4,5,6],
    [7,8,9],
    5,
    "HELLO!",
    true,
    ()=>console.log('HEY!'),
]

console.log(arr2[7])

const newArr = new Array(10,5,1)//by passing these 3 values, we are putting them into a new array
// if I were to pass this new Array method a single value, it would create an array with that many empty slots

//Even though we're using const, we can still change the contents of the array

// newArr[0] = 1
console.log(newArr)



