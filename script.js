// Sets the starting balance
let balance = 1000;

// Creates the initial message and then invokes it
function initializeMessage() {
  displayMessage(
    `Your starting balance is $${balance.toFixed(2)}. <br><br> Choose an action: <br> W (Withdraw), D (Deposit), B (Balance), Q (Quit)`
  );
}

initializeMessage();

// Function to perform the switch actions (eliminate extra spaces, convert input to uppercase, clear the input box)
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
  if (validateAmount(amount)) {
    const parsedAmount = parseFloat(amount);
    if (parsedAmount > balance) {
      displayMessage(
        `Insufficient funds. Your balance is $${balance.toFixed(2)}. <br><br> Choose an action: <br> W (Withdraw), D (Deposit), B (Balance), Q (Quit)`
      );
    } else {
      balance -= parsedAmount;
      displayMessage(
        `You withdrew $${parsedAmount.toFixed(2)}. <br> Your new balance is $${balance.toFixed(2)}. <br><br> Choose an action:<br> W (Withdraw), D (Deposit), B (Balance), Q (Quit)`
      );
    }
  }
}


// Function to deposit money
function deposit() {
  const amount = prompt("Enter amount to deposit:");
  if (validateAmount(amount)) {
    const parsedAmount = parseFloat(amount);
    balance += parsedAmount;
    displayMessage(
      `You deposited $${parsedAmount.toFixed(2)}. <br> Your new balance is $${balance.toFixed(2)}. <br><br> Choose an action: <br> W (Withdraw), D (Deposit), B (Balance), Q (Quit)`
    );
  }
}


// Function to view balance
function viewBalance() {
  displayMessage(
    `Your current balance is $${balance.toFixed(2)}. <br><br> Choose an action: <br> W (Withdraw), D (Deposit), B (Balance), Q (Quit)`
  );
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
