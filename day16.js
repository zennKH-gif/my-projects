// ===== PART 1: Age & Access Checker =====
const userAge = 20;
const hasValidID = true;

console.log ("=== Age & Access Check ===");
if (userAge >= 18 && hasValidID) {
    console.log("Access Granted: You are an adult  with Valid ID.");
} else if (userAge >= 18 && !hasValidID) {
    console.log("Access Denied: You are 18+, But you need to show Valid ID.");
} else {
    console.log("Access Denied: You must be at least 18 years old and above.");
}

// =====  PART 2: Number Checker (Positive, Negative, or Zero) =====
let testNumber = -7;

console.log("=== Number Check ===");

if (testNumber > 0) {
    console.log(`${testNumber} is POSITIVE number`);
} else if (testNumber < 0) {
    console.log(`${testNumber} is a NEGATIVE number`);
} else {
    console.log("The number is ZERO");
}
// ===== PART 3: Even or Odd Checker (Using Modulo %) =====
// The % (remainder) operator gives what's left over after dividing by 2
let checkEvenOdd = 15;

if (checkEvenOdd % 2 === 0) {
    console.log (`${checkEvenOdd} is EVEN.`);
} else {
    console.log(`${checkEvenOdd} is ODD.`);
}
// ===== PART 4 (BONUS): Shadow HP Status Check =====
let hp = 100;

console.log("=== Shadow Health Check ===");

if (hp <= 0) {
    console.log("Game Over! Shadow has fallen.");
} else if (hp <= 30) {
    console.log(`Warning: Low HP (${hp})! Use a health potion.`);
} else {
    console.log(`Shadow is healthy (${hp} HP) and ready to battle.`);
}