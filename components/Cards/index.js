// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.
const cardsContainer = document.querySelector(".cards-container");
axios
  .get("https://lambda-times-backend.herokuapp.com/articles")
  .then(response => {
    var info = response.data.articles;
    for (topic in info) {
      const data = info[topic].forEach(obj =>
        cardsContainer.appendChild(card(obj))
      );
    }
  })
  .catch(e => {
    console.log("error", e);
  });

function card(data) {
  // Created Card Div
  var cardDiv = document.createElement("div");
  cardDiv.classList.add("card");

  // Created Headline Div
  var headlineDiv = document.createElement("div");
  headlineDiv.classList.add("headline");
  headlineDiv.textContent = data.headline;
  cardDiv.appendChild(headlineDiv);

  // Created Author Div
  var authorDiv = document.createElement("div");
  authorDiv.classList.add("author");
  cardDiv.appendChild(authorDiv);

  // Created Image Container Div
  var imageContainerDiv = document.createElement("div");
  imageContainerDiv.classList.add("img-container");
  authorDiv.appendChild(imageContainerDiv);

  // Created Image
  var newImg = document.createElement("img");
  newImg.src = data.authorPhoto;
  imageContainerDiv.appendChild(newImg);

  // Created Span
  var span = document.createElement("span");
  span.textContent = data.authorName;
  authorDiv.appendChild(span);

  // Append Div to Page
  cardsContainer.appendChild(cardDiv);
  return cardDiv;
}
