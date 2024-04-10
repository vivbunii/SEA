/**
 * Data Catalog Project Starter Code - SEA Stage 2
 *
 * This file is where you should be doing most of your work. You should
 * also make changes to the HTML and CSS files, but we want you to prioritize
 * demonstrating your understanding of data structures, and you'll do that
 * with the JavaScript code you write in this file.
 */


// main.js

// Function to create a card for each villager
async function displayVillagers() { // Async function to fetch JSON data
    try {
        const response = await fetch('animal-crossing-villagers.json');
        const villagersData = await response.json();

        const cardContainer = document.getElementById('card-container');

        villagersData.forEach((villager) => { // Loop through each villager in the JSON data
            const cardTemplate = document.querySelector('.card');
            const cardClone = cardTemplate.cloneNode(true);
            
            cardClone.style.display = 'block';
            cardClone.querySelector('h2').textContent = villager.name;
            cardClone.querySelector('img').src = villager.image_url;
            cardClone.querySelector('img').alt = villager.name;
            cardClone.querySelector('p:nth-of-type(1)').textContent = `Species: ${villager.species}`;
            cardClone.querySelector('p:nth-of-type(2)').textContent = `Personality: ${villager.personality}`;
            cardClone.querySelector('p:nth-of-type(3)').textContent = `Gender: ${villager.gender}`;
            cardClone.querySelector('p:nth-of-type(4)').textContent = `Birthday: ${villager.birthday_month} ${villager.birthday_day}`;
            cardClone.querySelector('p:nth-of-type(5)').textContent = `Zodiac Sign: ${villager.sign}`;
            cardClone.querySelector('p:nth-of-type(6)').textContent = `Catchphrase: ${villager.quote}`;

            cardContainer.appendChild(cardClone); // Append the card to the card container
        });
    } catch (error) {
        console.error('Error loading JSON data:', error);
    }
}

// Function to filter and display villagers based on selected filters
function filterVillagers() {
    const searchInput = document.getElementById('searchInput').value.toLowerCase();
    const speciesFilter = document.getElementById('speciesFilter').value.toLowerCase();
    const personalityFilter = document.getElementById('personalityFilter').value.toLowerCase();
    const cards = document.querySelectorAll('.card');

    cards.forEach(card => { // Loop through each card
        const name = card.querySelector('h2').textContent.toLowerCase();
        const species = card.querySelector('p:nth-of-type(1)').textContent.toLowerCase();
        const personality = card.querySelector('p:nth-of-type(2)').textContent.toLowerCase();

        const nameMatch = name.includes(searchInput);
        const speciesMatch = (speciesFilter === '' || species.includes(speciesFilter)); 
        const personalityMatch = (personalityFilter === '' || personality.includes(personalityFilter));

        console.log("Name:", name);
        console.log("Species:", species);
        console.log("Personality:", personality);

        console.log("Search Input:", searchInput);
        console.log("Species Filter:", speciesFilter);
        console.log("Personality Filter:", personalityFilter);


        if (nameMatch && speciesMatch && personalityMatch){
            card.style.display = 'block'; // Show matching cards
        } else {
            card.style.display = 'none'; // Hide non-matching cards
        }
    });
}

window.onload = displayVillagers; // Display villagers when the page loads
