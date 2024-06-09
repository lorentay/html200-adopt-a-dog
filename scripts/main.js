// Displays name, breed, and adoption fee, when a dog's photo is clicked

function displayDogInfo(element) {
    const name = element.getAttribute("data-name");
    const breed = element.getAttribute("data-breed");
    const fee = element.getAttribute("data-fee");
  
    alert(`Dog's Name: ${name}\nBreed: ${breed}\nAdoption Fee: $${fee}`);
  }
  
  // Adds the adoption fee to the total each time a dog's Adopt button is clicked
  
  let totalAdoptionFee = 0;
  
  function addAdoption(event, element) {
    event.preventDefault();
    const fee = +element.getAttribute("data-fee");
    totalAdoptionFee += fee;
  
    alert(`Total adoption fees: $${totalAdoptionFee.toFixed(2)}`);
  }
  