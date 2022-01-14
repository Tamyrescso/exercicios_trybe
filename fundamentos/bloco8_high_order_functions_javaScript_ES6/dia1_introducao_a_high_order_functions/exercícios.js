//Exercício 1
const newEmployees = (callback) => {
const employees = {
    id1: callback('Pedro Guerra'),
    id2: callback('Luiza Drumond'),
    id3: callback('Carla Paiva'),
    }
    return employees;
};

const worker = (person) => {
    let arrPerson = person.split(' ');
    return {Nome: person, Email: `${arrPerson.join('').toLowerCase()}@trybe.com`}
}

console.log(newEmployees(worker));

//Exercício 2
const result = (play, callback) => (callback(play) === true)? "Parabéns, você ganhou!" : "Tente novamente";

const numberGenerator = (choiceNumber) => {
    const random = Math.ceil(Math.random()*5);
    console.log(random, choiceNumber);
    if (random === choiceNumber) {
        return true;
    } else {
        return false;
    }

}

console.log(result(3, numberGenerator));

//Exercício 3
const showGrade = (rightAnswers, studentAnswers, callback) => callback(rightAnswers, studentAnswers);

const checkAnswers = (right, student) => {
    let grade = 0;
    for (let index = 0; index < right.length; index += 1) {
        if (right[index] === student[index]) {
            grade += 1;
        } else if (student[index] === 'N.A') {
            grade = grade;
        } else {
            grade -= 0.5;
        }
    }
    return grade;
}

console.log(showGrade(['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'], ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'], checkAnswers));