function handlePosts(){
	var posts = [
		{ id: 23, title: 'Daily JS News ' },
		{ id: 52, title: 'Code Refactor City' },
		{ id: 105t, title: 'The Brightest Ruby' },
		];
	for (var i = 0 ; i < posts.length; i++){
		savePost(posts[i]);
	}
}

// frefactor the code to instead use the forEach helper

posts.forEach( savePost);
