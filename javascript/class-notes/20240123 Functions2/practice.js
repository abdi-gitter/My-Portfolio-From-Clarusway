// rate converter
const convert = (amount, rate) => amount * rate;
console.log(convert(100, 1.5))

// how many times a character shows up in a string:
const countChar = (str, char) => {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str.charAt(i) == char) count++;
    }
    return count;
};
console.log(countChar("hello", "l"));

// Abdisa's solution:

const countOccurrences = (str, char) => str.split(char).length - 1;
let str = "Clarusway";
let char = "a";
let result = countOccurrences(str, char);
console.log(result);


// check if a number is prime:
const isPrime = (num) => {
    // we start at 2 because 0 and 1 are not prime numbers
    // 2 is the first prime number
    if (num < 2) return false;

    // We need to loop from 2 to the number itself, incrementing by 1 each time
    // we start at 2 because every number is divisible by 1
    for (let i = 2; i < num; i++) {

        // if the number is divisible by any number other than 1 or itself, it is not prime
        // remember if we return a value, we close out of not only the loop, but we also 
        // close out of the function immediately
        if (num % i == 0) return false;
    }
    // if a number is not divisible by any number other than 1 or itself, it is prime,
    // the loop never returned false, so all we have to do is return true
    return true;
};

console.log(isPrime(8));


// create a function that creates an array of prime numbers within a range of 2 numbers.
const primes = (start, end) => {
    let primeList = []
    for(let i = start; i <= end; i++){
        if(isPrime(i) === true){
            // add to array:
            primeList.push(i)

            // log to console:
            console.log(i)
        }
    }
    return primeList?primeList:'NO PRIME NUMBERS'
}

const pb2_11 = primes(2,11)
console.log(pb2_11)