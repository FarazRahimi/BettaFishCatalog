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
  console.log("new card:", newTitle, "- html: ", card);
}

// This calls the addCards() function when the page is first loaded
document.addEventListener("DOMContentLoaded", showCards);

function quoteAlert() {
  console.log("Button Clicked!");
  alert(
    "I guess I can kiss heaven goodbye, because it got to be a sin to look this good!",
  );
}

function removeLastCard() {
  displayedBettas.pop();
  showCards(); // Call showCards again to refresh
}
