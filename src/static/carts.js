const blueTShirt = require('./products');

function getCarts() {
	const cartOneBlueTshirt = {};
	const cartTwoBlueTshirt = {};

	Object.assign(cartOneBlueTshirt, blueTShirt);
	Object.assign(cartTwoBlueTshirt, blueTShirt);

	cartOneBlueTshirt.quantity = 5;
	const cartOne = [cartOneBlueTshirt];

	cartTwoBlueTshirt.quantity = 2;
	const cartTwo = [cartTwoBlueTshirt];

	return {
		'AAA-123': cartOne,
		'BBB-123': cartTwo
	};
}
module.exports = getCarts;
