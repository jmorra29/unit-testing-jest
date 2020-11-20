const { TestScheduler } = require('jest')
const ArrayClone = require('./ArrayClone')

test('properly clones array', () =>{
    const array = [1, 2, 3]
    expect(ArrayClone(array)).toStrictEqual(array)
})