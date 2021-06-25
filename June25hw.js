/* EXERCISE 1
Write a function "area" which receives 2 parameters (l1,l2) and calculates the area of the associated rectangle.
*/

const area = function (l1, l2) {
  return l1 * l2;
};

// console.log(area(4, 2));

/* EXERCISE 2
Write a function "crazySum" which receives two integers. It should return the sum of those two values, but if the two values are the same then it should return their sum multiplied by 3.
*/

const crazySum = function (i1, i2) {
  if (i1 === i2) {
    return (i1 + i2) * 3;
  } else {
    return i1 + i2;
  }
};

// console.log(crazySum(2, 2));
// console.log(crazySum(2, 3));

/* EXERCISE 3
Write a function "crazyDiff" that computes the absolute difference between a given number and 19. 
It should return triple their absolute difference if the given number is greater than 19.
*/

const crazyDiff = function (number) {
  if (number > 19) {
    return (number - 19) * 3;
  } else {
    return 19 - number;
  }
};

// console.log(crazyDiff(5));
// console.log(crazyDiff(18));
// console.log(crazyDiff(19));
// console.log(crazyDiff(39));
// console.log(crazyDiff(-20));

/* EXERCISE 4
Write a function "boundary" which accept an integer n and returns true if n is within 20 and 100 (included) or if it's equal to 400.
*/

const boundary = function (n) {
  if ((n >= 20 && n <= 100) || n === 400) {
    return true;
  } else {
    return false;
  }
};

// console.log(boundary(20));
// console.log(boundary(100));
// console.log(boundary(50));
// console.log(boundary(400));
// console.log(boundary(19));
// console.log(boundary(101));
// console.log(boundary(399));
// console.log(boundary(-100));

/* EXERCISE 5
Write a function "strivify" which accepts a string.
It should add the word "Strive" in front of the given string, but if the given string already begins with "Strive", then it should just return the original string.
*/

const strivify = function (string) {
  let strivestr = "Strive";
  if (string.slice(0, 6) === strivestr) {
    return string;
  } else {
    return strivestr + string;
  }
};

// console.log(strivify("Strive School"));
// console.log(strivify(" School"));
// console.log(strivify("Strive"));
// console.log(strivify("r"));

/* EXERCISE 6
Write a function "check3and7" which accepts a positive number and check if it is a multiple of 3 or a multiple of 7.
HINT: Module Operator
*/

const check3and7 = function (number) {
  if (number > 0) {
    if (number % 3 === 0 || number % 7 === 0) {
      return "Multiple of 3 and/or 7";
    } else {
      return "Not a multiple of 3 or 7";
    }
  } else return "Please provide positive number";
};

// console.log(check3and7(21));
// console.log(check3and7(3));
// console.log(check3and7(7));
// console.log(check3and7(30));
// console.log(check3and7(-21));
// console.log(check3and7(-7));
// console.log(check3and7(5));
// console.log(check3and7(17));

/* EXERCISE 7
Write a function "reverseString" to programmatically reverse a given string (es.: Strive => evirtS).
*/

const reverseString = function (string) {
  let newString = "";
  for (i = string.length; i >= 0; i--) {
    let lastLetter = string.slice(i, i + 1);
    newString = newString + lastLetter;
  }
  //   newString.join();
  return newString;
};

// console.log(reverseString("evirts olleh"));

/* EXERCISE 8
Write a function "upperFirst" to capitalize the first letter of each word of a given string passed as a parameter.
*/

const upperFirst = function (string) {
  let sentenceArray = string.split(" ");
  let finalSentence = [];
  for (word of sentenceArray) {
    let newWord = word[0].toUpperCase() + word.slice(1);
    finalSentence.push(newWord);
  }
  return finalSentence.join(" ");
};

// console.log(upperFirst("it's friday then"));
// console.log(upperFirst("it's Saturday, sunday WHAT"));

/* EXERCISE 9
Write a function "cutString" to create a new string without the first and last character of a given string.
*/

