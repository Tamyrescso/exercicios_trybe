function myRemove(arr, item) {
    let newArr = [];
    for (let index = 0; index < arr.length; index += 1) {
        if (item !== arr[index]) {
        newArr.push(arr[index]);
        }
    }
return newArr;
}

test('if it is a function', () => {
    expect(myRemove).toBeDefined();
})
describe('if the return of the function is an array without the item', () => {
    it('if return the array expected removing de middle number', () => {
        expect(myRemove([1,3,5], 3)).toEqual([1,5]);
    })
    it('if return the array expected removing the last number', () => {
        expect(myRemove([1,2,3,4,5], 5)).toEqual([1,2,3,4]);
    })
    it('if return the array expected trying to remove a number which does not exist in the array', () => {
        expect(myRemove([1,2,3,4,5], 7)).toEqual([1,2,3,4,5]);
    })
})
test('if the array on the parameter remains the same', () => {
    const myArr = [2,4,7,9]
    myRemove(myArr, 9);
    expect(myArr).toEqual([2,4,7,9]);
})