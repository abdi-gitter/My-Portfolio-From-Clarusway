const arr = [
    "Chase",
    "Abdisa",
    "Antonio",
    "Jacek",
    "Kenneth",
    "Birsen",
    "Ahmed",
    "Ibrahim",
    "Fatih",
    "Barry",
    "Tahmina",
    "Zachary",
]
//length would be 12, but the last index is 11
// For loops are perfect for looping through arrays
// We can use the length property to determine how many times to loop!
// We set our iterator variable to 0, because the first index of an array is 0!
for(let i = 0; i <arr.length; i++){
    console.log(arr[i])

    // DOM STUFF:
    // remove comments below to see each item in array being added to DOM:

    const element = document.createElement('h1')
    element.textContent = arr[i]
    document.body.appendChild(element)
}

const arr2 = [1,2,3,4,5,6,7,8,9,10]

for(let i = 0; i < arr2.length; i++){
    console.log(arr2[i])
}

// 2 dimensional array:
const arr3 = [
    [1,2,3],
    [4,5,6],
    [7,8,9],
    [10,11,12]
]
// looping through an array of arrays (2d array):
// Loop through main array:
for(let i = 0; i < arr3.length; i++){
    //arr3[i] >> [1,2,3]
    // console.log(arr3[i])
    // HERE WE ARE GOING TO LOOP THROUGH EACH SUB ARRAY:
    for(let j = 0; j < arr3[i].length; j++){
        // Each value in each sub array:
        console.log(arr3[i][j])
    }
}












