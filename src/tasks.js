// CampusEats task list
const tasks = [
 "Design the menu screen",
 "Build the orders API",
 "Add user login",
];
console.log(`CampusEats has ${tasks.length} open tasks`);


const VIP_DISCOUNT_RATE = 0.1;

/**
 * Calculates the total order cost applying tier discounts.
 * @param {number} unitPrice - Non-negative price per item.
 * @param {number} quantity - Non-negative quantity purchased.
 * @param {string} customerTier - Tier identifier (e.g., 'vip', 'standard').
 * @returns {number} Final calculated total.
 */
function calculateTotal(unitPrice, quantity, customerTier) {
  if (
    typeof unitPrice !== "number" ||
    typeof quantity !== "number" ||
    unitPrice < 0 ||
    quantity < 0
  ) {
    throw new Error("Invalid input: unitPrice and quantity must be non-negative numbers.");
  }

  const subtotal = unitPrice * quantity;

  return customerTier === "vip" 
    ? subtotal * (1 - VIP_DISCOUNT_RATE) 
    : subtotal;
}

// Secret Management: Credentials should be read strictly from environment variables