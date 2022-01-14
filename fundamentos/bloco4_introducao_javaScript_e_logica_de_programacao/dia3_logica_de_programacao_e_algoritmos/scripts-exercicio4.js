let n = 5;
let asterisk = "*";

let middle = (n+1)/2;
let middleLeft = middle;
let middleRight = middle;

for (let indexLine = 1; indexLine < n; indexLine += 1) {
    let inputReceiver = "";
    for (let indexColumn = 0; indexColumn <= n; indexColumn += 1) {
        if (indexColumn > middleLeft && indexColumn < middleRight){
            inputReceiver += asterisk;
        } else {
            inputReceiver += " ";
        }

    }
    console.log(inputReceiver);
    middleLeft -= 1;
    middleRight += 1;

}