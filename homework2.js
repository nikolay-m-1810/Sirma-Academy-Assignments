// 2. check for excellent grading

// function checkRating(r) {
//     if (r >= 5.50) {
//         console.log("Excellent!");
//     } else {
//         console.log("No output");
//     }
// }

// checkRating(6)
// checkRating(5)
// checkRating(5.51)


// 3. Large number

// function getLargerNumber(a, b) {
//     if (a > b) {
//         console.log(a);
//     } else {
//         console.log(b);
//     }
// }


// getLargerNumber(2, 4)
// getLargerNumber(7, 12)


// 4. Number from 0 to 9 with words

// function numberToWords(n) {

//     let numbersInWords = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];

//     if (n >= 0 && n <= 9) {
//         console.log(numbersInWords[n]);
//     } else {
//         console.log("Too big");
//     }
// }

// numberToWords(3);
// numberToWords(5);
// numberToWords(7);
// numberToWords(10);



// 5. Face of figures

// function faceOfFigures(figure, a, b) {
    
//     let result = 0;
//     switch (figure) {
//         case "square":
//             result = a * a
//             console.log(result);
//             break;
//         case "rectangle":
//             result = a * b
//             console.log(result);
//             break;
//         case "triangle":
//             result = (a * b) / 2
//             console.log(result);
//             break;
//         case "circle":
//             result = Math.PI * Math.pow(a, 2);
//             console.log(result);
//         default:
//             console.log("Invalid figure");
//     }
// }


// faceOfFigures("square", 5);
// faceOfFigures("rectangle", 10, 3.5);
// faceOfFigures("triangle", 4.5, 20);
// faceOfFigures("circle", 10);



// 6. Day of the week

// function dayOfWeek(n) {

//     switch(n) {
//         case 1:
//             console.log("Monday")
//             break;
//         case 2:
//             console.log("Tuesday")
//             break;
//         case 3:
//             console.log("Wednesday")
//             break;
//         default:
//             console.log("Error")
//     }

  
// }


// dayOfWeek(1);
// dayOfWeek(2);
// dayOfWeek(3);
// dayOfWeek(8);



// 7. Even or odd

// function evenOrOdd(n) {

//     if (n % 2 == 0) {
//         console.log("even")
//     } else {
//         console.log("odd")
//     }
// }

// evenOrOdd(2);
// evenOrOdd(3);
// evenOrOdd(15);
// evenOrOdd(1024);



// 8. Speed

// function speedInfo(s) {
//     if (s <= 10) {
//         console.log("slow");
//     } else if (s > 10 && s <= 60) {
//         console.log("average");
//     } else if (s > 60 && s <= 120) {
//         console.log("fast");
//     } else if (s > 120 && s <= 160) {
//         console.log("super-fast");
//     } else {
//         console.log("turbo-fast");
//     }
// }

// speedInfo(10);
// speedInfo(59);
// speedInfo(120);
// speedInfo(121);
// speedInfo(183);


// 9. Alarm after 15 minutes

// function alarmAfter15Minutes(h, m) {

//     m += 15;
    
//     if (m >= 60) {
//         let extraHours = Math.floor(m / 60);
//         h = (h + extraHours) % 24;
//         m = m % 60;
//     }

//     const formattedHour = h < 10 ? "0" + h : h;
//     const formattedMinutes = m < 10 ? "0" + m : m;

//     console.log(formattedHour + " : " + formattedMinutes);

// }

// alarmAfter15Minutes(1, 47);
// alarmAfter15Minutes(0, 2);
// alarmAfter15Minutes(23, 59);



// 10. Address by age and gender


// function ageAndGender(a, g) {

//     if (g == "f") {
//         if (a <= 16) {
//             console.log("Miss");
//         } else {
//             console.log("Ms.");
//         }
//     } else if (g == "m") {
//         if (a <= 16) {
//             console.log("Master") 
//         } else {
//             console.log("Mr.")
//         }
//     }

// }

// ageAndGender(14, "f");
// ageAndGender(17, "m");
// ageAndGender(10, "m");
// ageAndGender(32, "f");




// 11. Grocery

// function grocery(product, city, quantity) {
    
//     let productPrice;

//     switch (city) {
//         case "Sofia":
//             switch (product) {
//                 case "coffee":
//                     productPrice = 0.50;
//                     break;
//                 case "water":
//                     productPrice = 0.80;
//                     break;
//                 case "juice":
//                     productPrice = 1.20;
//                     break;
//                 case "sweets":
//                     productPrice = 1.45;
//                     break;
//                 case "chips":
//                     productPrice = 1.60;
//                     break;
//                 default: 
//                     console.log("Product not found");
//             }
//         break;
//         default: 
//             console.log("City not found");
//     }

