// Function to save message to local storage
// localStorage.clear();
function saveMessage() {
  var message = document.getElementById("textInput").value;
  if (message !== "") {
    var messages = JSON.parse(localStorage.getItem("messages")) || [];
    messages.push(message);
    localStorage.setItem("messages", JSON.stringify(messages));
    displayMessage(message); // Display the new message
    document.getElementById("textInput").value = "";
  } else {
    alert("Please enter a message!");
  }
}

// Function to display messages
function displayMessages() {
  var messageBoard = document.getElementById("messageBoard");
  messageBoard.innerHTML = ""; // Clear existing messages
  var messages = JSON.parse(localStorage.getItem("messages")) || [];
  messages.forEach(function(message) {
    displayMessage(message); // Display each saved message
  });
}

// Function to display a single message
function displayMessage(message) {
  var messageBoard = document.getElementById("messageBoard");
  var div = document.createElement("div");
 
  var h3 = document.createElement("h3");
  var h4 = document.createElement("h4");
  var p = document.createElement("p");

  h3.textContent = "User Name"; // Replace "User Name" with the actual user name
  h4.textContent = "Date"; // Replace "Date" with the actual date
  p.textContent = message;

 
  div.appendChild(h3);
  div.appendChild(h4);
  div.appendChild(p);

  messageBoard.appendChild(div);
}

// Display messages on page load
window.onload = displayMessages;
