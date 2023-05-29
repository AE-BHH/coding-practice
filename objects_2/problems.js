// 1. The obj parameter describes a car. Figure out how may passengers can be added based on the the number of seats and the current passengers.
// Add a key called openSeats. Set it's value by taking the value of seats less the number of people in the passengers array
// Return obj
const prob1 = (obj) => {
    obj.openSeats = obj.seats - obj.passengers.length;
    return obj;
}

// 2. The obj parameter describes a car. Figure out how may passengers can be added based on the the number of seats and the current passengers.
// Add a key called openSeats. The value of open seats should be a function.
// The function should return the value of seats less the number of people in the passengers array
// Return obj
const prob2 = (obj) => {
    obj.openSeats = function() {
        return this.seats - this.passengers.length;
    };
    return obj;
}

// 3. The obj parameter describes a car. Write function to set the current gear based on the value of key 'speed'
// Gear values for currentGear can be 1, 2, 3, 4, or 5. Gear 1 is for speed 0-10, gear 2 for 11 - 20, gear 3 for 21 - 30, gear 4 for 31 - 40, gear 5 is for 41 and up
// add the functioj to the object using key name 'currentGear'
// Change the speed to 24
// Return obj
const prob3 = (obj) => {
    obj.currentGear = function() {
        if (this.speed >= 0 && this.speed <= 10) {
            return 1;
        } else if (this.speed > 10 && this.speed <= 20) {
            return 2;
        } else if (this.speed > 20 && this.speed <= 30) {
            return 3;
        } else if (this.speed > 30 && this.speed <= 40) {
            return 4;
        } else if (this.speed > 40) {
            return 5;
        }
    }
    obj.speed = 24;
    return obj;
}

// 4. The obj parameter describes a car. Car has a nested object under key name is 'radio'.
// You want to upgrade your radio package. Set the value of 'xm' in the radio object to true.
// Return obj
const prob4 = (obj) => {
    obj.radio.xm = true;
    return obj;
}

// 5. The obj parameter describes a car. The upgradesObj parameter has upgrades for the car.
// upgradesObj has a key called 'brighterLights' - add the key and its value to obj
// upgradesObj has a key called 'extraSpeed' - if the value of maxSpeed in obj is less than 85, add the value of extraSpeed to maxSpeed
// return obj 
const prob5 = (obj, upgradesObj) => {
    obj.brighterLights = upgradesObj.brighterLights;
    if (obj.maxSpeed < 85) {
        obj.maxSpeed += upgradesObj.extraSpeed;
    }
    return obj;
}

// 6. There are two parameters, both objects. Merge the two into a single object and return the result.
const prob6 = (obj1, obj2) => {
    return {
        ...obj1,
        ...obj2
    };
}

module.exports = {
    prob1,
    prob2,
    prob3,
    prob4,
    prob5,
    prob6
}



