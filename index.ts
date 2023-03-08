type Promos = { [key: number]: number };
type Promo = 100 | 1000 | 2000 | 0;

const validPromoCodes: Promos = { 12345678: 10, 34562346: 1000, 12553523: 2000 };

const getLength = (number: number): number => {
    let counter: number = 1;
    while (number > 10) {
        number = number / 10;
        counter++;
    }

    return counter
};
const isValid = (promo: number): boolean => getLength(promo) === 8 && validPromoCodes.hasOwnProperty(promo);
const getBonus = (promo: number): Promo => isValid(promo)
  ? Object.keys(validPromoCodes).length && validPromoCodes[promo] as Promo : 0;