// IMPORT MODULES under test here:
import { 
    addExclamationPoints,
} from '../functions.js';

const { test, skip } = QUnit;

test('addExclamationPoints should return a string with 3 exclamations points added to the end', (expect) => {
    const expected = 'puppy!!!';

    const actual = addExclamationPoints('puppy');

    expect.equal(actual, expected);
});

test('addExclamationPoints should return a string with 3 exclamations points added to the end', (expect) => {
    const expected1 = 'guppy!!!';

    const actual1 = addExclamationPoints('guppy');

    expect.equal(actual1, expected1);
});


skip('this test should be skipped', (expect) => {
    const expected = true;

    const actual = true;

    expect.equal(actual, expected);
});

