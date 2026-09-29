// SpendWise JavaScript Foundation
// This program collects user budget data using prompts,
// calculates monthly spending, updates the dashboard,
// and displays a labelled summary in the browser console.

// =============================
// Application data variables
// =============================

const appName = "SpendWise";
const currency = "KES";

let userName;
let monthlyIncome;
let foodExpense;
let transportExpense;
let rentExpense;
let entertainmentExpense;
let savingsExpense;
let utilitiesExpense;

// =============================
// Reusable functions
// =============================

// Formats a number as Kenyan Shillings.
function formatCurrency(amount) {
    return `${currency} ${amount.toFixed(2)}`;
}

// Adds all expense categories and returns the total amount.
function calculateTotalExpenses(
    food,
    transport,
    rent,
    entertainment,
    savings,
    utilities
) {
    const totalExpenses =
        food +
        transport +
        rent +
        entertainment +
        savings +
        utilities;

    return totalExpenses;
}

// Finds the amount remaining after expenses.
function calculateRemainingBalance(income, totalExpenses) {
    const remainingBalance = income - totalExpenses;

    return remainingBalance;
}

// Calculates what percentage of income has been spent.
function calculateExpensePercentage(totalExpenses, income) {
    const expensePercentage = (totalExpenses / income) * 100;

    return expensePercentage;
}

// Returns a spending message based on the balance.
function getBudgetStatus(remainingBalance) {
    if (remainingBalance > 0) {
        return "You are within budget. Great job managing your money!";
    } else if (remainingBalance === 0) {
        return "Your income and expenses are equal. Try to save next month.";
    } else {
        return "You are over budget. Your expenses are higher than your income.";
    }
}

// Updates the user name shown in the page header.
function updateUserName(name) {
    document.querySelector(".user-details strong").textContent = name;
}

// Updates the main summary cards.
function updateSummaryCards(income, totalExpenses, remainingBalance) {
    document.getElementById("total-income").textContent =
        formatCurrency(income);

    document.getElementById("total-expenses").textContent =
        formatCurrency(totalExpenses);

    document.getElementById("balance").textContent =
        formatCurrency(remainingBalance);
}

// Updates the six category amount cards.
function updateCategoryCards(
    food,
    transport,
    rent,
    entertainment,
    savings,
    utilities
) {
    document.getElementById("food-amount").textContent =
        formatCurrency(food);

    document.getElementById("transport-amount").textContent =
        formatCurrency(transport);

    document.getElementById("rent-amount").textContent =
        formatCurrency(rent);

    document.getElementById("entertainment-amount").textContent =
        formatCurrency(entertainment);

    document.getElementById("savings-amount").textContent =
        formatCurrency(savings);

    document.getElementById("utilities-amount").textContent =
        formatCurrency(utilities);
}

// =============================
// Collect user input with prompts
// =============================

userName = prompt("Welcome to SpendWise! What is your name?");

monthlyIncome = Number.parseFloat(
    prompt("Enter your monthly income in KES:")
);

foodExpense = Number.parseFloat(
    prompt("Enter your monthly food expense in KES:")
);

transportExpense = Number.parseFloat(
    prompt("Enter your monthly transport expense in KES:")
);

rentExpense = Number.parseFloat(
    prompt("Enter your monthly rent expense in KES:")
);

entertainmentExpense = Number.parseFloat(
    prompt("Enter your monthly entertainment expense in KES:")
);

savingsExpense = Number.parseFloat(
    prompt("Enter the amount you want to save this month in KES:")
);

utilitiesExpense = Number.parseFloat(
    prompt("Enter your monthly utilities expense in KES:")
);

// =============================
// Perform budget calculations
// =============================

const totalExpenses = calculateTotalExpenses(
    foodExpense,
    transportExpense,
    rentExpense,
    entertainmentExpense,
    savingsExpense,
    utilitiesExpense
);

const remainingBalance = calculateRemainingBalance(
    monthlyIncome,
    totalExpenses
);

const expensePercentage = calculateExpensePercentage(
    totalExpenses,
    monthlyIncome
);

const budgetStatus = getBudgetStatus(remainingBalance);

// =============================
// Update webpage content
// =============================

updateUserName(userName);

updateSummaryCards(
    monthlyIncome,
    totalExpenses,
    remainingBalance
);

updateCategoryCards(
    foodExpense,
    transportExpense,
    rentExpense,
    entertainmentExpense,
    savingsExpense,
    utilitiesExpense
);

// =============================
// Display results in browser console
// =============================

console.log("==========================================");
console.log(`         ${appName} BUDGET SUMMARY`);
console.log("==========================================");

console.log(`Budget owner: ${userName}`);
console.log(`Monthly income: ${formatCurrency(monthlyIncome)}`);

console.log("------------ Monthly Expenses ------------");
console.log(`Food: ${formatCurrency(foodExpense)}`);
console.log(`Transport: ${formatCurrency(transportExpense)}`);
console.log(`Rent: ${formatCurrency(rentExpense)}`);
console.log(`Entertainment: ${formatCurrency(entertainmentExpense)}`);
console.log(`Savings: ${formatCurrency(savingsExpense)}`);
console.log(`Utilities: ${formatCurrency(utilitiesExpense)}`);

console.log("------------ Budget Results ------------");
console.log(`Total expenses: ${formatCurrency(totalExpenses)}`);
console.log(`Remaining balance: ${formatCurrency(remainingBalance)}`);
console.log(
    `Percentage of income spent: ${expensePercentage.toFixed(2)}%`
);

console.log("------------ Budget Status ------------");
console.log(budgetStatus);

console.log("==========================================");
console.log("Thank you for using SpendWise!");