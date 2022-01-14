const obj1 = {
    title: 'My Title',
    description: 'My Description',
};

const obj2 = {
    description: 'My Description',
    title: 'My Title',
};

const obj3 = {
    title: 'My Different Title',
    description: 'My Description',
};
test('if an object is equal to another', () => {
    expect(obj1).toEqual(obj2);
})
test('if an object is different than another', () => {
    expect(obj1).not.toEqual(obj3);
})