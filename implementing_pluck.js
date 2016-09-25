/*

accept an array and a string representing a prop name and return an array containing that property for each object

example:

var plants = [
	{ color:'red'},
	{color: 'blue'},
	{color: 'yellow'},
	]	


pluck(plants, 'color') 

>> ['red', 'yellow' , 'blue'];


*/

function pluck(array, property){
	var propertyValues = [];

	propertyValues = array.map( array_item => array_item.color);

	return propertyValues;
		
}



var plants = [
	{ color:'red'},
	{color: 'blue'},
	{color: 'yellow'},
	];

console.log( pluck( plants, 'color'));
