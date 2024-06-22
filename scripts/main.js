// Displays name, breed, and adoption fee when a dog's photo is clicked

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

// Adding blog posts

(function () {
  console.log("IIFE started");

  // Array of new blog posts to be added dynamically
  const newBlogPosts = [
    {
      headline: "Adding Enrichment Activities",
      imageUrl: "images/blog-1.jpg",
      text: `When you have led me to where the great man is, what do you want?
        He will tend to you, where is the pain of your flight? Fresh water
        and then, when he wills, he is recuperated, or
        You are like a fan of the rumpled arum, which is seen as an office
        with the lips of a corporeal face, you are the one who exclaims the spirit
        whether or not ant has fled, let him not crawl to the castle
        they would like to run away from the unsettled, and to lead those who are as important or
        the labor of autatia ad is the work of the acca and all cus, od qui ate`
    },
    {
      headline: "Scheduling Playtime",
      imageUrl: "images/blog-2.jpg",
      text: `When you have led me to where the great man is, what do you want?
        He will tend to you, where is the pain of your flight? Fresh water
        and then, when he wills, he is recuperated, or
        You are like a fan of the rumpled arum, which is seen as an office
        with the lips of a corporeal face, you are the one who exclaims the spirit
        whether or not ant has fled, let him not crawl to the castle
        they would like to run away from the unsettled, and to lead those who are as important or
        the labor of autatia ad is the work of the acca and all cus, od qui ate`
    },
    {
      headline: "Feeding Your Dog for Optimal Health",
      imageUrl: "images/blog-3.jpg",
      text: `When you have led me to where the great man is, what do you want?
        He will tend to you, where is the pain of your flight? Fresh water
        and then, when he wills, he is recuperated, or
        You are like a fan of the rumpled arum, which is seen as an office
        with the lips of a corporeal face, you are the one who exclaims the spirit
        whether or not ant has fled, let him not crawl to the castle
        they would like to run away from the unsettled, and to lead those who are as important or
        the labor of autatia ad is the work of the acca and all cus, od qui ate`
    }
  ];

  // Function to add a blog post
  function addBlogPost(post) {
    const blogContainer = document.querySelector("#blog-content");
    if (!blogContainer) {
      console.error("#blog-content not found");
      return;
    }

    const section = document.createElement("div");
    section.classList.add("intro-section");

    const img = document.createElement("img");
    img.src = post.imageUrl;
    img.alt = `A picture related to ${post.headline}`;
    section.appendChild(img);

    const textDiv = document.createElement("div");
    textDiv.classList.add("intro-text");

    const h2 = document.createElement("h2");
    h2.textContent = post.headline;
    textDiv.appendChild(h2);

    const p = document.createElement("p");
    p.textContent = post.text;
    textDiv.appendChild(p);

    section.appendChild(textDiv);
    blogContainer.appendChild(section);
    console.log("Blog post added:", post.headline);
  }

  // Check if the current page has the #blog-content element
  if (document.querySelector("#blog-content")) {
    console.log("#blog-content found");
    // Loop through the array of new blog posts and add each to the page
    newBlogPosts.forEach((post) => addBlogPost(post));
  } else {
    console.log("#blog-content not found");
  }

  // Function to handle form submission
  const contactForm = document.getElementById("contact-form");
  if (contactForm) {
    console.log("Contact form found");
    contactForm.addEventListener("submit", function (event) {
      event.preventDefault();
      alert(
        "Thank you! We've received your information. We will be in touch shortly."
      );

      // Collect form values
      const formData = {
        name: contactForm.applicantName.value,
        email: contactForm.applicantEmail.value,
        phone: contactForm.applicantPhone.value,
        contactMethod: contactForm.contactMethod.value,
        contactReason: contactForm.contactReason.value,
        message: contactForm.applicantMessage.value,
        bestTime: contactForm.bestTime.value,
        dogPreferences: Array.from(contactForm.querySelectorAll('input[name="dogPreference"]:checked')).map(checkbox => checkbox.value)
      };

      // Log form values
      console.log("Form Data:", formData);

      contactForm.reset();
      console.log("Form submitted");
    });
  } else {
    console.error("Contact form not found");
  }
})();