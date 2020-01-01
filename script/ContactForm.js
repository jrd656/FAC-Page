// Get form, item, and wishlist
var addToWishList = document.querySelector('#add-to-wishlist');
var wishlistItem = document.querySelector('#wishlist-item');
var wishlist = document.querySelector('#wishlist');

var emailInput = document.querySelector('#email1');
var nameInput = document.querySelector('#name1');
var textInput = document.querySelector('#message1');

var msgCard = document.getElementById('message-card');
var email = document.getElementsByClassName('message-email');
var name = document.getElementsByClassName('message-name');
// var messageText = document.getElementsByClassName('message-text');

addToWishList.addEventListener('submit', function (event) {

	// Don't submit the form
	event.preventDefault();

    // Ignore it if the wishlist item is empty

	if (emailInput.value.length < 1) return;

    // Add item to wishlist
    msgCard.style.display = "block";

    messageName.innerHTML = nameInput.value;
    messageEmail.innerHTML = emailInput.value;
    messageText.innerHTML = textInput.value;

	// Clear input

    emailInput.value = '';
    nameInput.value = '';
    textInput.value = '';


	// Save the list to localStorage
	localStorage.setItem('wishlistItems', wishlist.innerHTML);

}, false);

// Check for saved wishlist items
var saved = localStorage.getItem('wishlistItems');

// If there are any saved items, update our list
if (saved) {
	wishlist.innerHTML = saved;
}





/*

// name,email,message instead of text,submit TYPES
// ID's - add-to-wishlist, wishlist-item (input) is add-to-wishlist1 and name,email,message
// create

var addToWishList1 = document.querySelector('#add-to-wishlist1');
var name1 = document.querySelector('#name');
var email1 = document.querySelector('#email');
var message1 = document.querySelector('#message');
var wishlist1 = document.querySelector('#wishlist1');
var wishlistItem1 = document.querySelector('#wishlist-item');

console.log("wishlistItem: " + wishlistItem);
console.log("wishlistItem1: " + wishlistItem1);


let msgCard = document.getElementById('message-card');

addToWishList1.addEventListener('submit', function (event) {

	// Don't submit the form
	event.preventDefault();

    // Ignore it if the wishlist item is empty
    console.log(wishlistItem1.value.length)
    if (wishlistItem1.value.length < 1) return;
    

	// Add item to wishlist
    wishlist1.innerHTML += '<li>' + wishlistItem.value + '</li>';


    console.log('msgCard: '+msgCard);
    msgCard.style.display = "block"; 


	// Clear input
	wishlistItem.value = '';

	// Save the list to localStorage
	localStorage.setItem('wishlistItems', wishlist.innerHTML);

}, false);

// Check for saved wishlist items
var saved = localStorage.getItem('wishlistItems');

// If there are any saved items, update our list
if (saved) {
	wishlist.innerHTML = saved;
}


/*
const list2 = document.getElementById("list2")
const docFrag = document.createDocumentFragment();
console.log("docFrag = " + docFrag);
let frag1 = document.createElement('li');
frag1.textContent = "apples";
docFrag.appendChild(frag1);
console.log("docFrag = " + docFrag);
console.log(docFrag);

list2.appendChild(docFrag);
*/


/*

// Get form, item, and wishlist
var addToWishList = document.querySelector('#add-to-wishlist');
var wishlistItem = document.querySelector('#wishlist-item');
var wishlist = document.querySelector('#wishlist');

addToWishList.addEventListener('submit', function (event) {

	// Don't submit the form
	event.preventDefault();

    // Ignore it if the wishlist item is empty
    console.log(wishlistItem.value.length);
	if (wishlistItem.value.length < 1) return;

	// Add item to wishlist
	wishlist.innerHTML += '<li>' + wishlistItem.value + '</li>';

	// Clear input
	wishlistItem.value = '';

	// Save the list to localStorage
	localStorage.setItem('wishlistItems', wishlist.innerHTML);

}, false);

// Check for saved wishlist items
var saved = localStorage.getItem('wishlistItems');

// If there are any saved items, update our list
if (saved) {
	wishlist.innerHTML = saved;
}

*/