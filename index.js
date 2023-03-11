var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var isOdd = function (number) { return number % 2 > 0; };
var isEven = function (number) { return number % 2 === 0; };
var isOddPair = function (a, b) { return isOdd(a) && isOdd(b); };
var isPalindrome = function (a, b) { return a === b; };
var getSum = function (promo, helper) {
    return toArray(promo).reduce(function (total, item) { return helper(item) ? item + total : total; }, 0);
};
var toArray = function (promo) {
    var promoDigits = [];
    while (promo > 0) {
        promoDigits = __spreadArray(__spreadArray([], promoDigits, true), [Math.floor(promo % 10)], false);
        promo = Math.floor(promo / 10);
    }
    return promoDigits.reverse();
};
var isEvenSumGreaterOddSum = function (promo) { return getSum(promo, isEven) > getSum(promo, isOdd); };
var findOddDigits = function (promo) {
    var digits = toArray(promo);
    var odds = [];
    for (var i = 0; i < digits.length; i++) {
        var firstDigit = digits[i], secondDigit = digits[i + 1], thirdDigit = digits[i + 2];
        if (isOddPair(firstDigit, secondDigit) && isEven(thirdDigit) && !isPalindrome(firstDigit, secondDigit)) {
            odds = __spreadArray(__spreadArray([], odds, true), [firstDigit, secondDigit], false);
        }
        else if (odds.length && isOddPair(firstDigit, secondDigit) && !isPalindrome(firstDigit, secondDigit)) {
            odds = __spreadArray(__spreadArray([], odds, true), [firstDigit, secondDigit], false);
        }
    }
    return odds;
};
var checkIfAscOrderInOdds = function (promo) {
    var digits = findOddDigits(promo);
    var ascOdds = [];
    for (var i = 0; i < digits.length; i = i + 2) {
        var firstDigit = digits[i], secondDigit = digits[i + 1];
        if (i % 2 === 0 && (firstDigit < secondDigit)) {
            ascOdds = __spreadArray(__spreadArray([], ascOdds, true), [firstDigit, secondDigit], false);
        }
    }
    return ascOdds.length === 4;
};
var getBonus = function (promo) {
    if (toArray(promo).length === 8) {
        if (checkIfAscOrderInOdds(promo)) {
            return 2000;
        }
        if (findOddDigits(promo).length === 4) {
            return 1000;
        }
        if (isEvenSumGreaterOddSum(promo)) {
            return 100;
        }
        return 0;
    }
    return 0;
};
