"use strict";

// =============== map operator ===============

Array.prototype.myMap = function(callback) {
  let newArray = [];
  for (var i = 0; i < this.length; i++) {
    newArray.push(callback(this[i]));
  }
  return newArray;
};

// map example
const array1 = [1, 2, 3, 4, 5];
const newArray1 = array1.myMap((a) => {return x * x});
// newArray1 = [1, 4, 9, 16, 25]


// =============== filter operator ===============
Array.prototype.myFilter = function(callback, context) {
  let newArray = [];
  for (var i = 0; i < this.length; i++) {
    if (callback.call(context, this[i])) {
      newArray.push(this[i]);
    }
  }
  return newArray;
};

// filter example
const cars = [
    {
        "name": "truck",
        "size": "large",
        "weight": 10
    },
    {
        "name": "suv",
        "size": "large",
        "weight": 12
    },
    {
        "name": "sedan",
        "size": "medium",
        "weight": 8
    },
    {
        "name": "crossover",
        "size": "medium",
        "weight": 9
    },
    {
        "name": "coupe",
        "size": "small",
        "weight": 5
    },
    {
        "name": "hatchback",
        "size": "small",
        "weight": 6
    }
]

const small_cars = cars.myFilter((c) => {return c.size === "small";});

// =============== reduce operator ===============
Array.prototype.myReduce = function(callback, start) {
  let total = (start === undefined) ? undefined : start;
  for (var i = 0; i < this.length; i++) {
    if (total !== undefined) {
      total = callback.call(undefined, total, this[i]);
    } else {
      total = this[i];
    }
  }
  return total;
}

const y = [1, 2, 3, 4, 5];
const reducedY = y.myReduce((a, b) => {return a + b}, 0)
// reducedY = 15
