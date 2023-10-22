//1. Smallest of Three Numbers

// function smallesfOfThree(a, b, c) {

//     let result = Math.min(a, b, c);
//     console.log(result);
// }

// smallesfOfThree(2, 5, 3);
// smallesfOfThree(600, 342, 123);
// smallesfOfThree(25, 21, 4);


//2. Add and Subtract

// function sum(a, b) {

//     return a + b;
// }

// function subtract(result, c) {

//     console.log(result - c); 
// }

// let firstTwoSum = sum(23, 6);
// subtract(firstTwoSum, 10);


//3. Characters in Range

// function charsInRange(a, b) {

//     let start = a.charCodeAt(0);
//     let end = b.charCodeAt(0);

//     for (let i = start + 1; i < end; i++) {
//         let char = String.fromCharCode(i);
//         console.log(char);
//     }

//     console.log('\n');
// }

// charsInRange('a', 'd');
// charsInRange('#', ':');


//4. Odd and Even Sum

// function oddEvenSum(n) {

//     n = n.toString();

//     let even = 0;
//     let odd = 0;
    
//     for (let i = 0; i < n.length; i++) {
//         if (n[i] % 2 == 0) {
//             even += parseInt(n[i]);
//         } else {
//             odd += parseInt(n[i])
//         }
//     }


//     console.log(`Odd sum = ${odd}, Even sum = ${even}`);
// }

// oddEvenSum(1000435);
// oddEvenSum(3495892137259234);


//5. Palindrome Numbers

// function paliNumbers(arr) {

//     for (let i = 0; i < arr.length; i++) {
//         let strNumber = arr[i].toString();
//         let reversedNumber = strNumber.split('').reverse().join('');

//         console.log(strNumber === reversedNumber);
//     }
// }

// paliNumbers([123, 323, 421, 121]);
// paliNumbers([32, 2, 232, 1010]);


//6. Password Validator

// function passValidator(password) {

//     let isValid = true;

//     if (!(password.length >= 6 && password.length <= 10)) {
//         console.log("Password must be between 6 and 10 characters");
//         isValid = false;
//     }

//     if (!/^[a-zA-Z0-9]+$/.test(password)) {
//         console.log("Password must consist only of letters and digits");
//         isValid = false;
//     }

//     if ((password.match(/\d/g) || []).length < 2) {
//         console.log("Password must have at least 2 digits");
//         isValid = false;
//     }

//     if (isValid) {
//         console.log("Password is valid");
//     }

//     console.log('\n');
// }

// passValidator('pass');
// passValidator('APass123');
// passValidator('Pa$s$s');


//7. Shortest and Longest Word

// function shortestAndLongestWords(str) {

//     let newStr = str.split(' ');

//     let longestWord = newStr[0];
//     let shortestWord = newStr[0];

//     for (let i = 0; i < newStr.length; i++) {
//         let currWord = newStr[i];

//         if (currWord.length > longestWord.length){
//             longestWord = currWord;

//         } else if (currWord.length < shortestWord.length) {
//             shortestWord = currWord;
//         }
//     }



//     console.log(`Longest -> ${longestWord}\nShortest -> ${shortestWord}`);
// }

// shortestAndLongestWords('Hello how are you today? I hope you are fine');
// shortestAndLongestWords('Lorem Ipsum is dummy text of the typesetting industry');

//8. Perfect Number

// function perfectNumber(num) {

//     sum = 0;

//     for (let i = 0; i < num; i++) {
//         if (num % i === 0) {
//             sum+=i;
//         }
//     }

//     if (num == sum) {
//         console.log('Perfect number!');
//     } else {
//         console.log('Not perfect');
//     }
// }

// perfectNumber(6);
// perfectNumber(28);
// perfectNumber(1236498);


//9. Progress Bar

// function progressBar(num) {

//     let steps = num / 10;
//     let bar = '';

//     for (let i = 0; i < 10; i++) {
//         if (i < steps) {
//             bar += '#'
//         } else {
//             bar += '.'
//         }
//     }

//     console.log(`${num}% [${bar}]\n `);

//     if (num === 100) {
//         console.log('Complete!');
//     } else {
//         console.log('Loading...');
//     }
// }

// progressBar(30);
// progressBar(50);
// progressBar(100);


//10. Factorial Division

// function factorialDiv(a, b) {

//     let resultA = 1;
//     let resultB = 1;

//     for (let i = 1; i < a + 1; i++ ) {
//         resultA *= i;
//     }

//     for (let j = 1; j < b + 1; j++ ) {
//         resultB *= j;
//     }

//     let result = resultA / resultB;
//     console.log(result.toFixed(2));
    

// }


// factorialDiv(5, 2);
// factorialDiv(6, 2);
