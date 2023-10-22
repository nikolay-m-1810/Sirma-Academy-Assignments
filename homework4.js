//1. Sum First and Last array element

// function sumFandL(arr) {

//     let first = Number(arr[0]);
//     let last = Number(arr[arr.length-1]);
    
//     console.log(first + last);

// }
// sumFandL(['20', '30', '40']);
// sumFandL(['10', '17', '22', '33'])


//2. Day of week

// function dayOfWeek(n) {

//     let daysInWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

//     if (n <= 7) {
//         console.log(daysInWeek[n-1])
//     } else {
//         console.log("Invalid day!");
//     }

// }

// dayOfWeek(6)


//3. Reverse an Array of Numbers

// function reverse(n, arr) {

//     let reverseArr = [];

//     for (let i = n - 1; i >= 0; i--) {
//        reverseArr.push(arr[i]);
//     }

//     console.log(reverseArr);
// }

// reverse(3, [10, 20, 30, 40, 50]);
// reverse(4, [-1, 20, 99, 5]);
// reverse(2, [66, 43, 75, 89, 47]);


//4. Reverse arr of strings

// function arrOfStrings(arr) {

//     console.log(arr.reverse());

// }

// arrOfStrings(['a', 'b', 'c', 'd', 'e'])


//5. Sum even numbers

// function sumEvenNumbers(arr) {
//     let sum = 0;

//     for (let i = 0; i < arr.length; i++) {
//         let num = parseInt(arr[i]); // Parse the string to a number.
        
//         if (!isNaN(num) && num % 2 === 0) { // Check if it's a valid number and even.
//             sum += num; // Add even numbers to the sum.
//         }
//     }

//     console.log(sum);
// }

// sumEvenNumbers(['1', '2', '3', '4', '5', '6']);
// sumEvenNumbers(['3', '5', '7', '9']);
// sumEvenNumbers(['2', '4', '6', '8', '10']);


//6. Even and Odd subtraction

// function evenAndOddSubtraction(arr) {

//     let evenSum = 0;
//     let oddSum = 0;


//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] % 2 === 0) {
//             evenSum += arr[i];
//         } else {
//             oddSum += arr[i];
//         }
//     }

//     let result = evenSum - oddSum;
//     console.log(result);

// }

// evenAndOddSubtraction([1, 2, 3, 4, 5, 6]);
// evenAndOddSubtraction([3, 5, 7, 9]);


//7. Equal arrays

// function equalArrays(arr1, arr2) {

//     let sum = 0;
//     let equality = true;
//     let diffAtIndex = -1;

//     for (let i = 0; i < arr1.length; i++) {
//             if (arr1[i] == arr2[i]) {
//                 sum += Number(arr1[i]);
//             } else if (arr1[i] != arr2[i]) {
//                 diffAtIndex = i;
//                 equality = false;
//                 break;
//             }
//     }

//     if (equality) {
//         console.log(`Arrays are identical. Sum: ${sum}`);
//     } else {
//         console.log(`Arrays are not identical. Found difference at ${diffAtIndex} index;`);
//     }
// }

// equalArrays(['10', '20', '30'], ['10', '20', '30']);
// equalArrays(['1', '2', '3', '4', '5'], ['1', '2', '4', '4', '5']);
// equalArrays(['1'], ['10']);


// 8. Condense Array to Number

// function condense(arr) {

//     while (arr.length > 1) {
//         let condensed = [];


//         for (let i = 0; i < arr.length - 1; i++) {
//             condensed[i] = arr[i] + arr[i + 1];
//         }

//         arr = condensed;
//     }

//     console.log(arr[0]);
// }

// condense([2, 10, 3]);
// condense([5, 0, 4, 1, 2]);
// condense([1]);


//9. Print every N-th Element from an Array

// function printNthElement(arr, step) {

//     let result = [];

//     for (let i = 0; i < arr.length; i++) {
//         if (i % step == 0) {
//             result.push(arr[i])
//         }
//     }

//     console.log(result.join(' '));

// }

