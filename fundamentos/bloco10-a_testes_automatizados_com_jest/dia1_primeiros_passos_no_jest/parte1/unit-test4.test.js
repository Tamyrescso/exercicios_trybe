function myFizzBuzz(num) {
    if (typeof num !== 'number') return false;
    if (num % 3 === 0 && num % 5 === 0) return 'fizzbuzz';
    if (num % 3 === 0) return 'fizz';
    if (num % 5 === 0) return 'buzz';
    return num;
}
test('if it is a function', () => {
    expect(myFizzBuzz).toBeDefined();
})
test('if the parameter is not a number return false', () => {
    expect(myFizzBuzz('oi')).toBe(false);
})
test('if the parameter is divisible by 3 and 5 return fizzbuzz', () => {
    expect(myFizzBuzz(15)).toBe('fizzbuzz');
})
test('if the parameter is divisible by 3 is not by 5 return fizz', () => {
    expect(myFizzBuzz(9)).toBe('fizz');
})
test('if the parameter is divisible by 5 and is not by 3 return buzz', () => {
    expect(myFizzBuzz(20)).toBe('buzz');
})
test('if the parameter is a number and it is not divisible neither by 3 nor by 5 return the number itself', () => {
    expect(myFizzBuzz(7)).toBe(7);
})