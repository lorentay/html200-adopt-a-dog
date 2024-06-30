document.getElementById('search-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const searchInput = document.getElementById('search-input').value.trim();
    let url = '';

    if (searchInput) {
        // Searches by cocktail name first
        url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchInput}`;

        fetch(url)
            .then(response => response.json())
            .then(data => {
                if (data.drinks) {
                    displayResults(data);
                } else {
                    // If no results, it searches by ingredient
                    url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${searchInput}`;
                    return fetch(url);
                }
            })
            .then(response => response.json())
            .then(data => {
                if (data && data.drinks) {
                    // If the search by ingredient returns results, it retrieves the recipe and instruction details for each cocktail
                    const drinkIds = data.drinks.map(drink => drink.idDrink);
                    const detailPromises = drinkIds.map(id => fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`).then(res => res.json()));
                    return Promise.all(detailPromises);
                } else {
                    document.getElementById('results').innerHTML = '<p>No results found.</p>';
                    return [];
                }
            })
            .then(detailsArray => {
                if (detailsArray.length > 0) {
                    const detailedDrinks = detailsArray.map(details => details.drinks[0]);
                    displayResults({ drinks: detailedDrinks });
                }
            })
            .catch(error => console.error('Error:', error))
            .finally(() => {
                // Clears the input box and reset the placeholder text
                document.getElementById('search-input').value = '';
                document.getElementById('search-input').placeholder = 'Search by cocktail name or ingredient';
            });
    } else {
        alert('Please enter a search term.');
    }
});

function displayResults(data) {
    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = '';

    if (data.drinks) {
        data.drinks.forEach(drink => {
            const drinkDiv = document.createElement('div');
            drinkDiv.classList.add('result-item');
            const ingredients = getIngredients(drink);
            drinkDiv.innerHTML = `
                <img src="${drink.strDrinkThumb}" alt="${drink.strDrink}">
                <div class="result-text">
                    <h2>${drink.strDrink}</h2>
                    <p><strong>Ingredients:</strong><br>${ingredients}</p>
                    <p><strong>Instructions:</strong><br>${drink.strInstructions}</p>
                </div>
            `;
            resultsDiv.appendChild(drinkDiv);
        });
    } else {
        resultsDiv.innerHTML = '<p>No results found.</p>';
    }
}

function getIngredients(drink) {
    let ingredients = '';
    for (let i = 1; i <= 15; i++) {
        const ingredient = drink[`strIngredient${i}`];
        const measure = drink[`strMeasure${i}`];
        if (ingredient) {
            ingredients += `${measure ? measure : ''} ${ingredient}<br>`;
        }
    }
    return ingredients;
}

