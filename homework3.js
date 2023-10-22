//1. Numbers from 0 to 100

// for (let i = 0; i < 100; i+=1) {
//     console.log(i);
// }

//2. Numbers N to 0 in reverse order

// function reverseOrder(n) {
    
//     for (let i = n; i >= 1; i--) {
//         console.log(i);
//     }
// }

// reverseOrder(10)
// reverseOrder(5)


//3. Numbers 1 t0 N through 2

// function incrementByTwo(n) {

//     for (let i = 1; i <= n; i+=2) {
//         console.log(i);
//     }
// }

// incrementByTwo(10)
// incrementByTwo(5)


//4. Numbers 1 to N through M

// function exerciseFour(n ,m) {

//     for (let i = 1; i <= n; i+=m) {
//         console.log(i);
//     }
// }

// exerciseFour(10, 2)  
// exerciseFour(8, 3)


//5. Letters in a word
// function lettersInWord(word) {

//     for (let i = 0; i < word.length; i++) {
//         console.log(word[i])
//     }

// }

// lettersInWord("hello");
// lettersInWord("Bulgaria");


//6. Sum of vowels

// function sumOfVowels(str) {

//     let sum = 0;
//     let values = {
//         "a": 1,
//         "e": 2,
//         "i": 3,
//         "o": 4,
//         "u": 5
//     }

//     for (let i = 0; i < str.length; i++) {
//         let char = str[i];
//         if (char in values) {
//             sum += values[char];
//         }
//     }

//     console.log(sum);
// }

// sumOfVowels("hello");
// sumOfVowels("hi");
// sumOfVowels("bye")


//7. Clock

// function clock() {

//     for (let h = 0; h <= 23; h++) {
//         for (let m = 0; m <= 59; m++) {
//             console.log(`${h}:${m}`)
//         }
//     }

// }

// clock()


//8. Multiplication table

// function multiplicationTable() {
    
  

//     for (let a = 1; a <= 10; a++ ) {
//         for (let b = 1; b <= 10; b++) {
//             let result = a * b;
//             console.log(a + " * " + b + " = " + result);
//         }
//     }
// }

// multiplicationTable()


//9. Sum of even numbers

// function sumOfEvenNums(n) {

//     let sum = 0;
//     let evenNumber = 2;

//     for (let i = 0; i < n; i++) {
//         sum += evenNumber;
//         evenNumber += 2;
//     }

//     console.log(sum);
// }

// sumOfEvenNums(3)
// sumOfEvenNums(5)


//10. Factorial Calculation

// function factorialCalc(n) {

//     let answer = 1;

//     for (let i = n; i >= 1; i--) {
//         answer = answer * i;
        
//     }

//     console.log(answer)
// }

// factorialCalc(5)
// factorialCalc(3)


//11. Number Reversal

// function numReversal(n) {

//     let result = Number(String(n).split('').reverse().join(''));

//     console.log(result);
// }

// numReversal(123)
// numReversal(9876)


//12. Fibonacci Sequence Sum

// function fibonacci(n) {
//     let n1 = 0;
//     let n2 = 1;

//     let sum = n2;

//     for (let i = 1; i < n; i++) {
//         let nextNum = n1 + n2;
//         sum += nextNum;
//         n1 = n2;
//         n2 = nextNum;
//     }

//     console.log(sum);

// }

// fibonacci(3);


// 13. Palindrome Check

// function ifPalindrome(str) {

//     let word = str.split("");
//     let pali = str.split("").reverse();

//     if (word.join("") == pali.join("")) {
//         console.log("true");
//     } else {
//         console.log("false");
//     }


    //alternative solution:

    // const len = str.length;
    // for (let i = 0; i < len / 2; i++) {
    //     if (str[i] !== str[len - 1 - i]) {
    //         return false;
    //     }
    // }
    // return true;

    // console.log(word);
    // console.log(pali);

// }

// ifPalindrome("radar");
// ifPalindrome("java");
// ifPalindrome("racecar");
// ifPalindrome("hello");


//14. Armstronng Number Check

// function armstrongNum(n) {

//     let numToStr = n.toString();
//     let numOfDigits = numToStr.length;

//     let sum = 0;

//     for (let i = 0; i < numOfDigits; i++) {
//         let digit = parseInt(numToStr[i]);
//         sum += Math.pow(digit, numOfDigits);
//     }

//     if (n === sum) {
//         console.log("true");
//     } else {
//         console.log("false");
//     }
// }

// armstrongNum(153);
// armstrongNum(370);
// armstrongNum(123);
// armstrongNum(407);


//15. Collatz Conjecture

// function collatzConjecture(n) {

//     while (n != 1) {

//         console.log(n);

//         if (n % 2 == 0) {
//             n = n / 2;
//         } else {
//             n = (n * 3) + 1;
//         }
//     }

//     console.log(n);
// }

// collatzConjecture(6);
// collatzConjecture(12);


//16. Hollow Rectangle Pattern

// function hollowRectangle(n, m) {

//     for (let i = 0; i < n; i++) {
//         let row = '';
//         for (let j = 0; j < m; j++) {
//             if (i == 0 || i == n - 1 || j == 0 || j == m - 1) {
//                 row += '*';
//             } else {
//                 row += ' ';
//             } 
//         }
//         console.log(row);
//     }
// }


// hollowRectangle(4, 6);


//17. New Building

