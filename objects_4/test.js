const { prob1, prob2, prob3, prob4 } = require('./problems');

const salesData = [
    {category: 'shirts', volume: 10, price: 29},
    {category: 'pants', volume: 5, price: 39},
    {category: 'socks', volume: 42, price: 11},
    {category: 'jackets', volume: 7, price: 45}, 
    {category: 'hats', volume: 28, price: 24},
]

const catalog = [20, 29, 10, 9, 109, 60, 50, 49, 34];

const store = {
    salesData,
    inventory: []
}


test('prob 1', () => {
    expect(prob1(store, catalog).inventory).toEqual([20, 29, 50, 49, 34]);
});

test('prob 2', () => {
    const inventoryInput = [20, 29, 50, 49, 34];
    const discount = 0.10;
    const inventoryOutput = [...inventoryInput].map(el => {
        return el * (1- discount);
    });
    const newStore = {...store, inventory: inventoryInput};
    prob2(newStore).setSalePrices(discount);
    expect(newStore.salePrices).toEqual(inventoryOutput);
});

test('prob 3', () => {
    expect(prob3(store)).toBe(605);
});

test('prob 4', () => {
    const newStore = {...store};
    prob4(newStore).makeSale('socks', 3);
    prob4(newStore).makeSale('hats', 1);
    
    const socksOutput = {...newStore}.salesData.reduce((prev, curr) => {
        if (curr.category === 'socks') {
            return curr.volume;
        }
        return prev;
    });

    const hatsOutput = {...newStore}.salesData.reduce((prev, curr) => {
        if (curr.category === 'hats') {
            return curr.volume;
        }
        return prev;
    });

    expect(socksOutput).toBe(45);
    expect(hatsOutput).toBe(29);
});