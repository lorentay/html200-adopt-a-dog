// canDrive.js


// Variables
let firstName = "Lily";
let lastName = "Greene";
let age = 25; 
let drivingAge = 16;

// Comparing age with driving age
if (age >= drivingAge) {
    // Calculating driving years
    let drivingYears = age - drivingAge;
    console.log(`${firstName} ${lastName} has been driving for ${drivingYears} years.`);
} else {
    // Counting down from 5
    for (let i = 5; i > 0; i--) {
        console.log(i);
    }
    console.log("Too young to drive!");
}
