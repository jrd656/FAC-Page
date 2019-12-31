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

document.getElementById('button1').addEventListener('click', loadUsers1); 

// Load Github Users
function loadUsers1(){
  var xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://bar.other/resources/public-data/', true);

  xhr.onload = function(){
    if(this.status == 200){
      var users1 = JSON.parse(this.responseText);

      var output1 = '';
      for(var i in users1){
        output1 +=
          '<div class="user">' +
          '<ul>' +
          '<li>ID: '+users1[i].username+'</li>' +
          '<li>Login: '+users1[i].kata+'</li>' +
          '</ul>' +
          '</div>';
      }

      document.getElementById('users1').innerHTML = output1;
    }
  }

  xhr.send();
}
   











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