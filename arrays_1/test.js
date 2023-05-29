const { prob1, prob2, prob3, prob4, prob5, prob6 } = require('./problems');

test('prob 1', () => {
    const input = [5, 8, 10, 12, 0, -8];
    expect(prob1(input)).toEqual(input.reverse());
})

test('prob 2', () => {
    const input = [5, 8, 'hi', 10, 12,'keep me', 0, -8, 40];
    const output = [5, 8, 'hi', 10,'keep me', 0, -8];
    expect(prob2(input)).toEqual(output);
})

test('prob 3', () => {
    const input = [
        ['a', 'hello', 'thissentanceislong', '', 'bringit'],
        ['fire'],
        ['I', 'ilikeit'],
        ['hi','it', 'is', 'hot']
    ];
    const output = [
        ['hello', 'bringit'],
        ['fire'],
        ['ilikeit'],
        ['hot']
    ]
    expect(prob3(input)).toEqual(output);
})

test('prob 4', () => {
    const input = [
        ['a', 'hello', 'long', '', 'bringit'],
        ['fire'],
        ['ilikeit', 'butitsreallytoohot'],
        ['hi','it', 'is', 'hot']
    ];
    const output = [
        ['fire']
    ]
    expect(prob4(input)).toEqual(output);
})

test('prob 5', () => {
    const input = [
        [1, 4, 10, 50, -3], 
        [3],
        [1, 29],
        [8, 9, 10, 11]
    ];
    const output = [
        [1, 4, 10, 62, -3], 
        [3],
        [1, 30],
        [8, 9, 10, 38]
    ];
    expect(prob5(input)).toEqual(output);
})

test('prob 6', () => {
    const input = [1, 4, 6, 2, 2, 2, 3];
    const output = [1, 4, 4, 4, 4, 6, 6, 6, 6, 6, 6, 2, 2, 3, 3, 3];
    expect(prob6(input)).toEqual(output);
})