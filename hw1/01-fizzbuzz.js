//Description : Program to print Fizz if a number is divisible by 3, Buzz if a number
//is divisible by 5 and Fizz Buzz if it is divided by 3 and 5 both

const fizzbuzz = () => {
  for (let number = 1; number <= 100; number++) {
    let wordToPrint = number;
    if (number % 3 === 0 && number % 5 === 0) wordToPrint = "Fizz Buzz";
    else if (number % 3 === 0) wordToPrint = "Fizz";
    else if (number % 5 === 0) wordToPrint = "Buzz";
    console.log(wordToPrint);
  }
};

fizzbuzz();
// 1
// 2
// fizz
// 4
// buzz
// fizz
// 7
// 8
// fizz
// buzz
// 11
// fizz
// 13
// 14
// fizzbuzz
// ...
