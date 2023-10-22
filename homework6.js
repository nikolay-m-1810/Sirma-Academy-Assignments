//1. Person Data

// function personData(fname, lname, age) {

//     let result = {
//         firstName: fname,
//         lastName: lname,
//         age: age
//     }

//     console.log(result);
// }

// personData('Ivan', 'Ivanov', 29)


//2. Town

// function town(obj) {
//     for (let key in obj) {
//         console.log(`${key} -> ${obj[key]}`);
//     }
// }

// const townInfo = {
//     name: "Sofia",
//     population: 1234567,
//     country: "Bulgaria",
//     postcode: "1000"
// };

// town(townInfo);


//3. Convert to Object

// function convert(f) {

//     let obj = JSON.parse(f)
//     console.log(obj);
// }

// convert('{"name": "Ivan", "age": 40, "town": "Sofia"}');


//4. Convert to JSON

// function convertToJSON(name, surname, eyeColor) {

//     let obj = {
//         "name": name, 
//         "surname": surname,
//         "eyeColor": eyeColor
//         }

//     console.log(JSON.stringify(obj));
// }

// convertToJSON("Ivan", 'Ivanov', 'blue')


//5. Phonebook

// function phonebook(arr) {

//     let result = {};

//     for (let i = 0; i < arr.length; i++){

//         let parts = arr[i].split(' ');
//         let name = parts[0];
//         let number = parts.splice(1).join('')

//         if (result.hasOwnProperty(name)) {
//             result[name] = number;
//         } else {
//             result[name] = number;
//         }
        
//     }

//     for (let name in result) {
//         console.log(`${name} -> ${result[name]}`);
//     }
// }

// phonebook(["Peter 0888 657 212", "Bob 0899657 212", "Peter 123123"])


//6. Movies

// function movies(arr) {

//     let movieList = {};

//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i].startsWith('addMovie')) {
//             movieList.name = "";
//         }
//     }
// }