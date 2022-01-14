let n = 5;
let asterisk = "*";
let controller = n;

for (let indexLine = 1; indexLine <= n; indexLine += 1) {
    let inputReceiver = "";
    for (let indexColumn = 1; indexColumn <= n; indexColumn += 1) {
        if (indexColumn >= controller) {
           inputReceiver += asterisk;
        } else {
            inputReceiver += " ";
        }
    }
    console.log(inputReceiver);
    controller -= 1;
    
}