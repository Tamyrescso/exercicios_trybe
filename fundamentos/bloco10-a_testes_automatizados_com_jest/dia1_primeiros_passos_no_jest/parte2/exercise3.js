function hydrate(beveragesQnt) {
    let regex = /[0-9]/g;
    let stringsOfNumbers = beveragesQnt.match(regex);
    let justNumbers = [];
    let sum = 0;
    for (let number of stringsOfNumbers) {
        let integer = parseInt(number);
        justNumbers.push(integer);
    }
    for (let number2 of justNumbers) {
        sum += number2;
    }
    if (sum === 1) {
    return sum + " copo de água";
    } else {
    return sum + " copos de água";
    }
}

module.exports = hydrate;