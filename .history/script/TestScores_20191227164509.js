//testing some API stuff
// let url = "https://www.codewars.com/api/v1/users/jrd656"

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

const xhr = new XMLHttpRequest();
const url = 'https://bar.other/resources/public-data/';
   
xhr.open('GET', url);
xhr.onreadystatechange = someHandler;
xhr.send(); 