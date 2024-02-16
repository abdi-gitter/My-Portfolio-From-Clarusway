const str = 
"This is a string, it is a long string.  This is because we want to find the occurences of the letter i in this string."

let count = 0 // we will use this to count the number of occurrences of i

let position = str.indexOf('i') // get us the index of the first occurrence of i
// if the substring is not in the string, this position value will be -1 and the loop will not run

while(position !== -1){
    count ++ // increment the count
    // below, we will set the new position to be the index of the next occurrence of i
    // if we don't find another i, then position will be -1, and the loop will stop
    position = str.indexOf('i',position+1)
}

console.log(count)


// Using a for loop:
let count2 = 0
for(let i = 0; i<str.length; i++){
    if(str[i] === 'i'){
        count2++
    }
}
console.log(count2)