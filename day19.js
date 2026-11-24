// ===== PART 1: Create & Inspect Shopping List =====
const shoppingList = ["Bread", "Eggs", "Cooking Oil", "Coffee"];
console.log("=== Initial Shopping List ===");
console.log("First iten:", shoppingList[0]);
console.log("Total item:", shoppingList.length);

// ===== PART 2: Add & Remove Items =====
shoppingList.push("Sugar");
shoppingList.push("Bananas");
console.log("After adding Sugar & Bananas:", shoppingList);

const removedItem = shoppingList.pop();
console.log(`Removed last item(${removedItem}):`, shoppingList);

// ===== PART 3: Display Numbered List with a 'for' Loop =====
function printShoppingList(items) {
    console.log("=== Shopping List Checklist ===");
    for (let i = 0; i < items.length; i++) {
        console.log(`${i + 1}. ${items[i]}`);
    }
}

printShoppingList(shoppingList);

// ===== PART 4: Check if an Item Is Already on the List =====
function hasItem(items, targetItem) {
    return items.includes(targetItem);
}

console.log("Has Eggs?", hasItem(shoppingList, "Eggs"));
console.log("Has Rice?", hasItem(shoppingList, "Rice"));