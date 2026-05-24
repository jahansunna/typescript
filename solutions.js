"use strict";
// Problem 1
function filterEvenNumbers(numbers) {
    return numbers.filter(num => num % 2 === 0);
}
// Problem 2
function reverseString(text) {
    return text.split("").reverse().join("");
}
console.log(reverseString("typescript"));
function checkType(value) {
    if (typeof value === "string") {
        return "String";
    }
    else {
        return "Number";
    }
}
// Problem 4
function getProperty(obj, key) {
    return obj[key];
}
const user = {
    id: 1,
    name: "John Doe",
    age: 21
};
function toggleReadStatus(book) {
    return {
        ...book,
        isRead: true
    };
}
const myBook = {
    title: "TypeScript Guide",
    author: "Jane Doe",
    publishedYear: 2024
};
// Problem 6
class Person {
    name;
    age;
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
class Student extends Person {
    grade;
    constructor(name, age, grade) {
        super(name, age);
        this.grade = grade;
    }
    getDetails() {
        return `Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}`;
    }
}
const student = new Student("Alice", 20, "A");
// Problem 7
function getIntersection(arr1, arr2) {
    return arr1.filter(num => arr2.includes(num));
}