// printNthElement(['5', '15', '31', '14', '20'], 2)
// printNthElement(['dsa', 'asd', 'demo', 'test'], 2)
// printNthElement(['1', '2', '3', '4', '5'], 6)


//10. Add and remove elements from array

// function addAndRemove(arr) {

//     let result = [];
//     let counter = 0;

//     for (let i = 0; i <= arr.length; i++) {
//         if (arr[i] === 'add') {
//             counter++;
//             result.push(counter);
//         } else if (arr[i] === 'remove') {
//             result.pop(counter);
//         }
//     }

//     if (arr.length == 0) {
//         console.log("Empty");
//     } else {
//         console.log(result.join(' '));
//     }

// }

// addAndRemove(['add', 'add', 'add', 'add']);
// addAndRemove(['add', 'add', 'remove', 'add', 'add']);
// addAndRemove(['remove', 'remove', 'remove']);


//11. Rotate Array


// function rotateArr(arr, n) {
    
    
//     while (n > 0){
//         let last = arr.pop();
//         arr.unshift(last);
//         n--;
//     }
    
    
//     console.log(arr);
   
// }

// rotateArr(['1', '2', '3', '4'], 2);
// rotateArr(['Banana', 'Orange', 'Coconut', 'Apple'], 15);


//12. Extract a Non-Decreasing Subsequence from an Array

// function nonDecreasing(arr) {

//     let result = [];

//     for (let i = 0; i < arr.length; i++) {
//             if (i === 0 || arr[i] >= arr[i - 1]) {
//                 result.push(arr[i]);
//             }  
//         }

//     console.log(result);
// }

// nonDecreasing([1, 3, 8, 4, 10, 12, 3, 2, 24]);
// nonDecreasing([1, 2, 3, 4]);


//13. Negative / Positive Numbers

// function negativeAndPositive(arr) {
//     let result = [];

//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] < 0) {
//             result.unshift(arr[i]); 
//         } else {
//             result.push(arr[i]); 
//         }
//     }

//     console.log(result);
// }

// negativeAndPositive([7, -2, 8, 9]);
// negativeAndPositive([3, -2, 0, -1]);


//14. First and Last K Numbers

// function firstAndLast(k, arr) {

//     let first = arr.slice(0, k);
//     let second = arr.slice(arr.length - k);

//     console.log(first);
//     console.log(second);
// }

// firstAndLast(2, [7, 8, 9]);
// firstAndLast(3, [6, 7, 8, 9]);


//15. Last K Numbers Sequence

// function lastKNumbers(n, k) {

//     let result = [1];

//     for (let i = 1; i < n; i++) {
//         let sum = 0;
//         let startIdx = Math.max(0, i - k);
//         for (let j = startIdx; j < i; j++) {
//             sum += result[j];
//         }
//         result.push(sum);
//     }

//     console.log(result.join(' '));
// }

// lastKNumbers(6, 3);
// lastKNumbers(8, 2);


//16. Process Odd Numbers

// function oddNumbers(arr) {

//     let result = [];

//     for (let i = 0; i < arr.length; i++) {
//         if (i % 2 != 0) {
//             let double = Number(arr[i]) * 2;
//             result.push(double); 
//         }
//     }

//     console.log(result.reverse());
// }

// oddNumbers([10, 15, 20, 25]);
// oddNumbers([3, 0, 10, 4, 7, 3]);


//17. Smallest Two Numbers

// function smallestTwoNums(arr) {

//     arr.sort((a, b) => a - b);
//     let result = arr.slice(0, 2);

//     console.log(result.join(' '));
// }

// smallestTwoNums([30, 15, 50, 5]);
// smallestTwoNums([3, 0, 10, 4, 7, 3]);


//18. List of products

// function listOfProducts(arr) {

//     arr.sort();

//     for (let i = 1; i <= arr.length; i++) {
//         console.log(`${i}. ${arr[i-1]}`);
//     }
// }

// listOfProducts(["Potatoes", "Tomatoes", "Onions", "Apples"]);


//19. Array Manipulations

// function arrManipulation() {

    
// }
