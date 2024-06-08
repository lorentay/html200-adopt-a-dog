let totalAdoptionFee = 0;

function displayDogInfo(element) {
    const name = element.getAttribute('data-name');
    const breed = element.getAttribute('data-breed');
    const fee = element.getAttribute('data-fee');

    alert(`Dog's Name: ${name}\nBreed: ${breed}\nAdoption Fee: $${fee}`);
}

function addAdoption(event, element) {
    event.preventDefault(); 
    const fee = +element.getAttribute('data-fee'); // Convert the fee string to a number using the unary plus operator
    totalAdoptionFee += fee;

    alert(`Total adoption fees: $${totalAdoptionFee.toFixed(2)}`);
}