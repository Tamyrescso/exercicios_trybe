let salarioBruto = 3000;
let salarioDepoisIR = null;


if (salarioBruto <= 1556.94) {
    salarioDepoisIR = salarioBruto-(salarioBruto*0.08);
} else if (salarioBruto <= 2594.92) {
    salarioDepoisIR= salarioBruto-(salarioBruto *0.09);
} else if (salarioBruto <= 5189.82) {
    salarioDepoisIR= salarioBruto-(salarioBruto *0.11);
} else {
    salarioDepoisIR= salarioBruto-570.88;
}

if (salarioDepoisIR <= 1903.98) {
    console.log(salarioDepoisIR);
} else if (salarioDepoisIR <= 2826.65) {
    let salarioLiquido = salarioDepoisIR-((salarioDepoisIR*0.075)-142.80);
    console.log(salarioLiquido);
} else if (salarioDepoisIR <= 3751.05) {
    let salarioLiquido = salarioDepoisIR-((salarioDepoisIR*0.15)-354.80);
    console.log(salarioLiquido);
} else if (salarioDepoisIR <= 4664.68) {
    let salarioLiquido = salarioDepoisIR-((salarioDepoisIR*0.225)-636.13);
    console.log(salarioLiquido);
} else {
    let salarioLiquido = salarioDepoisIR-((salarioDepoisIR*0.275)-869.36);
    console.log(salarioLiquido);
}

