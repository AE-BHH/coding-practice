// 1. Return a new object with two key value pairs, called 'allKeys' and 'allValues'.
// allKeys should contain an array of all the key names in obj
// allValue should contain an array of all the values in obj
const prob1 = (obj) => {
    return {
        allKeys: Object.keys(obj),
        allValues: Object.values(obj),
    }
}

// 2. Traverse through arr, checking if each element is a key on obj
// If any elements in arr are not keys in obj, filter them out of arr
// Return arr
const prob2 = (arr, obj) => {
    return arr.filter(el => {
        return obj.hasOwnProperty(el);
    });
}

// 3. Return a new object containg all the key value pairs from obj1 and obj2
// If any keys betyween the objects are the same, use the higher of the two values associated with the same keys
const prob3 = (obj1, obj2) => {
    return Object.keys(obj1).reduce((prev, curr) => {
        if (prev.hasOwnProperty(curr)) {
            prev[curr] = Math.max(prev[curr], obj1[curr]);
        } else {
            prev[curr] = obj1[curr];
        }
        return prev;
    }, {...obj2});
}

// 4. Adjust arr by moving all the elements forward by one index.
// For example, the value at index 0 should now be at index 1, value at index 1 should be at index 2
// The last value should now be the first value
// Return arr
const prob4 = (arr) => {
    let firstValue = arr[arr.length -1];
    arr.pop();
    arr.unshift(firstValue);
    return arr;
}

// 5. Adjust arr by moving all the elements forward. The number of indexes they should move forward will be determined by the 'move' parameter
// For example, if the move parameter is 3, the value at index 0 should now be at index 3, value at index 1 should be at index 4
// The last value should now be the thrid value
// Return arr
const prob5 = (arr, move) => {
    for (let i = 0; i < move; i++) {
        let tempValue = arr[arr.length - 1];
        arr.pop();
        arr.unshift(tempValue);
    }
    return arr;
}

// 6. Adjust arr by moving the first element of each subArray to the first index in the next subArray
// The first element in the first subArray should become the first element in the second subArray
// The first element in the second subArray should become the first element in the third subArray
// The first element in the last subArray should become the first element in the first subArray
// Return arr
const prob6 = (arr) => {
    for (let i = arr.length - 1; i >= 1; i--) {
        let rightVal = arr[i][0];
        arr[i][0] = arr[i - 1][0];
        arr[i - 1][0] = rightVal;
    }
    return arr;
}


module.exports = {
    prob1,
    prob2,
    prob3,
    prob4,
    prob5,
    prob6
}



