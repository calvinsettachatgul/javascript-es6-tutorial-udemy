/*

plucking values

using map, create a new array that contains "height" property of each object. Assign this new array to the variable 'heights'. Don't forget to use the 'return keyworkd in the function!



*/

var images = [	
	{height: '34px', width: '39px'},
	{height: '54px', width: '19px'},
	{height: '83px', width: '75px'},
]

var heights;
/*
heights = images.map(function(image){
	return image.height;
});
*/

heights = images.map( image => image.height );

console.log(heights);



