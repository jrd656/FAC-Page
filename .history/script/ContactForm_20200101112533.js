// Get form, item, and wishlist
var addToWishList = document.querySelector('#add-to-wishlist');
var wishlistItem = document.querySelector('#wishlist-item');
var wishlist = document.querySelector('#wishlist');

addToWishList.addEventListener('submit', function (event) {

	// Don't submit the form
	event.preventDefault();

	// Ignore it if the wishlist item is empty
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


// name,email,message instead of text,submit TYPES
// ID's - add-to-wishlist, wishlist-item (input) is add-to-wishlist1 and name,email,message
// create

var addToWishList1 = document.querySelector('#add-to-wishlist1');
var name1 = document.querySelector('#name');
var email1 = document.querySelector('#email');
var message1 = document.querySelector('#message');
var wishlist1 = document.querySelector('#wishlist1');

/*
<div class="message-card">
    <div class="message-face">
        <div class="message-image" src="Images/FCClogo.png" ></div>
        <div class="message-texts">
            <p class="message-name">Name</p>
            <p class="message-email" id="message-email">Email</p>
            <p class="message-text" id="message-text">Message Text Lots and lots fgijgelfjg feljfkl dsfljsfklsjd sldfjd</p>
        </div>  
    </div>
</div>
*/

const docFrag = document.createDocumentFragment();
console.log("docFrag = " + docFrag);
let frag1 = document.createElement('li');
frag1.textContent = "apples";
docFrag.appendChild(frag1);
console.log("docFrag = " + docFrag);
console.log(docFrag);



addToWishList1.addEventListener('submit1', function (event) {

	// Don't submit the form
	event.preventDefault();

	// Ignore it if the wishlist item is empty
	if (wishlistItem1.value.length < 1) return;

	// Add item to wishlist
    wishlist1.innerHTML += '<li>' + wishlistItem.value + '</li>';
  


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