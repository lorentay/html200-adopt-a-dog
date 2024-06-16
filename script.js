// Sets the starting balance and balance and cap requirements
let balance = 1000;
const lowBalanceThreshold = 500;
const minBalanceAfterWithdrawal = 300;
const depositCap = 50000;

// Creates the initial message and then invokes it
function initializeMessage() {
  displayMessage(
    `Your starting balance is $${balance.toFixed(2)}. <br><br> Choose an action: <br> W (Withdraw), D (Deposit), B (Balance), Q (Quit)`
  );
}
initializeMessage();

// Function to perform the application actions, eliminate extra spaces, convert input to uppercase, clear the input box
function performAction() {
  const inputBox = document.getElementById("input");
  const action = inputBox.value.trim().toUpperCase();
  inputBox.value = ""; 

  switch (action) {
    case "W":
      withdraw();
      break;
    case "D":
      deposit();
      break;
    case "B":
      viewBalance();
      break;
    case "Q":
      quit();
      break;
    default:
      displayMessage(
        "Invalid action. <br><br> Choose an action: <br> W (Withdraw), D (Deposit), B (Balance), Q (Quit)"
      );
      break;
  }
}

// Function to withdraw money
function withdraw() {
  const amount = prompt("Enter amount to withdraw:");
  if (amount === null) { 
    displayMessage(
      `Withdrawal canceled. <br><br> Choose an action: <br> W (Withdraw), D (Deposit), B (Balance), Q (Quit)`
    );
    return;
  }

  if (validateAmount(amount)) {
    const parsedAmount = parseFloat(amount);
    if (parsedAmount > balance) {
      displayMessage(
        `Insufficient funds. Your balance is $${balance.toFixed(2)}. <br><br> Choose an action: <br> W (Withdraw), D (Deposit), B (Balance), Q (Quit)`
      );
    } else if (balance - parsedAmount < minBalanceAfterWithdrawal) {
      const confirmWithdrawal = confirm(
        `This withdrawal will leave your balance below $300. Are you sure you want to proceed?`
      );
      if (!confirmWithdrawal) {
        displayMessage(
          `Withdrawal canceled. Your balance is $${balance.toFixed(2)}. <br><br> Choose an action: <br> W (Withdraw), D (Deposit), B (Balance), Q (Quit)`
        );
        return;
      } else {
        processWithdrawal(parsedAmount);
      }
    } else {
      processWithdrawal(parsedAmount);
    }
  }
}

// Function to process the withdrawal and update the balance
function processWithdrawal(amount) {
  balance -= amount;
  displayMessage(
    `You withdrew $${amount.toFixed(2)}. <br>Your new balance is $${balance.toFixed(2)}. <br><br> Choose an action:<br> W (Withdraw), D (Deposit), B (Balance), Q (Quit)`
  );
  checkLowBalance();
}

// Function to deposit money
function deposit() {
  const amount = prompt("Enter amount to deposit:");
  if (amount === null) { 
    displayMessage(
      `Deposit canceled. <br><br> Choose an action: <br> W (Withdraw), D (Deposit), B (Balance), Q (Quit)`
    );
    return;
  }

  if (validateAmount(amount)) {
    const parsedAmount = parseFloat(amount);
    if (parsedAmount > depositCap) {
      displayMessage(
        `Deposit amount exceeds the $${depositCap.toFixed(2)} maximum. <br><br> Choose an action: <br> W (Withdraw), D (Deposit), B (Balance), Q (Quit)`
      );
    } else {
      balance += parsedAmount;
      displayMessage(
        `You deposited $${parsedAmount.toFixed(2)}. <br>Your new balance is $${balance.toFixed(2)}. <br><br> Choose an action:<br> W (Withdraw), D (Deposit), B (Balance), Q (Quit)`
      );
      checkLowBalance();
    }
  }
}

// Function to view balance
function viewBalance() {
  displayMessage(
    `Your current balance is $${balance.toFixed(2)}. <br><br> Choose an action: <br> W (Withdraw), D (Deposit), B (Balance), Q (Quit)`
  );
  checkLowBalance();
}

// Function to quit the banking app and remove the input box and heading
function quit() {
  displayMessage(
    "Thank you for using the Bank of LorenTay. <br><br> We look forward to serving you again soon."
  );
  inputVisibility(false);
  headingVisibility(false);
}

// Function to display messages
function displayMessage(message) {
  document.getElementById("message").innerHTML = message;
}

// Function to validate the amount and display "invalid amount" when it fails
function validateAmount(amount) {
  const parsedAmount = parseFloat(amount);
  if (isNaN(parsedAmount) || parsedAmount <= 0) {
    displayMessage(
      "Invalid amount. Please try again. <br><br> Choose an action: <br> W (Withdraw), D (Deposit), B (Balance), Q (Quit)"
    );
    return false;
  }
  return true;
}

// Function to check for low balance and display a warning
function checkLowBalance() {
  if (balance < lowBalanceThreshold) {
    alert(`Warning: Your balance is below $${lowBalanceThreshold}!`);
  }
}

// Function to display "Welcome to the Bank of LorenTay" (except on quit)
function inputVisibility(visible) {
  const inputBox = document.getElementById("input");
  const button = document.querySelector("button");
  inputBox.style.display = visible ? "block" : "none";
  button.style.display = visible ? "block" : "none";
}

// Function to hide "Welcome to the Bank of LorenTay" heading when the user quits the app
function headingVisibility(visible) {
  const heading = document.querySelector("h1");
  heading.style.display = visible ? "block" : "none";
}
