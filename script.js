let balance = 1000; // Initial balance

document.addEventListener('DOMContentLoaded', (event) => {
    displayMessage("Welcome to the bank application. Your starting balance is " + balance.toFixed(2) + ". Choose an action: W (Withdraw), D (Deposit), B (Balance), Q (Quit)");
});

function performAction() {
    const inputField = document.getElementById('input');
    const action = inputField.value.trim().toUpperCase();
    inputField.value = ''; // Clear the input field

    switch(action) {
        case 'Q':
            quit();
            break;
        case 'W':
            withdraw();
            break;
        case 'D':
            deposit();
            break;
        case 'B':
            viewBalance();
            break;
        default:
            displayMessage("Invalid action. Choose W (Withdraw), D (Deposit), B (Balance), Q (Quit)");
            break;
    }
}

function quit() {
    displayMessage("Thank you for using the bank application. Goodbye!");
    document.getElementById('input').style.display = 'none'; // Hide input field
    document.querySelector('button').style.display = 'none'; // Hide submit button
}

function withdraw() {
    const amount = prompt("Enter amount to withdraw:");
    const parsedAmount = parseFloat(amount);

    if (isNaN(parsedAmount) || parsedAmount <= 0) {
        displayMessage("Invalid amount. Please enter a positive number. Choose W (Withdraw), D (Deposit), B (Balance), Q (Quit)");
        return;
    }

    if (parsedAmount > balance) {
        displayMessage("Insufficient funds. Your balance is " + balance.toFixed(2) + ". Choose W (Withdraw), D (Deposit), B (Balance), Q (Quit)");
    } else {
        balance -= parsedAmount;
        displayMessage("You withdrew " + parsedAmount.toFixed(2) + ". Your new balance is " + balance.toFixed(2) + ". Choose W (Withdraw), D (Deposit), B (Balance), Q (Quit)");
    }
}

function deposit() {
    const amount = prompt("Enter amount to deposit:");
    const parsedAmount = parseFloat(amount);

    if (isNaN(parsedAmount) || parsedAmount <= 0) {
        displayMessage("Invalid amount. Please enter a positive number. Choose W (Withdraw), D (Deposit), B (Balance), Q (Quit)");
        return;
    }

    balance += parsedAmount;
    displayMessage("You deposited " + parsedAmount.toFixed(2) + ". Your new balance is " + balance.toFixed(2) + ". Choose W (Withdraw), D (Deposit), B (Balance), Q (Quit)");
}

function viewBalance() {
    displayMessage("Your current balance is " + balance.toFixed(2) + ". Choose W (Withdraw), D (Deposit), B (Balance), Q (Quit)");
}

function displayMessage(message) {
    document.getElementById('message').textContent = message;
}
