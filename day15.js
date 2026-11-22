// ===== My info =====

// 1. Variables
const myName = "Zenn";
const myAge = 20;
const isStudent = true;
const favoriteGame = "GTA San Andreas";
const dreamJob = "Cybersecurity";

// 2. Print each one
console.log(myName);
console.log(myAge);
console.log(favoriteGame);
console.log(isStudent);

// 3. Check the types
console.log(typeof myName); // string
console.log(typeof myAge); // number
console.log(typeof isStudent);

// 4. Combine them with a template literal
console.log(`Hi, I'm ${myName}. I'm ${myAge} and I want to work in ${dreamJob}.`);

// ===== Game Character =====
const characterName = "Shadow";
let level = 1;
let health = 100;
let isAlive = true;

console.log(`${characterName} | Level ${level} | HP ${health}`);
health = health - 30;
console.log(`${characterName} | Level ${level} | HP ${health}`);
level++;
console.log(`${characterName} | Level ${level} | HP ${health}`);
console.log(`${characterName} alive? ${isAlive}`);