const { prob1, prob2, prob3, prob4, prob5, prob6 } = require('./problems');

const car = {
    color: 'green',
    'all wheel drive': false,
    year: 1989,
    make: 'Honda',
    specialFeatures: ['radio', 'A/C', 'electric locking'],
    maxSpeed: 75
}

test('prob 1', () => {
    const input = {...car};
    expect(prob1(input)).toBe('green');
})

test('prob 2', () => {
    const input = {...car};
    expect(prob2(input)).toBe(false);
})

test('prob 3', () => {
    const input = {...car};
    expect(prob3(input).color).toBe('pink');
})

test('prob 4', () => {
    const input = {...car};
    expect(prob4(input)['all wheel drive']).toBe(true);
})

test('prob 5', () => {
    const input = {...car};
    expect(prob5(input, 5).seats).toBe(5);
})

test('prob 6', () => {
    const input = {...car};

    expect(prob6(input, 'model', 'CR-V').model).toBe('CR-V');
})