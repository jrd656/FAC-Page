//testing some API stuff
let url1 = "https://www.codewars.com/api/v1/users/jrd656"
let usernameCodeWars = 0;
let scoreCodeWars = 0;


//THIS RETREIVES A JSON FROM JSONPLACEHOLDER...COM. 
/*

// Set up our HTTP request
var xhr = new XMLHttpRequest();

// Setup our listener to process completed requests
xhr.onload = function () {

	// Process our return data
	if (xhr.status >= 200 && xhr.status < 300) {

		// What do when the request is successful
		console.log('success!', xhr);
	} else {
		// What do when the request fails
		console.log('The request failed!');
	}

	// Code that should run regardless of the request status
	console.log('This always runs...');
};

// Create and send a GET request
// The first argument is the post type (GET, POST, PUT, DELETE, etc.)
// The second argument is the endpoint URL
xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts');
xhr.send();

*/


//REPLACE 		console.log('success!', xhr); } else { console.log('The request failed!');
// WITH console.log(JSON.parse(xhr.responseText));	} else { console.log(JSON.parse(xhr.responseText));












// Set up our HTTP request
var xhr = new XMLHttpRequest();
let newVar = 0;
let newObj = {};

let showObj = function() {
  for (let prop in newObj) {
    console.log("prop: " + prop);
    console.log(newObj[prop]);
  };
};

// Setup our listener to process completed requests
xhr.onload = function () {

	// Process our return data
	if (xhr.status >= 200 && xhr.status < 300) {
		// Runs when the request is successful
    console.log(JSON.parse(xhr.responseText));
    console.log("Just loaded something");
	} else {
		// Runs when it's not
		console.log(JSON.parse(xhr.responseText));
	}

	// Code that should run regardless of the request status
  console.log('This always runs...');
  
  showObj();
};

// Create and send a GET request
// The first argument is the post type (GET, POST, PUT, DELETE, etc.)
// The second argument is the endpoint URL
xhr.open('GET', url1);
xhr.send();

console.log("NewVar: " + newVar);




//USING FETCH FROM https://www.youtube.com/watch?v=1tVCwv_BX2M&t=16s

fetch(url1)
  .then(function(response) {
      return response.json()
  })
  .then(function(data) {
      console.log(data)

      usernameCodeWars = data.username;
      scoreCodeWars = data.honor;
      console.log("username: " + data.username)
  });


document.getElementById('changeText').textContent = scoreCodeWars;


