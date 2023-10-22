//4. Read User Input - Name

// function printName (name) {
//     console.log(name);
// };

// printName("Gosho")

//5 & 6. Read different data

// function threeParams(text, integer, realNumber) {
//     console.log(text, integer, realNumber);
// }

// threeParams("gosho", 200, 3.14)



//7. Weather Forecast 

// function weatherForecast(city, degrees) {
//     console.log("Today in " + city + " it is " + degrees + " degrees.");
// }

// weatherForecast("Varna", 22)


//8. Kilomteters in miles

// function kmToMile (kilometer) {
//     console.log(kilometer * 0.621371)
// }

// kmToMile(5)


//9. Calculate

// function calculate (numOne, numTwo) {
//     console.log("Sum: ", numOne + numTwo);
//     console.log("Diff: ", numOne - numTwo);
//     console.log("Product: ", numOne * numTwo);
//     console.log("Average: ", numOne / numTwo );
// }

// calculate(10, 5);
// calculate(7, 14);
// calculate(12, 1);


//10. Square face

// function squareFace (a) {
//     console.log(a * a)
// }

// squareFace(5);
// squareFace(10);


//11. & 12. Time formating

// function time(m) {
//     let hours = Math.floor(m / 60);
//     let remainingMinutes = m % 60;

//     let formatedHours = hours.toString();
//     let formatedMinutes = remainingMinutes.toString();

//     while (formatedHours.length <= 1) {
//         formatedHours = "0" + formatedHours;
//     }

//     while (formatedMinutes.length <= 1) {
//         formatedMinutes = "0" + formatedMinutes;
//     }


//     console.log(formatedHours + " : " + formatedMinutes);
// }

// time(121)



//13. Painting

// function painting(litersOfYellow) {
//     let redPaint = litersOfYellow / 4;
//     let whitePaint = litersOfYellow * 2;
//     let total = redPaint + whitePaint + litersOfYellow;

//     console.log("Red: " + redPaint);
//     console.log("Yellow " + litersOfYellow);
//     console.log("White: " + whitePaint);
//     console.log("Total: " + total)
// }

// painting(17)



//14. Console converter: EUR to BGN

// function EURtoBGN(euro) {
    
//     let bgn = euro * 1.95583;
//     let b = bgn.toFixed(2);

//     console.log(b);

// }

// EURtoBGN(5)



//15. Speed

// function speed(distance, hours, minutes, seconds) {
    
//     let totalTimeInSeconds = hours * 3600 + minutes * 60 + seconds;
    
//     let speed = distance / totalTimeInSeconds;

//     console.log(speed);

// }


// speed(2500, 5, 56, 23)



//16. Office

// function office(n) {
    
//     let n2 = 0.8 * n;
//     let n3 = 1.15 * (n + n2);

//     let totalCost = n + n2 + n3;
//     console.log(totalCost.toFixed(3));
// }


// office(380)
// office(720.50)
// office(455.30)



//17. Journey

// function journey(x, y) {
    
//     let result = (5 * x) - (3 * y);
//     console.log(result);
// }

// journey(100, 90)



//18. BMI

// function bmiCalc(weight, height) {
//     let result = weight / Math.pow(height, 2);

//     console.log(result);
// }

// bmiCalc(70, 1.73);
// bmiCalc(60, 1.75);



//19. Water Consumption

// function waterConsumption(litersPerWeek, peopleInHousehold) {
//     let result = litersPerWeek / (7 * peopleInHousehold);

//     console.log(result);
// }

// waterConsumption(2450, 7);

// waterConsumption(3150, 10);



//20. Electricity Bill

// function electricity(consumed, rate) {

//     let result = (consumed + rate) + 10;
//     console.log(result);
// }

// electricity(100, 1.0);
// electricity(200, 1.0);



//21. Average Speed

// function avgSpeed(d, t) {
//     console.log(d / t);
// }

// avgSpeed(200, 2)



//22. Fuel Efficiency

// function fuelEff(d, f) {
//     console.log(d / f);
// }

// fuelEff(500, 40);
// fuelEff(600, 40);



//23. Circle Circumference

// function circle(radius) {
//     let result = 2 * Math.PI * radius;

//     console.log(result);
// }

// circle(5);
// circle(7);