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

test('prob 1', () => {
    const input = {...car};
    expect(prob1(input).openSeats).toBe(3);
});

test('prob 2', () => {
    const input = {...car};
    expect(prob2(input).openSeats()).toBe(3);
});

test('prob 3', () => {
    const input = {...car};
    expect(prob3(input).currentGear()).toBe(3);
});

test('prob 4', () => {
    const input = {...car};
    expect(prob4(input).radio.xm).toBe(true);
});

test('prob 5', () => {
    const input = {...car};
    const upgradeInput = {
        brighterLights: true,
        extraSpeed: 5
    };

    output = prob5(input, upgradeInput);
    expect(output.brighterLights).toBe(true);
    expect(output.maxSpeed).toBe(80);
});

test('prob 6a', () => {
    const input1 = {...car};
    const input2 = {model: 'CR-V'}; 

    const output = prob6(input1, input2);
    expect(output.model).toBe('CR-V');
    expect(output.make).toBe('Honda');
});

test('prob 6b', () => {
    const input1 = {...car};
    const input2 = {lights: 'off'};
    expect(prob6(input1, input2).make).toBe('Honda');
});