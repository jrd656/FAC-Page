//testing some API stuff



const CodeURL = "https://www.codewars.com/api/v1/users/jrd656"

let url = 'https://www.codewars.com/api/v1/users/jrd656';

fetch(url)
.then(res => res.json())
.then((out) => {
  console.log('Checkout this JSON! ', out);
})
.catch(err => { throw err });
