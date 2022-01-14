function salarioLiquido (salarioBruto) {
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
        return salarioDepoisIR;
    } else if (salarioDepoisIR <= 2826.65) {
        return salarioDepoisIR-((salarioDepoisIR*0.075)-142.80);
    } else if (salarioDepoisIR <= 3751.05) {
        return salarioDepoisIR-((salarioDepoisIR*0.15)-354.80);
    } else if (salarioDepoisIR <= 4664.68) {
    return salarioDepoisIR-((salarioDepoisIR*0.225)-636.13);
    } else {
    return salarioDepoisIR-((salarioDepoisIR*0.275)-869.36);
    }
}
console.log(salarioLiquido(3000));
