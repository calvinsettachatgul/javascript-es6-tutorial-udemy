// doubled value into a new array


var numbers = [1, 2, 3]

var doubledNumbers = [];


for ( var i = 0; i < numbers.length; i++){
    doubledNumbers.push(numbers[i] * 2);
}

console.log(doubledNumbers);

// ryme or reason for changing

var doubled = numbers.map(function(number){
    return number * 2;
})


console.log(doubled);


// plucking a particular property from an array

// more practical uses of map in the next session

// build on a day to day basics


// rendering lists of data


// use case for the mapHelper

// transform some data to render it the data to the screen


