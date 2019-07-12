// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .headerContainer component

function header() {
  // Created Header Div
  var headerDiv = document.createElement("div");
  headerDiv.classList.add("header");

  // Created Span Date
  var spanDate = document.createElement("span");
  spanDate.classList.add("date");
  spanDate.textContent = "SMARCH 28, 2019";
  headerDiv.appendChild(spanDate);

  // Created H1
  var h1 = document.createElement("h1");
  h1.textContent = "Lambda Times";
  headerDiv.appendChild(h1);

  // Created Span Temp
  var spanTemp = document.createElement("span");
  spanTemp.classList.add("temp");
  spanTemp.textContent = "98°";
  headerDiv.appendChild(spanTemp);

  const headerContainer = document.querySelector(".header-container");
  console.log(headerContainer);
  headerContainer.appendChild(headerDiv);
}
header();