//     let totalCost = productPrice * quantity;
//     console.log(totalCost.toFixed(2));


// }


// grocery("coffee", "Sofia", 2)



// 12. Number in the range


// function numInRange(n) {

//     if (n >= -100 && n <= 100 && n != 0) {
//         console.log("Yes");
//     } else {
//         console.log("No");
//     }
// }


// numInRange(-25)
// numInRange(0)
// numInRange(25)


// 13. simple calculator

// function simpleCalc(a, b, operation) {

//     let result = 0;

//     switch (operation) {
//         case "add":
//             result = a + b
//             break;
//         case "subtract":
//             result = a - b
//             break;
//         case "divide":
//             result = a / b
//             break;
//         case "multiply":
//             result = a * b
//             break;
//         default:
//             console.log("yok chisla");
//     }

//     console.log(result);
// }

// simpleCalc(5, 5, "add");
// simpleCalc(10, 12, "subtract");



// 14. vegetable market


// function vegetables(veg, day, quantity) {

//     day = day.toLowerCase();
//     let price;

//     if (day === "saturday" || day === "sunday") {
//         if (veg === "tomato") {
//             price = 2.80;
//         } else if (veg === "onion") {
//             price = 1.30;
//         } else if (veg === "lettuce") {
//             price = 0.85;
//         } else if (veg === "cucumber") {
//             price = 1.75;
//         } else if (veg === "pepper") {
//             price = 3.50;
//         } else {
//             console.log("Error")
//         }
    
//     } else {
//         if (veg === "tomato") {
//             price = 2.50;
//         } else if (veg === "onion") {
//             price = 1.20;
//         } else if (veg === "lettuce") {
//             price = 0.85;
//         } else if (veg === "cucumber") {
//             price = 1.45;
//         } else if (veg === "pepper") {
//             price = 5.50;
//         } 
//     } 

//     let totalCost = price * quantity;
//     console.log(totalCost.toFixed(2));

// }


// vegetables("tomato", "Tuesday", 2);
// vegetables("onion", "Sunday", 3);
// vegetables("banana", "Friday", 5)


// 15. Holiday

// function holiday(budget, season) {

//     if (budget <= 100) {
//         if (season == "summer") {
//             console.log("Somewhere in Bulgaria");
//             console.log("Camp " + budget * (30/100));
//         } else if (season == "winter") {
//             console.log("Somewhere in Bulgaria");
//             console.log("Hotel " + " - " +budget * (70/100));

//         }

//     } else if (budget <= 1000) {
//         if (season == "summer") {
//             console.log("Somewhere in Europe");
//             console.log("Camp " + budget * (40/100));
//         } else if (season == "winter") {
//             console.log("Somewhere in Europe");
//             console.log("Hotel " + " - " + budget * (80/100));

//         }
//     } else if (budget > 1000) {
//         console.log("Somewhere in Asia");
//         console.log("Hotel " + " - " + budget * (90/100))
//     }
// }


// holiday(75, "winter")
// holiday(312, "summer")
// holiday(1500, "summer")



// 16. Makeup shop


// function makeupShop(renovation, powders, lipsticks, spirals, shadows, concealer) {

//     let makeupPrices = {
//         powder: 2.60,
//         lipstick: 3,
//         spiral: 4.10,
//         shadows: 8.20,
//         concealer: 2
//     }

//     let totalPrice = (powders * makeupPrices.powder) + 
//     (lipsticks * makeupPrices.lipstick) +
//     (spirals * makeupPrices.spiral) +
//     (shadows * makeupPrices.shadows) +
//     (concealer * makeupPrices.concealer);

//     let totalQuantity = powders + lipsticks + spirals + shadows + concealer;

//     if (totalQuantity >= 50) {
//         totalPrice -= totalPrice * 0.25;
//     }

//     let rent = totalPrice * 0.1;
//     let moneyLeft = totalPrice - rent;
//     let moneyNeeded = rent - totalPrice;

//     if (moneyLeft >= renovation) {
//         console.log("Yes! " + moneyLeft.toFixed(2) + "lv. left")
//     } else {
//         console.log("Not enough money! " + moneyNeeded + "lv. needed")
//     }
// }

// makeupShop(40.8, 20, 25, 30, 50, 10);
// makeupShop(320, 8, 2, 5, 5, 1);


