//testing some API stuff
// https://www.codewars.com/api/v1/users/jrd656



// const CodeURL = "https://www.codewars.com/api/v1/users/jrd656"

// let url = 'https://www.codewars.com/api/v1/users/jrd656';

// fetch(url)
// .then(res => res.json())
// .then((out) => {
//   console.log('Checkout this JSON! ', out);
// })
// .catch(err => { throw err });


// const proxyurl = "https://cors-anywhere.herokuapp.com/";
// const url = "https://www.codewars.com/api/v1/users/jrd656"; // site that doesn’t send Access-Control-*
// fetch(proxyurl + url) // https://cors-anywhere.herokuapp.com/https://example.com
// .then(response => response.text())
// .then(contents => console.log(contents))
// .catch(() => console.log("Can’t access " + url + " response. Blocked by browser?"))

// const getPosts = () => {
//     return fetch('https://www.codewars.com/api/v1/users/jrd656')
//     .then(res => res.json())
//     .then(posts => console.log(posts))
// };

// const response = await fetch('http://example.com/movies.json');
// const myJson = await response.json();
// console.log(JSON.stringify(myJson));

try {
    const data = await postData('http://example.com/answer', { answer: 42 });
    console.log(JSON.stringify(data)); // JSON-string from `response.json()` call
  } catch (error) {
    console.error(error);
  }
  
  async function postData(url = '', data = {}) {
    // Default options are marked with *
    const response = await fetch(url, {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      mode: 'cors', // no-cors, *cors, same-origin
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'same-origin', // include, *same-origin, omit
      headers: {
        'Content-Type': 'application/json'
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: 'follow', // manual, *follow, error
      referrerPolicy: 'no-referrer', // no-referrer, *client
      body: JSON.stringify(data) // body data type must match "Content-Type" header
    });
    return await response.json(); // parses JSON response into native JavaScript objects
  }