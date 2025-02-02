// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>
const topics = document.querySelector(".topics");
axios
  .get("https://lambda-times-backend.herokuapp.com/topics")
  .then(response => {
    var info = response.data.topics;
    for (i = 0; i < info.length; i++) {
      tabs(info[i]);
    }
  })
  .catch(error => console.log("error", error));

function tabs(item) {
  var topic = document.createElement("div");
  topic.textContent = item;
  topic.classList.add("tab");

  topics.appendChild(topic);
}
