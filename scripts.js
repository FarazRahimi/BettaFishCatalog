/**
 * Data Catalog Project Starter Code - SEA Stage 2
 *
 * This file is where you should be doing most of your work. You should
 * also make changes to the HTML and CSS files, but we want you to prioritize
 * demonstrating your understanding of data structures, and you'll do that
 * with the JavaScript code you write in this file.
 *
 * The comments in this file are only to help you learn how the starter code
 * works. The instructions for the project are in the README. That said, here
 * are the three things you should do first to learn about the starter code:
 * - 1 - Change something small in index.html or style.css, then reload your
 *    browser and make sure you can see that change.
 * - 2 - On your browser, right click anywhere on the page and select
 *    "Inspect" to open the browser developer tools. Then, go to the "console"
 *    tab in the new window that opened up. This console is where you will see
 *    JavaScript errors and logs, which is extremely helpful for debugging.
 *    (These instructions assume you're using Chrome, opening developer tools
 *    may be different on other browsers. We suggest using Chrome.)
 * - 3 - Add another string to the titles array a few lines down. Reload your
 *    browser and observe what happens. You should see a fourth "card" appear
 *    with the string you added to the array, but a broken image.
 *
 */

const bettaCatalog = [
  { name: "Cobalt", type: "Halfmoon", color: "Blue", care: "Beginner", image: "assets/cobalt.png", price: 25 },
  { name: "Crimson", type: "Plakat", color: "Red", care: "Beginner", image: "assets/crimson.png", price: 15 },
  { name: "Snowy", type: "Opaque", color: "White", care: "Intermediate", image: "assets/snowy.png", price: 30 },
  { name: "Midnight", type: "Crowntail", color: "Black", care: "Beginner", image: "assets/midnight.png", price: 20 },
  { name: "Sunburst", type: "Veiltail", color: "Yellow", care: "Beginner", image: "assets/sunburst.png", price: 12 },
  { name: "Orchid", type: "Halfmoon", color: "Purple", care: "Intermediate", image: "assets/orchid.png", price: 35 },
  { name: "Koi-Jin", type: "Koi Plakat", color: "Multi", care: "Expert", image: "assets/koi-jin.png", price: 50 },
  { name: "Ghost", type: "Delta", color: "Clear", care: "Intermediate", image: "assets/ghost.png", price: 28 },
  { name: "Rose", type: "Rosetail", color: "Pink", care: "Expert", image: "assets/rose.png", price: 45 },
  { name: "Emerald", type: "Alien", color: "Green", care: "Intermediate", image: "assets/emerald.png", price: 40 },
  { name: "Copper", type: "Spadetail", color: "Metallic", care: "Beginner", image: "assets/copper.png", price: 18 },
  { name: "Lavender", type: "Dumbo Ear", color: "Purple/White", care: "Intermediate", image: "assets/lavender.png", price: 22 },
  { name: "Galaxy", type: "Fancy Cooper", color: "Blue/Gold", care: "Expert", image: "assets/galaxy.png", price: 55 },
  { name: "Ruby", type: "Super Red", color: "Red", care: "Beginner", image: "assets/ruby.png", price: 14 },
  { name: "Marble", type: "Giant", color: "Blue/White", care: "Intermediate", image: "assets/marble.png", price: 60 }
];
let displayedBettas = [...bettaCatalog];
let minCatalogPrice = 0;
let maxCatalogPrice = 0;
// Your final submission should have much more data than this, and
// you should use more than just an array of strings to store it all.

// This function adds cards the page to display the data in the array
function showCards() {
  const cardContainer = document.getElementById("card-container");
  cardContainer.innerHTML = "";
  const templateCard = document.querySelector(".card");

  for (let i = 0; i < displayedBettas.length; i++) {
    let betta = displayedBettas[i];

    const nextCard = templateCard.cloneNode(true); // Copy the template card
    editCardContent(nextCard, betta); // Edit title and image
    cardContainer.appendChild(nextCard); // Add new card to the container
  }
}

function populateFilterOptions() {
  const colorFilter = document.getElementById("colorFilter");
  const careFilter = document.getElementById("careFilter");
  const colors = [];
  const careLevels = [];

  for (let i = 0; i < bettaCatalog.length; i++) {
    const betta = bettaCatalog[i];
    if (!colors.includes(betta.color)) {
      colors.push(betta.color);
    }
    if (!careLevels.includes(betta.care)) {
      careLevels.push(betta.care);
    }
  }

  for (let i = 0; i < colors.length; i++) {
    const option = document.createElement("option");
    option.value = colors[i];
    option.textContent = colors[i];
    colorFilter.appendChild(option);
  }

  for (let i = 0; i < careLevels.length; i++) {
    const option = document.createElement("option");
    option.value = careLevels[i];
    option.textContent = careLevels[i];
    careFilter.appendChild(option);
  }
}

function applyFilters() {
  const searchInput = document.getElementById("searchInput").value.toLowerCase().trim();
  const minPrice = Number(document.getElementById("minPriceFilter").value);
  const maxPrice = Number(document.getElementById("maxPriceFilter").value);
  const selectedColor = document.getElementById("colorFilter").value;
  const selectedCare = document.getElementById("careFilter").value;

  displayedBettas = bettaCatalog.filter(function (betta) {
    const matchesName = betta.name.toLowerCase().includes(searchInput);
    const matchesPrice = betta.price >= minPrice && betta.price <= maxPrice;
    const matchesColor = selectedColor === "all" || betta.color === selectedColor;
    const matchesCare = selectedCare === "all" || betta.care === selectedCare;

    return matchesName && matchesPrice && matchesColor && matchesCare;
  });

  showCards();
}

