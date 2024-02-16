let input = 'chaselones@gmail.com'

// use indexOf to get the index of @
// slice the string from the @ sign to the end of the string,
// slice.includes

// expect input to contain an @ sign, and a . after the @ sign

if(input.includes("@")){
    let slice = input.slice(input.indexOf('@'))
    if(slice.includes('.')){
        console.log('EMAIL IS GOOD!')
    }else{
        console.log('INVALID EMAIL')
    }
} else{
    console.log('INVALID EMAIL')
}


// Convert text to sentence format:

let sentence = "thIs IS A sTrInG ThAt We WAnt tO ConVerT To SenTenCe FoRmAt."
// convert the first character to uppercase
// first, slice out EVERYTHING except the first character in the string:
// then make it all lower case.
const s2 = sentence.slice(1).toLowerCase()

// Now, slice out the first character in the string
// make it uppercase
const s1 = sentence.slice(0,1).toUpperCase()

// concatenate the first (uppercase) character with the rest of the (lowercase) characters
sentence = s1.concat(s2)

console.log(sentence)




