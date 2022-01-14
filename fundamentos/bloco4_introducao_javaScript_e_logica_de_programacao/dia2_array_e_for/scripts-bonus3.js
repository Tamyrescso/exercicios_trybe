let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let novoArray = [];
for (let index = 1; index < numbers.length; index += 1) {
    for (let index2 = 0; index2 < numbers.length; index2 += 1)
     if (index2 === (index-1)) {
        novoArray.push(numbers[index2]*numbers[index])
    }
}
novoArray.push(numbers[numbers.length-1]*2);
console.log(novoArray);