// stockUpApp javascript

// variable buy will be an array with collection of object which contains...item description, brand, quantity, && price
var needToBuy = [];
// variables for input
var itemDescription = document.getElementsByClassName('item_description');
var itemBrand = document.getElementsByClassName('item_brand');
var itemQuantity = document.getElementsByClassName('item_quantity');
// updates the needToBuy
function addToList() {
	var item = document.getElementById('item_description').value;
	var brand = document.getElementById('item_brand').value;
	var quantity = Number(document.getElementById('item_quantity').value);
	var quantityDisplay = ' x ' + quantity;
	if(quantity === 0) {
		quantityDisplay = '';
	}
	needToBuy.push({
		'item': item,
		'brand': brand,
		'quantity': quantityDisplay
	});
	console.log('added an item!');
}
// clears all item
function clearList() {
	var item = document.getElementsByTagName('div');
	if(needToBuy.length === 0) {
		alert('You have no items in the shopping list!');
	} else {
		for(var i = 0; i < item.length; i++) {
			item[i].remove();
		}
		needToBuy = [];
	}
	console.log('cleared all items!');
}
// clear marked items
function clearMarkedItem() {
	var checkedBox = document.getElementsByName('check_box');
	var checkedItem = document.getElementsByTagName('div');
	if(needToBuy.length === 0) {
		alert('You have no items in the shopping list!');
	} else {
		for(var i = 0; i < checkedBox.length; i++) {
			if(checkedBox[i].checked === true) {
				needToBuy.splice(i, 1);
				checkedItem[i].remove();
			}
		}
	}
	console.log('clear marked items!');
}





