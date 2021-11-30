
// This function should take a string and add return an new string that adds three exclamation points to the argument.
/* 

Input:

'bunny rabbit'

Output: 

'bunny rabbit!!!'

*/

export function addExclamationPoints(someString) {
    return someString + '!!!';
}

// This function should take in a number and multiply it by seven

/* 
Input:

4

Output: 

28 
*/

export function multiplyBySeven(num) {
    let number = (num * 7);
    return number.toFixed(2);
}

// This function should take in a number and multiply it by seven then cut the result in half

/* 
Input:

4

Output: 

24

*/

export function multiplyBy12ThenHalve(num) {
    return ((num * 7) / 2).toFixed(2);
}


// This function should take in three numbers, divide the first by the second, then multiply the result by the third

/* 
Input:

8, 4, 5

Output: 

10 (because 8 divided by 4 is 2, times 5 is 10)
*/

export function divideThenMultiply(firstNumber, secondNumber, thirdNumber) {
    if(secondNumber === 0) {
        return 'Not Possible divide by Zero Error'
    } else {
        let numTotal = (firstNumber / secondNumber) * thirdNumber;
        return numTotal.toFixed(2);
    }
}


// This function should take in three numbers and return those numbers in an array

/* 
Input:

8, 4, 5

Output: 

[8, 4, 5]
*/

export function returnAsAnArray(firstNumber, secondNumber, thirdNumber) {
    let arr = [];
    arr.push(firstNumber, secondNumber, thirdNumber);
    return arr;
}

// This function should take in three numbers and return those numbers mushed together as a string

/* 
Input:

8, 4, 5

Output: 

'845'
*/

export function returnAsAString(firstNumber, secondNumber, thirdNumber) {
    let numToString = firstNumber.toString() + secondNumber.toString() + thirdNumber.toString()
    return numToString;
}

// This function should take in two numbers and return a greeting announcing that the sum of those numbers is today's lucky number

/* 
Input:

8, 4

Output: 

'Hello! Your lucky number for the day is 12.'
*/

export function makeLuckyGreeting(firstNumber, secondNumber) {
    let finalNumber = firstNumber + secondNumber;
    return `Hello! Your lucky number for the day is ${finalNumber.toFixed(2)}`;
}

// This function should take an array and return the second item in the array

/* 
Input:

['kiwi', 'apple', 'orange', 'plum']

Output: 

'apple'

*/

export function getSecondItem(array) {
    
    return array[1];
}

// This function should take an array and return the LAST item in the array, no matter the array's length

/* 
Input:

['kiwi', 'apple', 'orange', 'plum']

Output: 

'plum'

*/

export function getLastItem(array) {
    // let arr = [];
    return array.pop();
    // for (let i = 0; i < array.length; i++) {
    //     arr.push(array[i]);
    //     arr.pop();
    // }
}

// Bonus question:

// This function should make a random number between 0 and 5. 

// Note that this is an impure function, so you'll have to test it without knowing exactly what it will return. 

// Ask yourself: even if you cannot predict the result exactly, what _do_ you know about what it should return? Use that expectation to write your test

export function getRandomNumber() {
    let num = Math.floor(Math.random() * 5)
    return num;
}