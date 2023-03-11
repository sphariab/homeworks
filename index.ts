type Promo = 100 | 1000 | 2000 | 0;
type Helper = (promo: number) => boolean;

const isOdd = (number: number): boolean => number % 2 > 0;
const isEven = (number: number): boolean => number % 2 === 0;
const isOddPair = (a: number, b: number): boolean => isOdd(a) && isOdd(b);
const isPalindrome = (a: number, b: number): boolean => a === b;
const getSum = (promo: number, helper: Helper) =>
  toArray(promo).reduce((total, item) => helper(item) ? item + total : total, 0)

const toArray = (promo: number): number[] => {
    let promoDigits = [];
    while (promo > 0) {
        promoDigits = [...promoDigits, Math.floor(promo % 10)];
        promo = Math.floor(promo / 10);
    }

    return promoDigits.reverse();
};

const isEvenSumGreaterOddSum = (promo: number): boolean => getSum(promo, isEven) > getSum(promo, isOdd);

const findOddDigits = (promo: number): number[] =>  {
    const digits = toArray(promo);
    let odds = [];

    for (let i = 0; i < digits.length; i++) {
        const firstDigit = digits[i], secondDigit = digits[i + 1], thirdDigit = digits[i + 2];

        if (isOddPair(firstDigit, secondDigit) && isEven(thirdDigit) && !isPalindrome(firstDigit, secondDigit)){
            odds = [...odds, firstDigit, secondDigit];
        } else if(odds.length && isOddPair(firstDigit, secondDigit) && !isPalindrome(firstDigit, secondDigit)) {
            odds = [...odds, firstDigit, secondDigit];
        }
    }

    return odds;
};

const checkIfAscOrderInOdds = (promo: number): boolean => {
    const digits = findOddDigits(promo);
    let ascOdds = [];

    for (let i = 0; i < digits.length; i = i + 2) {
        const firstDigit = digits[i], secondDigit = digits[i + 1];

        if (i % 2 === 0 && (firstDigit < secondDigit)) {
            ascOdds = [...ascOdds, firstDigit, secondDigit]
        }
    }

    return ascOdds.length === 4;
};

const getBonus = (promo: number): Promo => {
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