// 17. At sea

// function atSea(days, roomType, assessment) {

//     let totalPrice;
//     let daysToNights = days - 1;

//     if (roomType === "single room") {
//         totalPrice = daysToNights * 25;
//     }

//     if (roomType === "apartment") {
//         if (days < 10) {
//             totalPrice = (daysToNights * 50 * 0.7); // 30% discount
//         } else if (days >= 10 && days <= 15) {
//             totalPrice = (daysToNights * 50 * 0.65); // 35% discount
//         } else if (days > 15) {
//             totalPrice = (daysToNights * 50 * 0.5); // 50% discount
//         }
//     }

//     if (roomType === "presidential") {
//         if (days < 10) {
//             totalPrice = (daysToNights * 100 * 0.9); // 10% discount
//         } else if (days >= 10 && days <= 15) {
//             totalPrice = (daysToNights * 100 * 0.85); // 15% discount
//         } else if (days > 15) {
//             totalPrice = (daysToNights * 100 * 0.8); // 20% discount
//         }
//     }

//     if (assessment === "positive") {
//         totalPrice += totalPrice * 0.25; // 25% increase
//     } else if (assessment === "negative") {
//         totalPrice -= totalPrice * 0.1; // 10% decrease
//     }

//     console.log(totalPrice.toFixed(2));
// }


// atSea(11, "apartment", "positive"); 
// atSea(30, "presidential", "negative");
// atSea(12, "single room", "positive")


// 18. Grade Calculator

// function gradeCalc(percentage) {
//     if (percentage >= 90 && percentage <= 100) {
//         console.log("A");
//     } else if (percentage >= 80 && percentage <= 89) {
//         console.log("B");
//     } else if (percentage >= 70 && percentage <= 79) {
//         console.log("C");
//     } else if (percentage >= 60 && percentage <= 69) {
//         console.log("D");
//     } else if (percentage = 0 && percentage <= 59) {
//         console.log("F");
//     }
// }

// gradeCalc(95);
// gradeCalc(82);
// gradeCalc(76);


// 19. Leap Year Checker


// function leapYearChecker(year) {
//     if (year % 4 === 0 && year % 100 !== 0 || year % 400 === 0) {
//         console.log("Its a leap year!")
//     } else {
//         console.log("Its not a leap year!")
//     }
// }

// leapYearChecker(2020)
// leapYearChecker(1900)
// leapYearChecker(2000)
// leapYearChecker(2023)
// leapYearChecker(1600)


// 20. Movie Ticker Price


// function ticketPrice(age) {

//     if (age <= 12) {
//         console.log("$5")
//     } else if (age >= 13 && age <= 19) {
//         console.log("$8")
//     } else {
//         console.log("10$")
//     }
// }

// ticketPrice(10);
// ticketPrice(16);
// ticketPrice(25);


// 21. Days in a Month

// function daysInMonth(month) {

//     if (month == 2) {
//         console.log(28);
//     }

//     if (month % 2 == 0 && month != 2) {
//         console.log(30);
//     } else if (month % 2 !== 0) {
//         console.log(31);
//     } 
// }

// daysInMonth(1)
// daysInMonth(2)
// daysInMonth(4)
// daysInMonth(7)



// 22. Uni Admissions

// function uniAdmissions(score, extra) {

//     if (score >= 90) {
//         console.log("Admitted");
//     } else if (score >= 80 && score <= 89 && extra >= 2) {
//         console.log("Admitted")
//     } else {
//         console.log("Not admitted")
//     }
// }

// uniAdmissions(85, 3)
// uniAdmissions(88, 1)
// uniAdmissions(91, 0)



// 23. Discount Calc


// function discountCalc(age, membershipStatus) {

//     if (age < 18) {
//         console.log("10% discount");
//     } else if (age >= 18 && age <=64) {
//         if (membershipStatus == "Yes") {
//             console.log("20% discount");
//         } else if (membershipStatus == "No") {
//             console.log("10% discount");
//         }
//     } else {
//         console.log("30% discount")
//     }
// }

// discountCalc(20, "Yes");
// discountCalc(15, "No")
// discountCalc(70, "No")


// 24. Movie classification 

// function movieCategory(age) {
    
//     if (age < 13) {
//         console.log("U-rated movies only")
//     } else if (age >= 13 && age <= 17) {
//         console.log("U and PG-13")
//     } else {
//         console.log("All Movies")
//     }
// }

// movieCategory(10);
// movieCategory(16);
// movieCategory(21);


