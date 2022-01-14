let arrayNum = [];

for (let number = 1; number <= 25; number += 1) {
    arrayNum.push(number);
}
for (let number of arrayNum) {
    console.log(number/2);
}

