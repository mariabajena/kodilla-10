function Telefon(marka, cena, kolor) {
	this.marka = marka; 
	this.cena = cena;
	this.kolor = kolor;
}

Telefon.prototype.printInfo = function() {
		console.log("Marka telefonu to: "  + this.marka + ", kolor to " + this.kolor + ", a cena to " + this.cena + ".”");
}

var iPhone6S = new Telefon("Apple", 2250, "srebrny"),
	SamsungGalaxyS6 = new Telefon("Samsung", 2000, "czarny"),
	OnePlusOne = new Telefon("One Plus", 1800, "biały");

iPhone6S.printInfo();