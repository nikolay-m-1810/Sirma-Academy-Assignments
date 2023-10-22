//Classes

//Example for a class:

// class Student{
//     constructor(name) {
//         this.name = name;
//     }
// }

// let studentA = new Student("Peter");
// let studentB = new Student("Marry");


//Methods

// class Dog {
//     constructor(name) {
//         this.name = name;
//     }

//     speak() {
//         console.log(`${this.name}: Woof, woof!`);
//     }
// }

// let dog = new Dog("Amor");
// dog.speak();


//Static Methods

// class MyClass {
//     static staticMethod() {
//         return 'Static call';
//     }

//     static anotherStaticMethod() {
//         return this.staticMethod() + ' from another method';
//     }
// }

// console.log(MyClass.anotherStaticMethod());



//1. Cats

// function cats(arr) {
    
//     let catObjects = [];

//     for (let entry of arr) {
//         let [name, age] = entry.split(' ');
//         let cat = new Cat(name, age);
//         catObjects.push(cat);
//     }

//     for (let cat of catObjects) {
//         cat.meow();
//     }
// }

// class Cat {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }

//     meow() {
//         console.log(`${this.name}, age ${this.age} says meow`);
//     }
// }

// cats(['Mellon 2', 'Tom 3']);