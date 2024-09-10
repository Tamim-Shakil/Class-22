//***************************************Question 01***********************************
let X = 20;
let Y = 10;

if (X > Y) {
  console.log("Maxnumber = X");
} else {
  console.log("Maxnumber = Y");
}

//**************************************Question 02************************************
let checkNumber1 = 1;
let checkNumber2 = -1;
let checkNumber = 0;
if (checkNumber1 > 0) {
  console.log("The number is positive.");
} else if (checkNumber2 < 0) {
  console.log("The number is negative.");
} else {
  console.log("The number is zero.");
}

//****************************************Question 03**********************************
let num = 50;
if (num % 10 === 0) {
  console.log("The number is divisible by 10.");
} else {
  console.log("The number is not divisible by 10.");
}

//*****************************************Question 04*********************************
let number = 40;
if (number % 2 === 0) {
  console.log("The number is even.");
} else {
  console.log("The number is odd");
}

//******************************************Question 05********************************
let isAlphabet = "a";
let uppercaseChar = isAlphabet.toUpperCase();

if (uppercaseChar >= "A" && uppercaseChar <= "Z") {
  console.log("True");
} else {
  console.log("False");
}

//*******************************************Question 06*******************************
let temperature = 30;

if (temperature >= 30) {
  console.log("It's hot!");
} else if (temperature <= 25) {
  console.log("It's cold.");
} else {
  console.log("It's normal.");
}

//******************************************Question 07********************************
let num1 = 200;
let num2 = 2000;
let num3 = 100;

if (num1 > num2) {
  if (num1 > num3) {
    console.log("Number 1 is bigger");
  } else {
    console.log("Number 3 is bigger");
  }
} else {
  if (num2 > num3) {
    console.log("Number 2 is bigger");
  } else {
    console.log("Number 3 is bigger");
  }
}

//*****************************************Question 08*********************************
let x = 20;
if (x % 2 === 0) {
  console.log("Even Number");
} else {
  console.log("Odd Number");
}

//*****************************************Question 09**********************************
let numOne = 35;
let numTwo = 40;

if (numOne > 30 && numTwo > 30) {
  console.log("Both numOne and numTwo are greater than 30.");
} else {
  console.log("At least one of numOne and numTwo is not greater than 30.");
}

//******************************************Question 10********************************
let age = 19;

if (age >= 13 && age <= 19) {
  console.log("Teenager");
} else {
  console.log("Not a teenager");
}

//****************************************Question 11**********************************
function checkForJavaScript(str1, str2) {
  let result = str1 === "JavaScript" || str2 === "JavaScript";
  return result;
}

let str1 = "Python";
let str2 = "JavaScript";
console.log(checkForJavaScript(str1, str2));

str1 = "Java";
str2 = "Python";
console.log(checkForJavaScript(str1, str2));

//**************************************Question 12*************************************
function calculateGrade(math, english, physics) {
  // Calculate total marks
  let totalMarks = math + english + physics;

  // Calculate average marks
  let averageMarks = totalMarks / 3;

  // Determine grade based on averege marks
  let grade;
  if (averageMarks >= 90) {
    grade = "Grade A";
  } else if (averageMarks >= 80) {
    grade = "Grade B";
  } else if (averageMarks >= 70) {
    grade = "Grade C";
  } else if (averageMarks >= 60) {
    grade = "Grade D";
  } else if (averageMarks >= 40) {
    grade = "Grade E";
  } else {
    grade = "Grade F";
  }

  return {
    totalMarks: totalMarks,
    averageMarks: averageMarks.toFixed(2),
    grade: grade,
  };
}

let mathMarks = 85;
let englishMarks = 78;
let physicsMarks = 92;

let result = calculateGrade(mathMarks, englishMarks, physicsMarks);
console.log(`Total Marks: ${result.totalMarks}`);
console.log(`Average Marks: ${result.averageMarks}`);
console.log(result.grade);

//************************************Question 13**********************************
function getRandomNumber() {
  let randomNumber = Math.floor(Math.random() * 10) + 1;
  return randomNumber;
}
console.log(getRandomNumber());

//**********************************Question 14*************************************
// Arrays
let studentNames = ["Shovo", "Shakil", "Showrab", "Aronno", "Ayan"];
let subjects = ["Math", "English", "Physics", "Chemistry", "Biology"];
let scores = [85, 78, 92, 88, 76];

