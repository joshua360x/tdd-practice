// IMPORT MODULES under test here:
import { 
    addExclamationPoints, multiplyBySeven, multiplyBy12ThenHalve, divideThenMultiply, returnAsAnArray, returnAsAString, makeLuckyGreeting, getSecondItem, getLastItem, getRandomNumber
} from '../functions.js';

const { test, skip } = QUnit;

test('addExclamationPoints should return a string with 3 exclamations points added to the end', (expect) => {
    const expected = 'puppy!!!';

    const actual = addExclamationPoints('puppy');

    const expected1 = 'guppy!!!';

    const actual1 = addExclamationPoints('guppy');

    const expected2 = 'yuppy!!!';

    const actual2 = addExclamationPoints('yuppy');

    expect.equal(actual, expected);
    expect.equal(actual1, expected1);
    expect.equal(actual2, expected2);
});


// test case for multiplyBySeven function
test('multiplyBySeven should return a product of any number and seven and divide it in half', (expect) => {
    const expected = 35;

    const actual = multiplyBySeven(5);

    const expected1 = 24.89;

    const actual1 = multiplyBySeven(3.5555);

    const expected2 = 0;

    const actual2 = multiplyBySeven(0);

    expect.equal(actual, expected, 'The value should be 35');
    expect.equal(actual1, expected1, 'The value should be 24.89');
    expect.equal(actual2, expected2, 'The value should be 0');
});



// test case for multiplyBy12ThenHalve function
test('multiplyBy12ThenHalve should return a product of any number and seven', (expect) => {
    const expected = 17.5;

    const actual = multiplyBy12ThenHalve(5);

    const expected1 = 3.5;

    const actual1 = multiplyBy12ThenHalve(1);

    const expected2 = 0;

    const actual2 = multiplyBy12ThenHalve(0);

    expect.equal(actual, expected, 'The value should be 17.5');
    expect.equal(actual1, expected1, 'The value should be 3.5');
    expect.equal(actual2, expected2, 'The value should be 0');
});


// test case for divideThenMultiply function
test('divideThenMultiply should return a product of any number and seven and divide it in half', (expect) => {
    const expected = 10;

    const actual = divideThenMultiply(8, 4, 5);

    const expected1 = 1.5;

    const actual1 = divideThenMultiply(1, 2, 3);

    const expected2 = 'Not Possible divide by Zero Error';

    const actual2 = divideThenMultiply(1, 0, 100);

    expect.equal(actual, expected, 'The value should be 10');
    expect.equal(actual1, expected1, 'The value should be 1.5');
    expect.equal(actual2, expected2, 'The value should be Error');
});


// test case for returnAsAnArray function
test('returnAsAnArray should take three numbers and return them as an array', (expect) => {
    const expected = [8, 4, 5];

    const actual = returnAsAnArray(8, 4, 5);

    const expected1 = [1, 2, 3];

    const actual1 = returnAsAnArray(1, 2, 3);

    const expected2 = [9, 10, 100];

    const actual2 = returnAsAnArray(9, 10, 100);

    expect.deepEqual(actual, expected, 'The array should be [8, 4, 5]');
    expect.deepEqual(actual1, expected1, 'The array should be [1, 2, 3]');
    expect.deepEqual(actual2, expected2, 'The array should be [9, 10, 100]');
});


// test case for returnAsAString function
test('returnAsAString should take the sum of 3 numbers as a string, thereby combining them instead of taking the mathematical sum', (expect) => {
    const expected = 845;

    const actual = returnAsAString(8, 4, 5);

    const expected1 = 123;

    const actual1 = returnAsAString(1, 2, 3);

    const expected2 = 910100;

    const actual2 = returnAsAString(9, 10, 100);

    expect.equal(actual, expected, 'The array should be 845');
    expect.equal(actual1, expected1, 'The array should be 123');
    expect.equal(actual2, expected2, 'The array should be 910100');
});


// test case for makeLuckyGreeting function
test('makeLuckyGreeting should take the sum of two number and return a string in the format of "Hello! Your lucky number for the day is (sum of two numbers)"', (expect) => {
    const expected = 'Hello! Your lucky number for the day is 12.00';

    const actual = makeLuckyGreeting(8, 4);

    const expected1 = 'Hello! Your lucky number for the day is 3.00';

    const actual1 = makeLuckyGreeting(1, 2);

    const expected2 = 'Hello! Your lucky number for the day is 19.00';

    const actual2 = makeLuckyGreeting(9, 10);

    expect.equal(actual, expected, 'Lucky Number should be 12.00');
    expect.equal(actual1, expected1, 'Lucky Number should be 3.00');
    expect.equal(actual2, expected2, 'Lucky Number should be 19.00');
});


// test case for getSecondItem function
test('getSecondItem should return the second item in an array', (expect) => {
    const expected = 'apple';

    const actual = getSecondItem(['kiwi', 'apple', 'orange', 'plum']);

    const expected1 = 2;

    const actual1 = getSecondItem([1, 2]);

    const expected2 = 10;

    const actual2 = getSecondItem([9, 10, 'purple']);

    expect.equal(actual, expected, 'Your value should be apple');
    expect.equal(actual1, expected1, 'Your value should be 2');
    expect.equal(actual2, expected2, 'Your value should be 10');
});


// test case for getLastItem function
test('getLastItem should return the last item in an array', (expect) => {
    const expected = 'plum';

    const actual = getLastItem(['kiwi', 'apple', 'orange', 'plum']);

    const expected1 = 1400;

    const actual1 = getLastItem([1, 2, 12, 1400]);

    const expected2 = 'red';

    const actual2 = getLastItem([9, 10, 'purple', 'blue', 'red']);

    expect.equal(actual, expected, 'Your value should be plum');
    expect.equal(actual1, expected1, 'Your value should be 1400');
    expect.equal(actual2, expected2, 'Your value should be red');
});


// test case for getRandomNumber function
// test('getRandomNumber should return the last item in an array', (expect) => {
//     const expected = 1 || 2 || 3 || 4 || 5;

//     const actual = getRandomNumber();

//     const expected1 = 1 || 2 || 3 || 4 || 5;

//     const actual1 = getRandomNumber();

//     const expected2 = 1 || 2 || 3 || 4 || 5;

//     const actual2 = getRandomNumber();

//     expect.equal(actual, expected, 'Your number should be a value between 1 and 5');
//     expect.equal(actual1, expected1, 'our number should be a value between 1 and 5');
//     expect.equal(actual2, expected2, 'our number should be a value between 1 and 5');
// });


skip('this test should be skipped', (expect) => {
    const expected = true;

    const actual = true;

    expect.equal(actual, expected);
});

