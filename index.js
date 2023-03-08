var validPromoCodes = { 12345678: 10, 34562346: 1000, 12553523: 2000 };
var getLength = function (number) {
    var counter = 1;
    while (number > 10) {
        number = number / 10;
        counter++;
    }
    return counter;
};
var isValid = function (promo) { return getLength(promo) === 8 && validPromoCodes.hasOwnProperty(promo); };
var getBonus = function (promo) { return isValid(promo)
    ? Object.keys(validPromoCodes).length && validPromoCodes[promo] : 0; };
console.log(getBonus(34562346));
