const mage = {
healthPoints: 130,
intelligence: 45,
mana: 125,
damage: undefined,
};

const warrior = {
healthPoints: 200,
strength: 30,
weaponDmg: 2,
damage: undefined,
};

const dragon = {
healthPoints: 350,
strength: 50,
damage: undefined,
};

const battleMembers = { mage, warrior, dragon };

//Parte I
//Exercício 1
const damageDragon = () => {
    let randomDamage = Math.ceil((Math.random() * (dragon.strength - 15)) + 15);
    return randomDamage;
}

//Exercício 2
const damageWarrior = () => {
    let randomDamage = Math.ceil((Math.random() * ((warrior.strength * warrior.weaponDmg) - warrior.strength)) + warrior.strength);
    return randomDamage;
}

//Exercício 3
const damageManaMage = () => {
    const damageMana = {
        damage: 'Não possui mana suficiente',
        manaSpent: 0,
    };
    if (mage.mana > 15) {
        const randomDamage = Math.ceil((Math.random() * ((mage.intelligence * 2) - mage.intelligence)) + mage.intelligence);
        damageMana.damage = randomDamage;
        damageMana.manaSpent = 15;
        return damageMana;
    }
    return damageMana;
}

//Parte II
//Exercício 1
const gameActions = {
    // Crie as HOFs neste objeto.
    warriorTurn: (callback) => {
        warrior.damage = callback();
        dragon.healthPoints -= callback();
    },
    mageTurn: (callback) => {
        mage.damage = callback().damage;
        mage.mana -= callback().manaSpent;
        dragon.healthPoints -= callback().damage;
    },
    dragonTurn: (callback) => {
        dragon.damage = callback();
        mage.healthPoints -= callback();
        warrior.healthPoints -= callback();
    },
    finalResult: () => {
        return battleMembers;
    }
};

gameActions.warriorTurn(damageWarrior);
gameActions.dragonTurn(damageDragon);
gameActions.mageTurn(damageManaMage);

gameActions.warriorTurn(damageWarrior);
gameActions.dragonTurn(damageDragon);
gameActions.mageTurn(damageManaMage);

gameActions.warriorTurn(damageWarrior);
gameActions.dragonTurn(damageDragon);
gameActions.mageTurn(damageManaMage);


console.log(gameActions.finalResult());