//Object representing a student:
let student = {
  name: "Shovo",
  age: 16,
  grade: "11th",
  scores: {
    math: 85,
    english: 90,
    physics: 78,
  },
};

//Object representing a book:
let book = {
  title: "To Kill a Mockingbird",
  author: "Harper Lee",
  yearPublished: 1960,
  genres: ["Southern Gothic", "Bildungsroman"],
};

//Object representing a car:
let carName = {
  make: "Tesla",
  model: "Model S",
  year: 2023,
  features: ["Autopilot", "Electric", "Long Rage"],
};

//***************************************Question 15*********************************
let value = 10;
while (value <= 50) {
  console.log(value);
  value++;
}

//*************************************Question 16************************************
for (let value = 20; value <= 60; value++) {
  console.log(value);
}

//***************************************Question 17**********************************
function addTwoNumbers(num1, num2) {
  return num1 + num2;
}

let number1 = 5;
let number2 = 7;
let outcome = addTwoNumbers(number1, number2);
console.log(`The sum of ${number1} and ${number2} is ${outcome}.`);

//**************************************Question 18************************************
function generateNumberList(initialValue, finalValue) {
  let numberList = [];
  for (let value = initialValue; value <= finalValue; value++) {
    numberList.push(value);
  }
  return numberList;
}

let start = 20;
let end = 60;
let resultList = generateNumberList(start, end);
console.log(resultList);

//************************************Question 19**************************************
function isLeapYear(year) {
  // Leap years are divisible by 4
  // Except if they are divisible by 100, then they must also be divisible by 400
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}

let year = 2024;
console.log(isLeapYear(year));

//************************************Question 20*************************************
function checkTemperature(temperature) {
  if (temperature >= 30) {
    return "hot";
  } else if (temperature <= 25) {
    return "cold";
  } else {
    return "normal";
  }
}

let temp1 = 35;
let temp2 = 20;
let temp3 = 28;

console.log(`Temperature ${temp1} is ${checkTemperature(temp1)}.`);
console.log(`Temperature ${temp2} is ${checkTemperature(temp2)}.`);
console.log(`Temperature ${temp3} is ${checkTemperature(temp3)}.`);

//************************************Question 21*************************************
function checkOddEven(number) {
  if (number % 2 === 0) {
    return "even";
  } else {
    return "odd";
  }
}

let Num1 = 10;
let Num2 = 7;

console.log(`${Num1} is ${checkOddEven(Num1)}.`);
console.log(`${Num2} is ${checkOddEven(Num2)}.`);

//************************************Question 22**************************************
function modifyArray(arr) {
  // Remove two items starting from index 2
  arr.splice(2, 2);

  // Add two new elements at index 2
  arr.splice(2, 0, "newElement1", "newElement2");

  return arr;
}

let originalArray = ["item1", "item2", "item3", "item4", "item5"];
console.log("Original Array:", originalArray);

let modifiedArray = modifyArray(originalArray);
console.log("Modified Array:", modifiedArray);

//***********************************Question 23*************************************
let arr = [2, 45, 4, 55, 12, 42, 34, 78];

// Reverse the array
arr.reverse();
console.log("Reversed Array:", arr);

// Sort the reversed array
arr.sort((a, b) => a - b);
console.log("Sorted Reversed Array:", arr);

//************************************Question 24***********************************
let car = {
  brand: "Toyota",
  model: "Camry",
  year: 2020,
  color: "Silver",
  mileage: 5000,

  // Method to display car details
  displayDetails: function () {
    console.log(
      `Brand: ${this.brand}, Model: ${this.model}, Year: ${this.year}, Color: ${this.color}, Mileage: ${this.mileage}`
    );
  },

  // Method to update mileage
  updateMileage: function (newMileage) {
    this.mileage = newMileage;
    console.log(`Mileage updated to ${this.mileage}.`);
  },
};

// Call the methods using "this" keyword
car.displayDetails();
car.updateMileage(6000);
car.displayDetails();

//***********************************Question 25***********************************
let text = "I love coding";

// Split the string into an array of characters, reverse the array, and join the characters
let reversedText = text.split("").reverse().join("").toLowerCase();
console.log(reversedText);

//*********************************Question 26*************************************
let items = ["Apple", "Banana", "Orange", "Mango", "Grapes"];

// Iterate over the array using a "for loop"
for (let i = 0; i < items.length; i++) {
  console.log(items[i]);
}

//********************************************************ENDS********************************************************
