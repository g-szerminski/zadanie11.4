var samsungGalaxyS6 = new Phone('Samsung', 1800, 'black');
var iPhone6 = new Phone('Apple', 2500, 'white');
var nokia8 = new Phone('Nokia', 2300, 'silver and white');

function Phone(brand, price, color) {
	this.brand = brand;
	this.price = price;
	this.color = color;
}

Phone.prototype.printInfo = function() {
	console.log('The phone brand is ' + this.brand + ', color is ' + this.color + ', and the price is ' + this.price + ' zł.');
}

samsungGalaxyS6.printInfo();
iPhone6.printInfo();
nokia8.printInfo();