// function newBuilding(floors, rooms) {
//     for (let j = 0; j < floors; j++) {
//         let floor = '';
//         let floorType = (j % 2 === 0) ? 'O' : 'A';
//         if (j === 0) {
//             floorType = 'L';
//         }
        
//         for (let i = 0; i < rooms; i++) {
//             floor += `${floorType}${i}${j}  `;
//         }
        
//         console.log(floor);
//     }
// }

// newBuilding(6, 4);


//18. Magic Number

// function magicNumber(a, b, c) {

//     let combinationCount = 0;

//     for (let i = a; i < b; i++){ 
//         for (let j = a; j < b; j++) {
            
//             combinationCount++;
//             let sum = i + j;

//             if (sum == c){
//                 console.log(`Combination ${combinationCount} - (${i} + ${j} = ${c})`);

//             }
//         }
//     }

//     console.log(`${combinationCount} combinations - neither equals ${c}`);

// }

// magicNumber(1, 10, 5);


//19. Padawan Equipment

// function padawanEquipment(money, students, lightsaberPrice, robePrice, beltPrice ) {

//     let freeBelts = Math.floor(students / 6);

//     let totalPrice = Math.ceil(students * 1.1) * lightsaberPrice + students + robePrice + (students - freeBelts) * beltPrice;

    

//    if (money >= totalPrice) {
//         console.log(`The money is enough - it would cost ${totalPrice.toFixed(2)}lv.`);
//    } else {
//         let neededMoney = (totalCost - money).toFixed(2);
//         console.log(`George Lucas will need ${neededMoney.toFixed(2)}lv. more`);
//    }

// }

// padawanEquipment(100, 2, 1.0, 2.0, 3.0);


// 20. Rage Expenses

// function rageExpenses(gamesLost, headsetPrice, mousePrice, keyboardPrice, displayPrice) {
//     let headsetExpenses = 0;
//     let mouseExpenses = 0;
//     let keyboardExpenses = 0;
//     let displayExpenses = 0;

//     for (let i = 1; i <= gamesLost; i++) {
//         if (i % 2 === 0) {
//             headsetExpenses += headsetPrice;
//         }

//         if (i % 3 === 0) {
//             mouseExpenses += mousePrice;
//         }

//         if (i % 2 === 0 && i % 3 === 0) {
//             keyboardExpenses += keyboardPrice;
//             if (keyboardExpenses % 2 === 0) {
//                 displayExpenses += displayPrice;
//             }
//         }
//     }

//     const totalExpenses = headsetExpenses + mouseExpenses + keyboardExpenses + displayExpenses;
//     console.log(`Rage expenses: ${totalExpenses.toFixed(2)} lv.`);
// }


// rageExpenses(7, 2, 3, 4, 5); 
// rageExpenses(23, 12.50, 21.50, 40, 200); 


//21. Refactor Sum of Odd Numbers

// function refactorSum(n) {

//     let sum = 0;
//     for (let i = 0; i < n; i++) {
//         console.log(2 * i + 1);
//         sum += 2 * i + 1;
//     }

//     console.log(`Sum: ${sum}`);

// }

// refactorSum(5)


//22. Numbers up to 1000, ending in 7

// function endIn7() {

//     for (let i = 1; i <= 1000; i++) {
//         if (i % 10 === 7) {
//             console.log(i);
//         }
//     }
// }

// endIn7();


// function endInN(n) {
//     for (let i = 1; i <= 1000; i++) {
//         if (i % 10 === n) {
//             console.log(i);
//         }
//     }
// }

// endInN(6)


//24. Encoding


// function encoding(n) {

//    let reversedNumber = 0;
//    let temp = n;

//    while (temp !== 0) {
//         let digit = temp % 10;
//         reversedNumber = reversedNumber * 10 + digit;
//         temp = Math.floor(temp / 10);
//    }

//    while (reversedNumber !== 0) {
//     let digit = reversedNumber % 10;
//     let asciiCode = digit + 33;
//     let symbol = String.fromCharCode(asciiCode);

//     if (digit === 0) {
//         console.log("ZERO");  
//     } else {
//         console.log(symbol.repeat(digit));
//     }
    
//     reversedNumber = Math.floor(reversedNumber / 10);
// }

// }

// encoding(9347439);


//25. Coins and Notes

// function coinsAndNotes(oneLv, twoLv, fiveLv, targetSum) {

//     let count = 0;

//     for (let count1lv = 0; count1lv <= oneLv; count1lv++) {
//         for (let count2lv = 0; count2lv <= twoLv; count2lv++) {
//             for (let count5lv = 0; count5lv <= fiveLv; count5lv++) {
//                 let sum = count1lv * 1 + count2lv * 2 + count5lv * 5;

//                 if (sum == targetSum) {
//                     console.log(`${count1lv} * 1 lv. + ${count2lv} * 2 lv. + ${count5lv} * 5 lv. = ${sum} lv.`);
//                     count++;
//                 }
                
//             } 
//         }
//     }

// }

// coinsAndNotes(3, 2, 3, 10);
// coinsAndNotes(5, 3, 1, 7);


//26. Even Pairs

// function evenPairs(firstInitValue, secondInitValue, firstPairDiff, secondPairDiff) {

    

// }


//27. Change

// function change(amount) {

//     let coinValues = [100, 50, 20, 10, 5, 2, 1];
//     let stotinki = Math.round(amount * 100);
    


//     for (let i = 0; i < amount.coinValues; i++) {
        
//         }
//     }


// change(2)
