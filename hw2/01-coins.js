const calculateChange = (amount) => {
    let printStatement = '';
    if (amount > 10) {
        printStatement = '$' + amount + ' ==> Error: the number is too large';
    } else if (amount < 0) {
        printStatement = '$' + amount + ' ==>  Amount cannot be negative';
    } else if (amount > 0 && amount < 10) {
        let input = amount * 100;
        let remainingAmount = 0;
        let countOfDollar = Math.floor(input / 100);
        if (countOfDollar != 0) {
            if (countOfDollar > 1) printStatement = countOfDollar + ' dollars' + ', ';
            else printStatement = countOfDollar + ' dollar' + ', ';
        }
        remainingAmount = input - countOfDollar * 100;
        let countOfQuarters = Math.floor(remainingAmount / 25);
        if (countOfQuarters != 0) {
            if (countOfQuarters > 1) printStatement += countOfQuarters + ' quarters' + ', ';
            else printStatement += countOfQuarters + ' quarter' + ', ';
        }
        remainingAmount -= countOfQuarters * 25;
        let countOfDimes = Math.floor(remainingAmount / 10);
        if (countOfDimes != 0) {
            if (countOfDimes > 1) printStatement += countOfDimes + ' dimes' + ', ';
            else printStatement += countOfDimes + ' dime' + ', ';
        }
        remainingAmount -= countOfDimes * 10;
        let countOfNickel = Math.floor(remainingAmount / 5);
        if (countOfNickel != 0) {
            if (countOfNickel > 1) printStatement += countOfNickel + ' nickels' + ', ';
            else printStatement += countOfNickel + ' nickel' + ', ';
        }
        remainingAmount -= countOfNickel * 5;
        if (remainingAmount != 0) {
            if (remainingAmount > 1) printStatement += remainingAmount + ' pennies';
            else printStatement += remainingAmount + ' penny';
        }
        printStatement = '$' + amount + ' ==> ' + printStatement;
    } else {
        printStatement = '$' + amount + ' ==> Invalid Input';
    }
    return printStatement;
};

// Sample Test Cases
console.log(calculateChange(4.62));
// $4.62 ==> 4 dollars, 2 quarters, 1 dime, 2 pennies
console.log(calculateChange(9.74));
// $9.74 ==> 9 dollars, 2 quarters, 2 dimes, 4 pennies
console.log(calculateChange(0.16));
// $0.16 ==> 1 dime, 1 nickel, 1 penny
console.log(calculateChange(15.11));
// $15.11 ==> Error: the number is too large
console.log(calculateChange(-1.45));
// $15.11 ==> Amount cannot be negative
console.log(calculateChange('ABC'));
// ABC ==> Invalid Input
console.log(calculateChange(0));
// $0 ==> Invalid Input
