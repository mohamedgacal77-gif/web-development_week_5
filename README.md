# SpendWise

SpendWise is a personal budget and expense tracker built with HTML, CSS, and JavaScript.

The application collects the user’s name, monthly income, and expenses for different categories using JavaScript prompts. It then calculates the total expenses, remaining balance, and percentage of income spent. The results are shown on the dashboard and in the browser console.

## Features

- Collects user input with JavaScript `prompt()`
- Stores budget data in variables
- Calculates total expenses and remaining balance
- Calculates the percentage of income spent
- Displays results on the dashboard and in the browser console
- Uses reusable functions to organize calculations and updates
- Responsive layout using CSS Grid and Flexbox

## JavaScript Concepts Used

This project uses:

- Variables with `const` and `let`
- Strings and numbers
- User input with `prompt()`
- Number conversion with `Number.parseFloat()`
- Arithmetic operators
- Functions with parameters and return values
- Conditional statements (`if`, `else if`, `else`)
- Template literals
- DOM manipulation
- Browser console output with `console.log()`
- Number formatting with `toFixed()`

## Variables

Variables are used to store application data.

Examples include:

```javascript
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
```

The `const` keyword is used for values that do not change, such as the application name and currency. The `let` keyword is used for data collected from the user.

## User Input

SpendWise uses JavaScript `prompt()` to collect budgeting information from the user.

Example:

```javascript
monthlyIncome = Number.parseFloat(
    prompt("Enter your monthly income in KES:")
);
```

A prompt returns text, so `Number.parseFloat()` converts the entered text into a number that can be used in calculations.

## Calculations

The application calculates total expenses by adding all expense values.

```javascript
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
```

The remaining balance is calculated using:

```text
Remaining balance = Monthly income - Total expenses
```

The application also calculates the percentage of income spent:

```text
Expense percentage = (Total expenses / Monthly income) * 100
```

## Functions

Functions organize the application into smaller, reusable tasks.

- `formatCurrency()` formats money values in Kenyan Shillings.
- `calculateTotalExpenses()` adds the monthly expenses.
- `calculateRemainingBalance()` calculates income left after expenses.
- `calculateExpensePercentage()` finds the percentage of income spent.
- `getBudgetStatus()` returns a message based on the final balance.
- `updateUserName()` updates the user name in the header.
- `updateSummaryCards()` updates the income, expenses, and balance cards.
- `updateCategoryCards()` updates the six category amount cards.

## How to Run

1. Download or clone this repository.
2. Open the project folder.
3. Open `index.html` in a browser.
4. Answer the prompts with your budget information.
5. Open the browser developer tools.
6. Click the **Console** tab to view the SpendWise budget summary.

## Author

Your Name
