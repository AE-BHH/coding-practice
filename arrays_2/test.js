const { prob1, prob2, prob3, prob4, prob5, prob6 } = require('./problems');

test('prob 1', () => {
    const input = {
        color: 'green',
        'all wheel drive': false,
        year: 1989,
        make: 'Honda',
    };
    const output = {
        allKeys: ['color', 'all wheel drive', 'year', 'make'],
        allValues: ['green', false, 1989, 'Honda']
    };
    expect(prob1(input)).toEqual(output);
});

test('prob 2', () => {
    const obj = {
        color: 'green',
        'all wheel drive': false,
        year: 1989,
        make: 'Honda',
    };
    const arr =  ['seats', 'color', 'all wheel drive', 'maxSpeed', 'make'];
    const output = ['color', 'all wheel drive', 'make'];
    expect(prob2(arr, obj)).toEqual(output);
});

test('prob 3', () => {
    const obj1 = {
        maxSpeed: 60,
        year: 2000,
        seats: 3,
    };
    const obj2 = {
        year: 1995,
        seats: 5,
        gears: 5
    };
    const output = {
        maxSpeed: 60,
        year: 2000,
        seats: 5,
        gears: 5
    };
    expect(prob3(obj1, obj2)).toEqual(output);
});

test('prob 4', () => {
    let input = ['dog', 'cat', 'cow', 'sheep', 'zebra'];
    let output =   ['zebra', 'dog', 'cat', 'cow', 'sheep'];
    expect(prob4(input)).toEqual(output);
});

test('prob 5', () => {
    let input = ['dog', 'cat', 'cow', 'sheep', 'zebra'];
    let move = 2;
    let output =   ['sheep', 'zebra', 'dog', 'cat', 'cow'];
    expect(prob5(input, move)).toEqual(output);
});

test('prob 6', () => {
    let input = [
        ['dog', 'cat'],
        ['cow', 'sheep'],
        ['zebra', 'elephant']
    ];
    let output = [
        ['zebra', 'cat'],
        ['dog', 'sheep'],
        ['cow', 'elephant']
    ];
    expect(prob6(input)).toEqual(output);
});