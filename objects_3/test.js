const { prob1, prob2, prob3, prob4, prob5, prob6 } = require('./problems');

const car = {
    color: 'green',
    'all wheel drive': false,
    year: 1989,
    make: 'Honda',
    radio: {
        am: true,
        fm: true,
        xm: false
    },
    maxSpeed: 75,
    seats: 5,
    passengers: ['Ron', 'Tracy'],
    currentSpeed: 30
};

const keyArr = ['make', 'year', 'model'];
const valueArr = ['Honda', 1989, 'CR-V'];

test('prob 1', () => {
    expect(prob1('bestIceCreamFlavor', 'coffee').bestIceCreamFlavor).toBe('coffee');
});

test('prob 2', () => {
    const objInput = {...car};
    expect(prob2(objInput, [...valueArr].reverse()).model).toBe('CR-V');
});

test('prob 3', () => {
    expect(prob3(keyArr, valueArr).model).toBe('CR-V');
});

test('prob 4', () => {
    const output = prob4(keyArr, valueArr);

    expect(Object.keys(output).length).toBe(3);
    expect(output.make).toBe('Honda');
    expect(output.model).toBe('CR-V');
});

test('prob 5a', () => {
    const output = prob5([...keyArr, 'color'], valueArr);

    expect(Object.keys(output).length).toBe(4);
    expect(output.make).toBe('Honda');
    expect(output.color).toBe(null);
});

test('prob 5b', () => {
    const output = prob5(keyArr, [...valueArr, 'green']);

    expect(Object.keys(output).length).toBe(3);
    expect(output.make).toBe('Honda');
});

test('prob 6', () => {
    const output = prob6(keyArr, [...valueArr].reverse());

    expect(Object.keys(output).length).toBe(3);
    expect(output.make).toBe('Honda');
    expect(output.model).toBe('CR-V'); 
});