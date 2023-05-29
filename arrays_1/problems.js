// 1. Reverse the arr and return the result
const prob1 = (arr) => {
    return arr.reverse();
}

// 2. Filter out all mnumbers from the array which are greater than 10. Keep any strings. Return the result
const prob2 = (arr) => {
    return arr.filter(el => {
        return typeof(el) === 'string' || el <= 10;
    });
}

// 3. Filter out all elements from the subarrays of arr whose length is longer than 9 or shorter than  3. 
// Keep the subarray structure - just remove elements from subarrays where necessary
const prob3 = (arr) => {
    return arr.map(subArr => {
        return subArr.filter(el => {
            return el.length >= 3 && el.length <= 9
        });
    });
}

// 4. Filter out any subarray from arr that has at one least element whose length is longer than 9 or shorter than  3.
// Unlike #3, here you are changing the subarray structure.
const prob4 = (arr) => {
    return arr.filter(subArr => {
        return subArr.reduce((prev, curr) => {
            if (curr.length < 3 || curr.length > 9) {
                prev = false;
            }
            return prev;
        }, true);
    });
}

// 5. Traverse arr. Each subarray is comprised of numbers. Find the sum and max of each  subarray.
// Replace the max number in each subarry with the sum.
// Keep everything else the same
// Return the result
const prob5 = (arr) => {
    return arr.map(subArry => {
        let maxIndex = 0;
        let sum = 0;
        subArry.forEach((num, i) => {
            sum += num;
            if (subArry[maxIndex] < num) {
                maxIndex = i;
            }
        });
        subArry[maxIndex] = sum;
        return subArry;
    })
}

// 6. Traverse arr. Every element will be a number. Add each number to a new array the amount of times of the number.
// For example, if the number is 5, add 5 to the new array five times.
// If a number already exists in the new array, do not add it
// Return the new array
const prob6 = (arr) => {
    return arr.reduce((prev, curr) => {
        if (prev.indexOf(curr) == -1) {
            for (let i = 0; i < curr; i++) {
                prev.push(curr);
            }
        }
        return prev;
    }, [])
}


module.exports = {
    prob1,
    prob2,
    prob3,
    prob4,
    prob5,
    prob6
}



