// ===== PART 1: Countdown with a 'for' Loop =====
console.log("=== Mission Countdown ===");

for (let count = 5; count >= 1; count--) {
    console.log(`T-minus ${count}...`);
}
console.log("Launch!");

// ===== PART 2: Even Numbers & 'continue' =====
console.log("=== Even Numbers (1 to 10) ===");

for (let num = 1; num <= 10; num++) {
    if (num % 2 !== 0) {
        continue; // Skip odd numbers
    }
    console.log(`Even number: ${num}`);
}

// ===== PART 3: Shadow Training Loop with 'while' & 'break' =====
console.log("=== Shadow Training Session ===");

let stamina = 50;
let round = 1;

while (stamina > 0) {
    console.log(`Round ${round}: Shadow attacks! Stamina: ${stamina}`);
    stamina -= 15; // Same as: stamina = stamina - 15

    if (stamina <= 10) {
        console.log("Stamina too low! Stopping training early to rest.");
        break;
    }

    round++;
}
// ===== PART 4 (BONUS): Milestone Loop (1 to 15) =====
console.log("=== Milestone Check (1 to 15) ===");

for (let step = 1; step <= 15; step++) {
    if (step % 5 === 0) {
        console.log(`Step ${step}: Milestone reached!`);
    } else {
        console.log(`Step ${step}`);
    }
}