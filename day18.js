    // ===== PART 1: Calculate Tip Amount Function =====
    function calculateTip(billAmount, tipPercent = 15) {
        const tip = billAmount * (tipPercent / 100);
        return tip;
    }
    // ===== PART 1: Calculate Tip Amount Function =====
    function calculateTotal(billAmount, tipPercent = 15) {
        const tip = calculateTip(billAmount, tipPercent);
        return billAmount + tip
    }
    // ===== test the Tip Calculator =====
    console.log("=== Tip Calculator Results ===");

    const bill1 = 250;
    const tip1 = calculateTip(bill1, 10);
    const total1 = calculateTotal(bill1, 10);
    console.log(`Bill: ${bill1} | Tip (10%): ₱${tip1} | Total: ₱${total1}`);
    
    const bill2 = 500;
    const tip2 = calculateTip(bill2);
    const total2 = calculateTotal(bill2);
    console.log(`Bill: ${bill2} | Tip (15% default): ₱${tip2} | Total: ₱${total2}`)
    // ===== PART 4 (BONUS): Split Bill Function =====
function splitBill(totalAmount, peopleCount = 1) {
    if (peopleCount <= 0) {
        return 0;
    }
    return totalAmount / peopleCount;
}

const eachPays = splitBill(total1, 2);
console.log(`Splitting ₱${total1} among 2 people: ₱${eachPays} each`);