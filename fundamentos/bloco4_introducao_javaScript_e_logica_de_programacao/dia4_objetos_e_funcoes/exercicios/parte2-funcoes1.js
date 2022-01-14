//Exercício 1
function verificaPalindrome(palavra) {
let arrayPalavra = palavra.split([,]);
let arrayInverso = arrayPalavra.reverse();
let palavraInversa = arrayInverso.join("");
    if (palavraInversa === palavra) {
        return true;
    } else {
        return false;
    }

}
// Exercício 2
function maxValue (arrayInteger) {
    let max = arrayInteger[0];
    for (let number of arrayInteger) {
        if (number > max) {
            max = number;
        }

    }
    return arrayInteger.indexOf(max);
}
//Exercício 3
function minValue (arrayInteger) {
    let min = arrayInteger[0];
    for (let number of arrayInteger) {
        if (number < min) {
            min = number;
        }
    }
    return arrayInteger.indexOf(min);
}
//Exercício 4
function names (arrayNames) {
    let bigName = arrayNames[0];
    for (let name of arrayNames) {
        if (name.length > bigName.length) {
            bigName = name;
        }
    }
    return bigName;
}
//Exercício 5
function repetition (arrayNumbers) {
    let maxRepeat = 0;
    let numberRepeat = null;
    for (let number of arrayNumbers) {
        let qntRepeat = 0;
        for (let number1 of arrayNumbers) {
            if (number === number1) {
                qntRepeat += 1;         

            }
        }
        if (maxRepeat < qntRepeat) {
            maxRepeat = qntRepeat;
            numberRepeat = number;
            
        }
        
    }
    return numberRepeat;
}
//Exercício 6
function sum (max) {
    let result = 0;
    for (let count = 1; count <= max; count += 1) {
        result += count;
    }
    return result;
}
//Exercício 7
function verifyWordEnd (word,ending) {
    if (ending.length > word.length) {
        return "ERRO: wrong input"
    } else if (word.endsWith(ending)) {
        return true;
    } else {
        return false;
    }
}
