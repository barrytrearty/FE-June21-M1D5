const newExercise = function (n) {
  console.log(`<--------- Exercise ${n} --------->`);
};

/* EXERCISE 1
Write a function "area" which receives 2 parameters (l1,l2) and calculates the area of the associated rectangle.
*/

newExercise(1);

const area = function (l1, l2) {
  return l1 * l2;
};

// console.log(area(4, 2));

/* EXERCISE 2
Write a function "crazySum" which receives two integers. It should return the sum of those two values, but if the two values are the same then it should return their sum multiplied by 3.
*/

newExercise(2);

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

newExercise(3);

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

newExercise(4);

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

newExercise(5);

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

newExercise(6);

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

newExercise(7);

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

newExercise(8);

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

newExercise(9);

const cutString = function (string) {
  return string.slice(1, -1);
};

// console.log(cutString("!Hello!"));
// console.log(cutString("!It's Friday then!"));

/* EXERCISE 10
Write a function "giveMeRandom" which accepts a number n and returns an array containing n random numbers between 0 and 10.
*/

newExercise(10);

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

newExercise(11);

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

// checkArray(5);
// let checkArrayAnswer = checkArray(5);
// console.log(checkArrayAnswer);

/* EXERCISE 12
In your eCommerce you have an array of objects called shoppingCart. In this array you have a number of objects with a price, a name, an id and the quantity to be shipped.
Create a function "shippingCartTotal" which calculates the total due to the shop.
*/

newExercise(12);

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

newExercise(13);

const addToShoppingCart = function (object) {
  let newItem = object;
  shoppingCart.push(newItem);
  let totalItems = 0;
  for (item of shoppingCart) {
    totalItems += item.quantity;
  }
  return totalItems;
};

// console.log(
// addToShoppingCart({ price: 102, name: "lamp", id: "4444", quantity: 13 });
// );

/* EXERCISE 14
In your eCommerce you have an array of objects called shoppingCart. In this array you have a number of objects with a price, a name, an id and the quantity to be shipped.
Create a function "maxShoppingCart" which receives the shoppingCart array and returns the most expensive item in the array.
*/

newExercise(14);

const maxShoppingCart = function (array) {
  let mostExpensiveItem = array[0];
  for (i = 0; i < array.length; i++) {
    if (array[i].price > mostExpensiveItem.price) {
      mostExpensiveItem = array[i];
    }
  }
  return mostExpensiveItem;
};

// console.log(maxShoppingCart(shoppingCart));

/* EXERCISE 15
In your eCommerce you have an array of objects called shoppingCart. In this array you have a number of objects with a price, a name, an id and the quantity to be shipped.
Create a function "latestShoppingCart" which receives the shoppingCart array and returns the last item.
*/

newExercise(15);

const latestShoppingCart = function (array) {
  return array.slice(-1);
};

// console.log(latestShoppingCart(shoppingCart));

/* EXERCISE 16
Create a function "loopUntil" which receives an integer x between 0 and 9.
The function loops and prints a random number between 0 and 9 until the random number is bigger than x for three times in a row.
*/

newExercise(16);

// const loopUntil = function (x) {
//   if (x > 0 && x < 9) {
//     for (i = 0; i < x; i++) {
//       let randomNumber = Math.floor(Math.random() * 10);
//       console.log(randomNumber);
//       for (i = 0; i < x; i++) {
//         let randomNumber = Math.floor(Math.random() * 10);
//         console.log(randomNumber);
//         for (i = 0; i < x; i++) {
//           let randomNumber = Math.floor(Math.random() * 10);
//           console.log(randomNumber);
//         }
//       }
//     }
//   } else {
//     return `Please enter number between one and nine`;
//   }
// };

// const loopUntil = function (x) {
//   while (true) {
//     let currentNumber1 = Math.floor(Math.random() * 10);
//     console.log(currentNumber1);
//     if (currentNumber1 > x) {
//       let currentNumber2 = Math.floor(Math.random() * 10);
//       console.log(currentNumber2);
//       if (currentNumber2 > x) {
//         let currentNumber3 = Math.floor(Math.random() * 10);
//         console.log(currentNumber3);
//         console.log("Cycle is finished");
//         break;
//       }
//     }
//   }
// };

