function techList(tech, name) {
    let techLearn = [];
    
    if (tech.length < 1) {
        return 'Vazio!'
    } else {
        let techOrder = tech.sort();
        for (let index = 0; index < techOrder.length;  index += 1) {
            techLearn.push({
            tech: techOrder[index],
            name: name
            })
        }
        }
    return techLearn;
}

module.exports = techList;