const cutString = function (string) {
  let newString = string.slice(1, -1);
  return newString;
};

// console.log(cutString("!Hello!"));

/* EXERCISE 10
Write a function "giveMeRandom" which accepts a number n and returns an array containing n random numbers between 0 and 10.
*/

const giveMeRandom = function (n) {
  let randomArray = [];
  for (i = 0; i < n; i++) {
    let randomNumber = Math.floor(Math.random() * 11);
    randomArray.push(randomNumber);
  }
  return randomArray;
};

// console.log(giveMeRandom(3));
// console.log(giveMeRandom(4));
// console.log(giveMeRandom(7));
// console.log(giveMeRandom(20));

/* EXERCISE 11
Write a function "checkArray" which receives an array of random numbers (created with giveMeRandom) and prints, for each item, whether it's bigger than 5.
The function returns the sum of the numbers bigger than 5.
*/

const checkArray = function (n) {
  let array = giveMeRandom(n);
  let finalSum = 0;
  for (i = 0; i < array.length; i++) {
    if (array[i] > 5) {
      console.log(`${array[i]} is bigger than 5`);
      finalSum += array[i];
    }
    if (array[i] == 5) {
      console.log(`${array[i]} is equal to 5`);
    }
    if (array[i] < 5) {
      console.log(`${array[i]} is small than 5`);
    }
  }
  return finalSum;
};

// let checkArrayAnswer = checkArray(5);
// console.log(checkArrayAnswer);

/* EXERCISE 12
In your eCommerce you have an array of objects called shoppingCart. In this array you have a number of objects with a price, a name, an id and the quantity to be shipped.
Create a function "shippingCartTotal" which calculates the total due to the shop.
*/

let shoppingCart = [
  {
    price: 100,
    name: "table",
    id: "1111",
    quantity: 2,
  },
  { price: 200, name: "tv", id: "2222", quantity: 1 },
  { price: 50, name: "chair", id: "3333", quantity: 4 },
];

const shippingCartTotal = function (array) {
  let totalSum = 0;
  for (item of array) {
    totalSum += item.price * item.quantity;
  }
  return totalSum;
};

// console.log(shippingCartTotal(shoppingCart));

/* EXERCISE 13
In your eCommerce you have an array of objects called shoppingCart. In this array you have a number of objects with a price, a name, an id and the quantity to be shipped.
Create a function "addToShoppingCart" which receives a new object, adds it to shoppingCart and returns the total number of items in the shoppingCart.
*/

/* EXERCISE 14
In your eCommerce you have an array of objects called shoppingCart. In this array you have a number of objects with a price, a name, an id and the quantity to be shipped.
Create a function "maxShoppingCart" which receives the shoppingCart array and returns the most expensive item in the array.
*/

/* EXERCISE 15
In your eCommerce you have an array of objects called shoppingCart. In this array you have a number of objects with a price, a name, an id and the quantity to be shipped.
Create a function "latestShoppingCart" which receives the shoppingCart array and returns the last item.
*/

/* EXERCISE 16
Create a function "loopUntil" which receives an integer x between 0 and 9.
The function loops and prints a random number between 0 and 9 until the random number is bigger than x for three times in a row.
*/

/* EXERCISE 17
Write a function "average" which receives an array and return the average value. The function automatically skips non-numeric entries in the array.
*/

/* EXERCISE 18
Write a function "longest" to find the longest string from an given array of strings.
*/

/* EXERCISE 19
Write a function to create a very simple anti spam filter for your mailbox. The function takes a string emailContent, and returns a boolean.
Check if the email is valid using string methods. The email (in this example) is valid if the words SPAM and SCAM does not appear.
*/

/* EXERCISE 20
Write a function that receives a date d as parameter and calculates the number of days passes since the d.
*/

/* EXERCISE 21
Write a function "matrixGenerator" that receives x and y as parameter. The result should be a matrix of x times y with, as value, the index of the position.
Ex.: X = 3, Y = 2
["00","01","02"
"10","11","12"]
*/
