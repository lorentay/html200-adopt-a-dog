// Function to handle photo click and alert dog's information
function displayDogInfo(event) {
    const element = event.target;
    const name = element.getAttribute('data-name');
    const breed = element.getAttribute('data-breed');
    const fee = element.getAttribute('data-fee');

    alert(`Name: ${name}\nBreed: ${breed}\nAdoption Fee: $${fee}`);
}

// Variable to keep track of the total adoption fee
let totalAdoptionFee = 0;

// Function to handle adoption button click and update total adoption fee
function addAdoptionFee(event) {
    const element = event.target;
    const fee = parseFloat(element.getAttribute('data-fee'));

    totalAdoptionFee += fee;

    alert(`Total Adoption Fee: $${totalAdoptionFee.toFixed(2)}`);
}

// Attach event listeners to all dog images
document.querySelectorAll('.dog-image').forEach(img => {
    img.addEventListener('click', displayDogInfo);
});

// Attach event listeners to all adopt buttons
document.querySelectorAll('.adopt').forEach(button => {
    button.addEventListener('click', addAdoptionFee);
});