// 25. Airline Luggare Charges

// function luggageCharges(weight, dimensions) {

//     let totalFee = 0;

//     if (weight > 50) {
//         totalFee += 100;
//     }

//     if (dimensions > 158) {
//         if (dimensions <= 178) {
//             totalFee += 50;
//         } else if (dimensions <= 208) {
//             totalFee += 100;
//         } else {
//             totalFee += 200;
//         }
//     }

//     if (weight > 50 && dimensions > 208) {
//         totalFee += 50;
//     }
    
//     console.log("Total fees " + totalFee)
    
// }

// luggageCharges(52, 160)
// luggageCharges(48, 180)
// luggageCharges(55, 190)


// 26. Adventure Game: Path Decision


// function adventureGame(lefthand, righthand) {

//     if (righthand == "sword" || lefthand == "sword") {
//         if (righthand == "sword" || lefthand == "sword") {
//             console.log("Take the path to the castle");
//         } else {
//             console.log("Take the path to the forest");
//         }
//     } else if (righthand == "map" || lefthand == "map") {
//         if (righthand == "coins" || lefthand == "coins") {
//             console.log("Go to the town");
//         } else {
//             console.log("Camp at the current spot and prepare for the next day.");
//         } 
//     } else {
//         console.log("Wander aimlessly.")
//     }

// }

// adventureGame("sword", "shield");
// adventureGame("map", "coins");
// adventureGame("torch");


// 27. Potion Brewing Decision


// function potions(i1, i2) {

//     if (i1 == "herbs" || i2 == "herbs") {
//         if (i1 == "water" || i2 == "water") {
//             console.log("Health potion");
//         } else if (i1 == "oil" || i2 == "oil") {
//             console.log("Stealth potion");
//         } else {
//             console.log("Minor Stamina potion");
//         } 
//     } else if (i1 == "berries" || i2 == "berries") {
//         if (i1 == "sugar" || i2 == "sugar") {
//             console.log("Speed potion");
//         } else {
//             console.log("Minor energy potion");
//         }
//     } else {
//         console.log("Cant brew any potions you stupid");
//     }

// }

// potions("herbs", "water");
// potions("herbs", "oil");
// potions("herbs", "banana");
// potions("berries", "sugar");
// potions("berries", "banana");
// potions("herbs", "sugar");
// potions("buba", "kiopekis");



// 28. Survival in the Wilderness


// function survival(timeOfDay, place, item) {

//     if (timeOfDay == "day") {
//         if (place == "forest") {
//             if (item == "knife") {
//                 console.log("Hunt for food");
//             } else if (item == "container") {
//                 console.log("collect berries");
//             } else {
//                 console.log("explore");
//             }
//         }
//     } else if (timeOfDay == "night") {
//         if (place == "forest") {
//             if (item == "firestarter") {
//                 console.log("Make a campfire");
//             } else {
//                 console.log("climb a tree for safety");
//             }
//         } else if (place == "desert") {
//             if (item == "blanket") {
//                 console.log("sleep");
//             } else {
//                 console.log("Keep moving to stay warmed");
//             }
//         }
//     }
// }

// survival("day", "forest", "knife");
// survival("day", "forest", "container");
// survival("night", "forest", "firestarter");



// 29. Climate Zone Identifier


// function zoneID(latitude, direction) {

//     if (latitude > 66.5) {
//         console.log("Arctic Zone");
//     } else if (latitude <= 66.5 && latitude >= 23.5) {
//         console.log("Temperature Zone");
//     } else if (latitude < 23.5 && latitude > 0) {
//         console.log("Tropic Zone");
//     } else if (latitude == 0) {
//         console.log("Equator")
//     }

// }


// zoneID(70, "N")
// zoneID(45, "S")




//30. Architectural Era Identifier


// function architectureEra(year, material) {

//     if (year < 500 && material == "stone") {
//         console.log("Ancient")
//     } else if (year > 500 && year < 1500 && material == "stone") {
//         console.log("Medieval");
//     } else if (year >= 1500 && year <= 1800 && material == "wood") {
//         console.log("Colonial");
//     } else if (year > 1800 && year <= 1900 && material == "steel") {
//         console.log("Industrial");
//     } else if (year > 1900 && material == "steel") {
//         console.log("Modern");
//     } else {
//         console.log("Uncertain");
//     }

// }

// architectureEra(300, "stone");
// architectureEra(1500, "wood");
// architectureEra(1500, "stone");
// architectureEra(2000, "steel");
// architectureEra(1100, "wood");

