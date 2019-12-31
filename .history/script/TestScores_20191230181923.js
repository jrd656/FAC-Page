//testing some API stuff
// let url = "https://www.codewars.com/api/v1/users/jrd656"





// const url = 'https://bar.other/resources/public-data/'; 


// document.getElementById('button1').addEventListener('click', loadUsers1); 

// Load Github Users
function loadUsers1(){
var xhr = new XMLHttpRequest();
xhr.open('GET', 'https://www.codewars.com/api/v1/users/jrd656', true);

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
   









/*

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

*/


/*
fetch(url, {
  method: 'post',
  headers: {
    "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
  },
  body: JSON.stringify({foo:bar})
})
.then(function (resp){
  return resp.json()
})
.then(function (data) {
  console.log('Request succeeded with JSON response', data);
})
.catch(function (error) {
  console.log('Request failed', error);
});

*/


//THIS WAS A TUTORIAL TO SHOW HOW TO USE FETCH TO GET A LOCAL IMAGE FILE.
/*
console.log('about to fetch a rainbow');
fetch('rainbow.jpg').then(response => {
  console.log(response);
  return response.blob();
})
.then(blob => {
  console.log(blob);
  document.getElementById('rainbow').src = URL.createObjectURL(blob);
  });

  */