// const loopUntil = function (x) {
//   let randomNumber;
//   do {
//     randomNumber = Math.floor(Math.random() * 10);
//     console.log(randomNumber);
//   } while (randomNumber <= x);
//   {
//     randomNumber = Math.floor(Math.random() * 10);
//     console.log(randomNumber);
//   }
//   if (randomNumber > x) {
//     let randomNumber2 = Math.floor(Math.random() * 10);
//     console.log(randomNumber2);
//     while (randomNumber2 <= x) {
//       randomNumber2 = Math.floor(Math.random() * 10);
//       console.log(randomNumber2);
//     }
//   }
// };

// const loopUntil = function (x) {
//   for (let i = 0; i < x; i++) {
//     let randomNumber = Math.floor(Math.random() * 10);
//     console.log(randomNumber);
//     if (randomNumber > x) {
//       break;
//     }
//   }
// };

const loopUntil = function (x) {
  let firstCondition = false;
  let secondCondition = false;
  let thirdCondition = false;
  let randomNumber1;
  let randomNumber2;
  let randomNumber3;
  while (
    firstCondition == false &&
    secondCondition == false &&
    thirdCondition == false
  ) {
    randomNumber1 = Math.floor(Math.random() * 10);
    console.log(randomNumber1);
    if (randomNumber1 > x) {
      firstCondition = true;
      while (
        firstCondition == true &&
        secondCondition == false &&
        thirdCondition == false
      ) {
        randomNumber2 = Math.floor(Math.random() * 10);
        console.log(randomNumber2);
        if (randomNumber2 > x) {
          secondCondition = true;
        } else {
          firstCondition = false;
        }
        while (
          firstCondition == true &&
          secondCondition == true &&
          thirdCondition == false
        ) {
          randomNumber3 = Math.floor(Math.random() * 10);
          console.log(randomNumber3);
          if (randomNumber3 > x) {
            thirdCondition = true;
          } else {
            firstCondition = false;
            secondCondition = false;
            thirdCondition = false;
          }
        }
      }
    }
  }
  return `Loop complete`;
};
// loopUntil(1)
// loopUntil(2)
// loopUntil(5)
// loopUntil(7)
// loopUntil(8);

/* EXERCISE 17
Write a function "average" which receives an array and return the average value. The function automatically skips non-numeric entries in the array.
*/

newExercise(17);

const average = function (array) {
  let totalSum = 0;
  let averageCounter = 0;
  for (i = 0; i < array.length; i++) {
    if (typeof array[i] === "number") {
      totalSum += array[i];
      averageCounter++;
    }
  }
  return totalSum / averageCounter;
};

// console.log(average([1, 2, 2, 3, 7]));

/* EXERCISE 18
Write a function "longest" to find the longest string from an given array of strings.
*/

newExercise(18);

const longest = function (array) {
  let longest = "";
  for (i = 0; i < array.length; i++) {
    if (array[i].length > longest.length) {
      longest = array[i];
    }
  }
  return longest;
};

// console.log(longest(["cat", "ddsd", "dog"]));

/* EXERCISE 19
Write a function to create a very simple anti spam filter for your mailbox. The function takes a string emailContent, and returns a boolean.
Check if the email is valid using string methods. The email (in this example) is valid if the words SPAM and SCAM does not appear.
*/

const isEmailSpam = function (emailContent) {
  emailContent = emailContent.toUpperCase();
  if (emailContent.includes("SCAM") || emailContent.includes("SPAM")) {
    return true;
  } else {
    return false;
  }
};

// console.log(isEmailSpam("hello spam ello"));
// console.log(isEmailSpam("hello Spam ello"));
// console.log(isEmailSpam("scam spam ellospamello"));
// console.log(isEmailSpam("sCam"));
// console.log(isEmailSpam("safe"));

