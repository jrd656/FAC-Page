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

// const url = 'https://bar.other/resources/public-data/'; 

document.getElementById('button').addEventListener('click', loadUsers); 

// Load Github Users
function loadUsers(){
  var xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://api.github.com/users', true);

  xhr.onload = function(){
    if(this.status == 200){
      var users = JSON.parse(this.responseText);

      var output = '';
      for(var i in users){
        output +=
          '<div class="user">' +
          '<img src="'+users[i].avatar_url+'" width="70" height="70">' +
          '<ul>' +
          '<li>ID: '+users[i].id+'</li>' +
          '<li>Login: '+users[i].login+'</li>' +
          '</ul>' +
          '</div>';
      }

      document.getElementById('users').innerHTML = output;
    }
  }

  xhr.send();
}
   
