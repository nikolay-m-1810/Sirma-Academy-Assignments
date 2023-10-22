// let a = 10;
// let b = 5;

// console.log(a > b);
// console.log(a > 0);
// console.log(a > 500000);
// console.log(a < a);
// console.log(a <= 10);
// console.log(b == 50 / a);
// console.log(a != b);

// let a = 5;
// let b = "5";

// console.log(a == b); //returns true since the values are equal
// console.log(a === b); //returns false since the values are true but their types are different

// function showGrade(grade) {
//     if (grade >= 5.50) {
//         console.log("Excellent!");
//     } else {
//         console.log("Failed");
//     }
// }



// function showGreater(a, b) {
//     if (a > b) {
//         console.log("Greater number is: " + a);
//     } else {
//         console.log("Greated number is: " + b);
//     }
// }


// showGreater(10, 10);

// function showGrade(grade) {
//     if (grade < 3) {
//         console.log("failed");
//     } else if (grade < 4) {
//         console.log("passable");
//     } else if (grade < 5) {
//         console.log("good");
//     } else if (grade < 6) {
//         console.log("very good");
//     } else if (grade >= 6) {
//         console.log("excellent");
//     }
// }

// showGrade(2);
// showGrade(3);
// showGrade(4);
// showGrade(5);
// showGrade(6);


// function showNumberAsText (number) {
//     if (number < 0) {
//         console.log("Number too small");
//     } else if (number == 0) {
//         console.log("Zero");
//     } else if (number == 1) {
//         console.log("One");
//     } else if (number == 2) {
//         console.log("Two");
//     } else if (number == 3) {
//         console.log("Three");
//     } else if (number == 4) {
//         console.log("Four");
//     } else if (number == 9) {
//         console.log("Nine");
//     }
// }

// showNumberAsText(1);
// showNumberAsText(2);
// showNumberAsText(3);
// showNumberAsText(9);


// function greeting(gender, age, name) {
//     if (gender === "f") {
//         if(age < 16) {
//             console.log("Welcome, Miss " + name);
//         } else {
//             console.log("Welcome, Ms. " + name);
//         }
//     } else {
//         if (age < 16) {
//             console.log("Welcome, Mister " + name);
//         } else {
//             console.log("Welcome, Mr. " + name);
//         }
//     }
// }

// greeting("f", 15, "Maria");
// greeting("m", 15, "Marin");
// greeting("f", 30, "Daniela");
// greeting("m", 30, "Go6ko");

// let a = 6;
// if (a > 5) {
//     if (a < 10) {
//         console.log("A is greater than 5 and less than 10");
//     }
// }

// if (a > 5 && a < 10) {
//     console.log("A is greater than 5 and less than 10");
// }


// function productCalculator(product, day, quantity) {

//     let totalPrice = 0;

//     if (day === "Saturday" || day === "Sunday") {
//         switch(product) {
//             case "tomato":
//                 totalPrice = quantity * 2.50
//                 break;
//             case "onion":
//                 totalPrice = quantity * 1.30
//                 break;
//             case "lettuce":
//                 totalPrice = quantity * 0.85;
//                 break;
//             case "pepper":
//                 totalPrice = quantity * 3.50;
//                 break;
//             default:
//                 console.log("No such product");
//         }
//     } else {
//         switch(product) {
//             case "tomato":
//                 totalPrice = quantity * 2.80
//                 break;
//             case "onion":
//                 totalPrice = quantity * 1.70
//                 break;
//             case "lettuce":
//                 totalPrice = quantity * 1.45;
//                 break;
//             case "pepper":
//                 totalPrice = quantity * 5.50;
//                 break;
//             default:
//                 console.log("No such product");
//         }
//     }

//     if (totalPrice > 0) {
//         console.log("Your total sum is: " + totalPrice);
//     }
// }

// productCalculator("tomato", "Saturday", 5)