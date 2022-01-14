const lesson1 = {
materia: 'Matemática',
numeroEstudantes: 20,
professor: 'Maria Clara',
turno: 'manhã',
};

const lesson2 = {
materia: 'História',
numeroEstudantes: 20,
professor: 'Carlos',
};

const lesson3 = {
materia: 'Matemática',
numeroEstudantes: 10,
professor: 'Maria Clara',
turno: 'noite',
};

//1
const turnoManha = (objeto, chave, valor) => objeto[chave] = valor;

turnoManha(lesson2, 'turno', 'manhã');

//2
const chave = (objeto) => Object.keys(objeto);

//3
const tamanho = (objeto) => objeto.length;

//4
const valor = (objeto) => Object.values(objeto);

//5
const allLessons = Object.assign({}, {lesson1, lesson2, lesson3});

//6
const totalEstudantes = (objeto) => {
    let total = 0;
    const keys = Object.keys(objeto);
    for (index in keys) {
        total += objeto[keys[index]].numeroEstudantes;
    }
    return total;
}

totalEstudantes(allLessons);

//7
const valorIndice = (objeto, index) => Object.values(objeto)[index];

valorIndice(lesson1, 0);

//8
const existePar = (objeto, chave, valor) => {
    const entradas = Object.entries(objeto);
    for (index in entradas) {
        if (entradas[index][0] === chave && entradas[index][1] === valor) {
            return true;
        } else {
            return false;
        }
    }
}

existePar(lesson2, 'materia', 'História');

//bonus 1
const alunosNaAula = (aula) => {
    const keys = Object.keys(allLessons);
    for (index in keys) {
        if (allLessons[keys[index]].materia === aula) {
            return allLessons[keys[index]].numeroEstudantes;
        }
    }
}

alunosNaAula('Matemática');

//bonus 2
const relatorio = (pessoa) => {
    const relatório = {
        professor: pessoa,
    };
    const materias = [];
    let qntEstudantes = 0;
    const keys = Object.keys(allLessons);
    for (index in keys) {
        if (allLessons[keys[index]].professor === pessoa) {
            materias.push(allLessons[keys[index]].materia);
            qntEstudantes += allLessons[keys[index]].numeroEstudantes;
        }
    }
    relatório['aulas'] = materias;
    relatório['estudantes'] = qntEstudantes;
    return relatório;
}
relatorio('Maria Clara');