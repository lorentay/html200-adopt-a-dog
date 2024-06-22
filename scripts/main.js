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

  (function() {
    
    // Array of new blog posts to be added dynamically
    const newBlogPosts = [
      {
        headline: "Adding Enrichment Activities",
        imageUrl: "images/blog-4.jpeg",
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
        imageUrl: "images/blog-4.jpeg",
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
        imageUrl: "images/blog-4.jpeg",
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
      const section = document.createElement('div');
      section.classList.add('intro-section');
  
      const img = document.createElement('img');
      img.src = post.imageUrl;
      img.alt = `A picture related to ${post.headline}`;
      section.appendChild(img);
  
      const textDiv = document.createElement('div');
      textDiv.classList.add('intro-text');
  
      const h2 = document.createElement('h2');
      h2.textContent = post.headline;
      textDiv.appendChild(h2);
  
      const p = document.createElement('p');
      p.textContent = post.text;
      textDiv.appendChild(p);
  
      section.appendChild(textDiv);
  
      const blogContainer = document.querySelector('#blog-content');
      blogContainer.appendChild(section);
    }
  
    // Loop through the array of new blog posts and add each to the page
    newBlogPosts.forEach(post => addBlogPost(post));
  })();
     