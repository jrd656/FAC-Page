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



// THIS XMLHTTPREQUEST WORKS, BUT ONLY WITH CHROME EXTENTION.
// DO I NEED TO ADD: xhr.setRequestHeader("Access-Control-Allow-Origin", "*");

/*

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

*/

/*

//USING FETCH, FROM https://www.youtube.com/watch?v=1tVCwv_BX2M&t=16s
//THIS WORKED! JUST NEED TO OVERCOME CORS NOW

fetch(url1)
  .then(function(response) {
      return response.json()
  })
  .then(function(data) {
      console.log(data)

      usernameCodeWars = data.username;
      scoreCodeWars = data.honor;
      console.log("username: " + data.username);
      document.getElementById('changeText').textContent = scoreCodeWars;
  });


document.getElementById('changeText').textContent = scoreCodeWars;

*/

// Access-Control-Allow-Origin: *;

/*

// FROM https://www.youtube.com/watch?v=YJ7ZgGnhN5k&t=27s
let h = new Headers();
h.append('Accept', 'application/json');
// h.append('Access-Control-Allow-Origin', '*');

let req = new Request(url1, {
    method: 'GET',
    headers: h,
    mode: 'cors',
    
});

fetch(req)
    .then((response)=>{
        if(response.ok){
            return response.json();
        }else{
            throw new Error('BAD HTTP stuff');
        }
    })
    .then( (jsonData) =>{
        console.log(jsonData);
    })
    .catch( (err) =>{
        console.log('ERROR:', err.message);
    });

*/


/// EXAMPLE FROM https://stackoverflow.com/questions/43871637/no-access-control-allow-origin-header-is-present-on-the-requested-resource-whe

//const url = "https://example.com"; // site that doesn’t send Access-Control-*

/*
//ORIGINAL SOLUTION DOESN'T WORK WITHOUT EXTENSION
const url = "https://example.com"; // site that doesn’t send Access-Control-*
fetch(url)
.then(response => response.text())
.then(contents => console.log(contents))
.catch(() => console.log("Can’t access " + url + " response. Blocked by browser?"))
*/


/*

const proxyurl1 = "https://git.heroku.com/agile-waters-87216.git/";
const proxyurl2 = "https://agile-waters-87216.herokuapp.com/"
const proxyurl = "https://cors-anywhere.herokuapp.com/";
const url = "https://example.com"; // site that doesn’t send Access-Control-*
fetch(proxyurl2 + url1) // https://cors-anywhere.herokuapp.com/https://example.com
.then(response => response.text())
.then(contents => console.log(contents))
.catch(() => console.log("Can’t access " + url1 + " response. Blocked by browser?"))

*/

//HOW TO OVERCOME SORS: https://stackoverflow.com/questions/43871637/no-access-control-allow-origin-header-is-present-on-the-requested-resource-whe

const proxyurl2 = "https://agile-waters-87216.herokuapp.com/"


// FROM https://www.youtube.com/watch?v=YJ7ZgGnhN5k&t=27s
let h = new Headers();
h.append('Accept', 'application/json');
// h.append('Access-Control-Allow-Origin', '*');



//CODEWARS:
const codewarsurl = "https://www.codewars.com/api/v1/users/jrd656";
const codewarsURLcors = proxyurl2+codewarsurl;
console.log("codewarsURLcors: " + codewarsURLcors);

let req = new Request(codewarsURLcors, {
    method: 'GET',
    headers: h,
    mode: 'cors',    
});

fetch(req)
    .then((response)=>{
        if(response.ok){
            return response.json();
        }else{
            throw new Error('BAD HTTP stuff');
        }
    })
    .then( (jsonData) =>{
        console.log("jsonData: " + jsonData);
        scoreCodeWars = jsonData.honor;
        document.getElementById('changeText').textContent = scoreCodeWars;
        document.getElementById('CWscore').textContent = scoreCodeWars +"/300 kata and 5/5kyu on Code Wars!";
    })
    .catch( (err) =>{
        console.log('ERROR:', err.message);
    });



//FREECODECAMP
const FCCurl = "https://www.codewars.com/api/v1/users/jrd656";
const FCCurlCORS = proxyurl2+FCCurl;
console.log("FCCurlCORS: " + FCCurlCORS);

let req = new Request(FCCurlCORS, {
    method: 'GET',
    headers: h,
    mode: 'cors',    
});

fetch(req)
    .then((response)=>{
        if(response.ok){
            return response.json();
        }else{
            throw new Error('BAD HTTP stuff');
        }
    })
    .then( (jsonData) =>{
        console.log("jsonData: " + jsonData);
        scoreFCC = jsonData.honor;
        document.getElementById('changeText').textContent = scoreFCC;
        document.getElementById('FCCscore').textContent = scoreFCC +"/250 points on FreeCodeCamp!";
    })
    .catch( (err) =>{
        console.log('ERROR:', err.message);
    });
