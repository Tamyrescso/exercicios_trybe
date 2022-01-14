function myRemoveWithoutCopy(arr, item) {
    for (let index = 0, len = arr.length; index < len; index += 1) {
        if (arr[index] === item) {
        arr.splice(index, 1);
        index -= 1;
        len -= 1;
        }
    }

return arr;
}

test('if it is a function', () => {
    expect(myRemoveWithoutCopy).toBeDefined;
})
describe('if the return of the function is an array without the item', () => {
    it('if return the array expected removing de middle number', () => {
        expect(myRemoveWithoutCopy([1,3,5], 3)).toEqual([1,5]);
    })
    it('if return the array expected removing the last number', () => {
        expect(myRemoveWithoutCopy([1,2,3,4,5], 5)).toEqual([1,2,3,4]);
    })
    it('if return the array expected trying to remove a number which does not exist in the array', () => {
        expect(myRemoveWithoutCopy([1,2,3,4,5], 7)).toEqual([1,2,3,4,5]);
    })
})
test('if the array on the parameter does not remain the same', () => {
    const myArr = [2,4,7,9]
    myRemoveWithoutCopy(myArr, 9);
    expect(myArr).not.toEqual([2,4,7,9]);
})