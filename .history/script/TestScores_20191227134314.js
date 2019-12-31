//testing some API stuff
let url = "https://www.codewars.com/api/v1/users/jrd656"

/*
function setup() {

    LoadJSON("https://www.codewars.com/api/v1/users/jrd656", gotData, 'jsonp');

};

function gotData(data) {
    println(data);
    console.log(data);
};

function draw () {

};
*/


console.log("hello");

fetch(url)
.then(res => console.log(res));