
var products = [
	{name: 'cucumber', type: 'vegetable'},
	{name: 'banana', type: 'fruit'},
	{name: 'celery', type: 'vegetable'},
	{name: 'orange', type: 'fruit'},
]


// start with a for looop

var filteredProducts = [];

for (var i = 0 ; i < products.length ; i++){
	//add to filtered products
	if (products[i].type === 'fruit'){

		filteredProducts.push(products[i]);
	}
}


console.log(filteredProducts);


// just want to produce a subset a new array 
// rather than destroying a previous array


// filter


// works how map works

// returning a truthy or falsey value


products.filter(function(product){
	return product.type === 'fruit';
});

var products = [
	{name: 'cucumber', type: 'vegetable', quantity: 0, price: 1},
	{name: 'banana', type: 'fruit',quantity: 10, price: 15},
	{name: 'celery', type: 'vegetable', quantity: 30, price: 13},
	{name: 'orange', type: 'fruit', quantity: 3, price: 5},
]



products.filter(function(product){		
	return product.type === 'vegetable' && 
	product.quantity > 0 && 
	product.price < 10;
})



// using filter in real life


// 2 posts and comments associated with it
// each post has multiple comments


// return a list with all the comments associated with that post


var post = { id: 4, title: 'New Post'};

var comments = [
	{postId: 4, contents: 'awesome post'},
	{postId: 3, contents: 'it was ok'},
	{postId: 4, contents: 'neat'},

]


function commentsForPost(post, comments){
	return comments.filter(function(comment){
		return comment.postId === post.id;
	});
};

console.log(commentsForPost(post, comments));