function updatePriceRangeLabel() {
  const minPrice = document.getElementById("minPriceFilter").value;
  const maxPrice = document.getElementById("maxPriceFilter").value;
  document.getElementById("priceRangeLabel").textContent = "$" + minPrice + " - $" + maxPrice;
}

function updatePriceSliderTrack() {
  const minSlider = document.getElementById("minPriceFilter");
  const maxSlider = document.getElementById("maxPriceFilter");
  const fill = document.getElementById("sliderRangeFill");

  const minValue = Number(minSlider.value);
  const maxValue = Number(maxSlider.value);
  const min = Number(minSlider.min);
  const max = Number(minSlider.max);
  const range = max - min;

  const leftPercent = ((minValue - min) / range) * 100;
  const rightPercent = ((maxValue - min) / range) * 100;

  fill.style.left = leftPercent + "%";
  fill.style.width = rightPercent - leftPercent + "%";
}

function handleMinPriceChange() {
  const minSlider = document.getElementById("minPriceFilter");
  const maxSlider = document.getElementById("maxPriceFilter");
  if (Number(minSlider.value) > Number(maxSlider.value)) {
    minSlider.value = maxSlider.value;
  }
  updatePriceRangeLabel();
  updatePriceSliderTrack();
  applyFilters();
}

function handleMaxPriceChange() {
  const minSlider = document.getElementById("minPriceFilter");
  const maxSlider = document.getElementById("maxPriceFilter");
  if (Number(maxSlider.value) < Number(minSlider.value)) {
    maxSlider.value = minSlider.value;
  }
  updatePriceRangeLabel();
  updatePriceSliderTrack();
  applyFilters();
}

function setUpPriceFilterRange() {
  minCatalogPrice = bettaCatalog[0].price;
  maxCatalogPrice = bettaCatalog[0].price;

  for (let i = 1; i < bettaCatalog.length; i++) {
    if (bettaCatalog[i].price < minCatalogPrice) {
      minCatalogPrice = bettaCatalog[i].price;
    }
    if (bettaCatalog[i].price > maxCatalogPrice) {
      maxCatalogPrice = bettaCatalog[i].price;
    }
  }

  const minSlider = document.getElementById("minPriceFilter");
  const maxSlider = document.getElementById("maxPriceFilter");

  minSlider.min = minCatalogPrice;
  minSlider.max = maxCatalogPrice;
  minSlider.value = minCatalogPrice;

  maxSlider.min = minCatalogPrice;
  maxSlider.max = maxCatalogPrice;
  maxSlider.value = maxCatalogPrice;

  minSlider.addEventListener("input", handleMinPriceChange);
  maxSlider.addEventListener("input", handleMaxPriceChange);

  updatePriceRangeLabel();
  updatePriceSliderTrack();
}

function setUpFilters() {
  document.getElementById("searchInput").addEventListener("input", applyFilters);
  document.getElementById("colorFilter").addEventListener("change", applyFilters);
  document.getElementById("careFilter").addEventListener("change", applyFilters);
}

function editCardContent(card, betta) {
  card.style.display = "block";

  const cardHeader = card.querySelector("h2");
  cardHeader.textContent = betta.name;

  const cardImage = card.querySelector("img");
  cardImage.src = betta.image;
  cardImage.alt = betta.name + " Poster";

  const bulletPoints = card.querySelectorAll("li");
  bulletPoints[0].textContent = "Type: " + betta.type;
  bulletPoints[1].textContent = "Color: " + betta.color;
  bulletPoints[2].textContent = "Care: " + betta.care + " | $" + betta.price;

  // You can use console.log to help you debug!
  // View the output by right clicking on your website,
  // select "Inspect", then click on the "Console" tab
  console.log("new card:", betta.name, "- html: ", card);
}

// This calls the addCards() function when the page is first loaded
document.addEventListener("DOMContentLoaded", function () {
  populateFilterOptions();
  setUpPriceFilterRange();
  setUpFilters();
  showCards();
});

const bettaFacts = [
  "Betta fish can breathe air from the surface thanks to a unique organ called a labyrinth.",
  "In the wild, Bettas live in rice paddies and shallow ponds.",
  "Male Bettas are famous for building 'bubble nests' on the water surface.",
  "Bettas are highly intelligent and can actually be trained to do tricks!",
  "A Betta's sleep cycle is similar to a human's; they like it dark at night.",
  "Bettas have distinct personalities-some are shy, while others are very curious.",
  "The 'tail' of a Betta is technically called a caudal fin.",
  "Bettas can recognize their human owners and will often swim to the glass to say hi.",
  "Wild Bettas are much duller in color than the ones bred for aquariums.",
  "Bettas are carnivores and need a protein-rich diet to stay healthy."
];

function quoteAlert() {
  const randomIndex = Math.floor(Math.random() * bettaFacts.length);
  const randomFact = bettaFacts[randomIndex];
  alert("Betta Fact: " + randomFact);
}

function removeLastCard() {
  displayedBettas.pop();
  showCards(); // Call showCards again to refresh
}