/* EXERCISE 20
Write a function that receives a date d as parameter and calculates the number of days passes since the d.
*/

newExercise(20);

const today = new Date();
const todayDate = [today.getDate(), today.getMonth() + 1, today.getFullYear()];

const daysPassed = function (date) {
  // Create array
  let dateArray = [];
  if (date.includes("-")) {
    dateArray = date.split("-").map(Number);
  }
  if (date.includes(".")) {
    dateArray = date.split(".").map(Number);
  }
  if (date.includes("/")) {
    dateArray = date.split("/").map(Number);
  }

  // Position of day in the year function
  const getDayoftheYear = function (array) {
    let dayOfTheYear;
    if (array[1] == 1) {
      dayOfTheYear = array[0];
    }
    if (array[1] == 2) {
      dayOfTheYear = array[0] + 31;
    }
    if (array[1] == 3) {
      dayOfTheYear = array[0] + 59;
    }
    if (array[1] == 4) {
      dayOfTheYear = array[0] + 90;
    }
    if (array[1] == 5) {
      dayOfTheYear = array[0] + 120;
    }
    if (array[1] == 6) {
      dayOfTheYear = array[0] + 151;
    }
    if (array[1] == 7) {
      dayOfTheYear = array[0] + 181;
    }
    if (array[1] == 8) {
      dayOfTheYear = array[0] + 212;
    }
    if (array[1] == 9) {
      dayOfTheYear = array[0] + 243;
    }
    if (array[1] == 10) {
      dayOfTheYear = array[0] + 273;
    }
    if (array[1] == 11) {
      dayOfTheYear = array[0] + 304;
    }
    if (array[1] == 12) {
      dayOfTheYear = array[0] + 334;
    }
    return dayOfTheYear;
  };

  // function to add leap days
  const addLeapYearsForWholeYears = function (days, array1, array2) {
    let year1 = array1[2] + 1;
    let year2 = array2[2];
    for (i = year1; i < year2; i++) {
      if ((i % 4 == 0 && i % 100 != 0) || i % 400 == 0) {
        days++;
      }
    }
    return days;
  };

  const addLeapYearsForNotWholeYears = function (days, array1, array2) {
    let earliestYear = array1[2];
    let latestYear = array2[2];
    let earliestYearDay = getDayoftheYear(array1);
    let latestYearDay = getDayoftheYear(array2);
    let marchFirst = getDayoftheYear([1, 3]);
    if (
      ((earliestYear % 4 == 0 && earliestYear % 100 != 0) ||
        earliestYear % 400 == 0) &&
      earliestYearDay < marchFirst
    ) {
      days++;
    }
    if (
      ((latestYear % 4 == 0 && latestYear % 100 != 0) ||
        latestYear % 400 == 0) &&
      latestYearDay >= marchFirst
    ) {
      days++;
    }
    return days;
  };

  // Variables
  let daysOfFirstYear = 365 - getDayoftheYear(dateArray);
  let daysOfThisYear = getDayoftheYear(todayDate);
  let daysInbetween = (todayDate[2] - (dateArray[2] + 1)) * 365;
  let totalDays = daysOfFirstYear + daysOfThisYear + daysInbetween;

  // Calculation of days
  totalDays = addLeapYearsForWholeYears(totalDays, dateArray, todayDate);
  totalDays = addLeapYearsForNotWholeYears(totalDays, dateArray, todayDate);
  return totalDays;
};

console.log(daysPassed("25.02.2012"));

// Doesn't account for when its leap year but leap day hasnt yet occurred or when the date you input is in a leap year but its passed before input date

/* EXERCISE 21
Write a function "matrixGenerator" that receives x and y as parameter. The result should be a matrix of x times y with, as value, the index of the position.
Ex.: X = 3, Y = 2
["00","01","02"
"10","11","12"]
*/

newExercise(21);

const matrixGenerator = function (x, y) {
  let print = "";
  for (i = 0; i < x; i++) {
    console.log(print);
    for (j = 0; j < y; j++) {
      console.log(print);
    }
  }
};

// matrixGenerator(3, 2);
