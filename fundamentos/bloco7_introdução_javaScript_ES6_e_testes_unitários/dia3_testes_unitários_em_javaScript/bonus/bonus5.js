const assert = require('assert');

const verify = (password) => {
    if (password === null) {
        throw new Error ('Password should not be null');
    }
    if (password.length < 8) {
        throw new Error('Password should be larger than 8 chars');
    }

    if (/[A-Z]/.test(password) === false) {
        throw new Error ('Password should have one uppercase letter at least');
    }

    if (/[a-z]/.test(password) === false) {
        throw new Error ('Password should have one lowercase letter at least');
    }

    if (/\d/.test(password) === false) {
        throw new Error ('Password should have one number at least');
    }
    return 'Password is OK'
};

const rightPass = 'K5yrn4sd';
const passNull = null;
const passLessEight = 'K5yrn4';
const passWithoutUp = 'k5yrn4sd';
const passWithoutLow = 'K5YRN4SD';
const passWithoutNum = 'KKyrnSsd';

assert.strictEqual(typeof verify, 'function');
assert.strictEqual(verify(rightPass), 'Password is OK');
assert.throws(() => {verify(passNull);}, /^Error: Password should not be null$/);
assert.throws(() => {verify(passLessEight);}, /^Error: Password should be larger than 8 chars$/);
assert.throws(() => {verify(passWithoutUp);}, /^Error: Password should have one uppercase letter at least$/);
assert.throws(() => {verify(passWithoutLow);}, /^Error: Password should have one lowercase letter at least$/);
assert.throws(() => {verify(passWithoutNum);}, /^Error: Password should have one number at least$/);