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

}, false);