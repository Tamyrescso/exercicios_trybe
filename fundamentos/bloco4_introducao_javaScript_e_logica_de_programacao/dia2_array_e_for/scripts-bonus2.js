let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (let index = 1; index < numbers.length; index += 1){
    for (let index2 = 0; index2 < numbers.length; index2 +=1) {
        if (numbers[index] < numbers[index2]) {
            let position = numbers[index];
            numbers[index] = numbers[index2];
            numbers[index2] = position;
        }
    }
}
let decrescente = [];
for (let i = numbers.length-1; i >= 0; i -= 1) {
    decrescente.push(numbers[i]);
}
console.log(decrescente);