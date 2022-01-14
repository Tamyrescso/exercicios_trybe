let number = 53;
let divisores = null;

for (let index = 1; index <= number; index = index + 1) {
    if (number%index === 0) {
        divisores = divisores + 1;
    }
}
if (divisores === 2) {
    console.log(number + " é um número primo");
} else {
    console.log(number + " não é um número primo");
}