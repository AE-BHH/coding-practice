// 1. Obj represents a store. The catalog parameter is an array of items you are considering adding to your inventory (represented by the 'inventory' key).
// You're store is mid-priced, so add all items in the catalog array with a value greater than 10 and less then or equal to 50 to the inventory array in obj
// Return obj
const prob1 = (obj, catalog) => {
    
};

// 2. Obj represents a store. The 'inventory' key has an array of item prices in your store.
// Add a function as a value to the 'setSalePrices' key that will set prices for a store-wide sale
// The function should have a paramter that takes a number paramter representing the sale discount - mabe 0.05, 0.10, 0.20 or similar
// Create an array based off the inventory array where you apply the discount to each price
// You have a key called 'salePrices'. Set the value of 'salePrices' to the array with discounted prices.
// Return obj
const prob2 = (obj) => {

};

// 3. Obj represents a store. The 'salesData' object contains an array of objects.
// Each object in salesData has this structure: {category, price, volume}
// You want the total revenue for shirts and jackets
// Iterate through the 'salesData' array checking if the category is 'shirts' or 'jackets'
// If the correct category is identified, add price * volume to the total revenue
// Return total revenue
const prob3 = (obj) => {
    
};


// 4. Obj represents a store. You want to be able to record sales as they occur
// Add a key called 'makeSale' which will have function that takes two parameters, 'catergory' and 'quantity'
// When the makeSale function is invoked you want to add the new quantity to 'salesData'
// 'salesData' has an array of objects with this stucture: {category, price, volume}
// You will want the funcion to iterate through salesData. When the category from your parameter matches the category in the object, add the quantity from your parameters to the 'volume' in the object
// return obj
const prob4 = (obj) => {
   
};

module.exports = {
    prob1,
    prob2,
    prob3,
    prob4
};



