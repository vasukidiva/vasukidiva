//  Primitive Data Types

// 1. String
let firstName = "vasu";
let lastName = 'mani';

console.log(firstName);


// 2. Number
let age = 25;
let price = 199.99;

console.log(price);


// 3. BigInt
let bigNumber1 = 123456789012345678901234567890n;
let bigNumber2 = 987654321098765432109876543210n;

console.log(bigNumber1 + bigNumber2);


// 4. Boolean
let isLoggedIn = true;
let hasPermission = false;

console.log(isLoggedIn);

// 5. Undefined
let phone;
let address;

console.log(address);


// 6. Null
let middleName = null;
let spouse = null;

console.log(spouse);


// 7. Symbol
let id1 = Symbol("id");
let id2 = Symbol("id");

console.log(id1 === id2);

//  Non-Primitive Data Types

// 1. Object
let person1 = { name: "Ravi", age: 30 };
let person2 = { name: "Meena", age: 28 };

console.log(person1);


// 2. Array
let fruits = ["apple", "banana"];
let scores = [95, 88];

console.log(fruits);


// 3. Function
function greet() {
    console.log("Hello!");
}
let sayBye = function() {
    console.log("Goodbye!");
}

// 4. Date 
let today = new Date();
let birthday = new Date("1997-06-20");

console.log(birthday);

