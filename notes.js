// Array helper methods

/*
forEach
map
filter
find 
every
some 
reduce

forEach helper
==============================
==============================
provide an iterator function
element is passed as an argument


practical use case of the forEach helper

swiss army knife of helpers




*/
var emails = [email1, email2, email3]
emails.forEach(function(email){
	deleteEamil(email);
}

/*

use the forEach instead of 
for loop

*/


/*
Map Helper
==============================
==============================
double the value of the array

to mutate or not to mutate?
whereever possible want to avoid mutating


how would this work with map helper?
*/
var numbers = [1,2,3];

var doubledNumbers = [];

for(var i = 0; i < numbers.length; i++){
	doubledNumbers.push(numbers[i] * 2);
}

console.log(doubledNumbers);

var doubled = numbers.map(function(number){
	return number * 2;
});

// each number is being passed into the anon funtion

// whatever is returned?

// take a look at a diagram


/*
using the map function to create a new array

we are producing a new one instead

return keyword is critical
else you will return undefined


place a return keyword inside the mapping function

*/


/* more complex map
some list of data 




*/


var cars = [
	{model: 'Buick', price: 'cheap'},
	{model: 'Camaro', price: 'expensive'},
]


var prices = cars.map(function(car){
	return car.price;
});


console.log(prices);


// more practical uses of map?


// build on day to day basis

// rendering a list of data

// all just rendering list of data



