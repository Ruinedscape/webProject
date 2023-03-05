if(document.readyState !== "loading"){
	console.log("Document is ready");
	initializeCode();
} else {
	document.addEventListener("DOMContentLoaded", function(){
		console.log("Document ready after waiting!");
		initializeCode();
	})
}

function addPost(title, body) { // sends a "post" object to the server
	const post = {
		title: title,
		body: body,
		comments: []
	};
	
	fetch("http://localhost:3000/", {
		method: "post",
		headers: {
			"Content-type": "application/json"
		},
		body: JSON.stringify(post)
	});
}

function addComment(postIndex, text) { // sends a "comment" object to the server
	let comment = {
		index: postIndex.toString(),
		text: text
	};

	fetch("http://localhost:3000/comments", {
		method: "post",
		headers: {
			"Content-type": "application/json"
		},
		body: JSON.stringify(comment)
	});
}

async function displayPosts() { // requests the posts from the server and populates the homepage with them
	let url = "http://localhost:3000/posts";
	let response = await fetch(url);
	let posts = await response.json();

	const postForm = document.getElementById("postForm");
	const submitTitle = document.getElementById('title');
	const submitCode = document.getElementById('code');	

	// event listener to the post form that adds a new post to the page
	postForm.addEventListener('submit', function(event) {
		event.preventDefault();
		addPost(submitTitle.value, submitCode.value);
	});

	const container = document.getElementById('container');
	const postList = document.createElement('ul');

	for (let i = 0; i < posts.length; i++) {
		const postItem = document.createElement('li');
		const postTitle = document.createElement('h3');
		const postBody = document.createElement('p');
		const commentList = document.createElement('ul');
		const commentForm = document.createElement('form');
		const commentInput = document.createElement('input');
		const commentButton = document.createElement('button');

		postTitle.textContent = posts[i].title;
		postBody.textContent = posts[i].body;

		// event listener to the post title that shows/hides the comments
		postTitle.addEventListener('click', function() {
			if (commentList.style.display === 'block') {
				commentList.style.display = 'none';
			} else {
				commentList.style.display = 'block';
			}
		});

		commentInput.type = 'text';
		commentInput.placeholder = 'Enter your comment here';
		commentButton.type = 'submit';
		commentButton.textContent = 'Post Comment';

		// event listener to the comment form that adds a new comment to the post
		commentForm.addEventListener('submit', function(event) {
			event.preventDefault();
			const commentText = commentInput.value;
			addComment(i, commentText);
			commentInput.value = '';
		});
		
		commentList.innerHTML = '';
		for (let x = 0; x < posts[i].comments.length; x++) {
			const commentItem = document.createElement('li');
			const commentText = document.createElement('p');
			commentText.textContent = posts[i].comments[x];
			commentItem.appendChild(commentText);
			commentList.appendChild(commentItem);
		}

		commentForm.appendChild(commentInput);
		commentForm.appendChild(commentButton);

		postItem.appendChild(postTitle);
		postItem.appendChild(postBody);
		postItem.appendChild(commentList);
		postItem.appendChild(commentForm);

		postList.appendChild(postItem);
	}
	container.appendChild(postList);
}

function initializeCode() {
	displayPosts()
}
