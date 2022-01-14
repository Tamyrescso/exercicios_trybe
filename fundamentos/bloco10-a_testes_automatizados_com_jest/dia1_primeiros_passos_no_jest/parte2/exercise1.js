function encode(stringToEncode) {
    let arrayToEncode = stringToEncode.split([,]);
    for (let index = 0; index < arrayToEncode.length; index += 1) {
    if (arrayToEncode[index] === "a") {
    arrayToEncode[index] = "1";
    } else if (arrayToEncode[index] === "e") {
    arrayToEncode[index] = "2";
    } else if (arrayToEncode[index] === "i") {
    arrayToEncode[index] = "3";
    } else if (arrayToEncode[index] === "o") {
    arrayToEncode[index] = "4";
    } else if (arrayToEncode[index] === "u") {
    arrayToEncode[index] = "5";
    }
}
let stringEncoded = arrayToEncode.join("");
return stringEncoded;
}


function decode(stringToDecode) {
let arrayToDecode = stringToDecode.split([,]);
for (let index = 0; index < arrayToDecode.length; index += 1) {
    if (arrayToDecode[index] === "1") {
    arrayToDecode[index] = "a";
    } else if (arrayToDecode[index] === "2") {
    arrayToDecode[index] = "e";
    } else if (arrayToDecode[index] === "3") {
    arrayToDecode[index] = "i";
    } else if (arrayToDecode[index] === "4") {
    arrayToDecode[index] = "o";
    } else if (arrayToDecode[index] === "5") {
    arrayToDecode[index] = "u";
    }
}
let stringDecoded = arrayToDecode.join("");
return stringDecoded;
}

module.exports = { encode, decode }