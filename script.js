window.addEventListener("DOMContentLoaded", function() {
  var textBox = document.querySelector(".text-box");
  var spaceFlag = false;
  var imageTimeout;
  var clickedImage = null; // Store the reference to the clicked image

  textBox.addEventListener("keydown", function(event) {
    if (event.key === " ") {
      spaceFlag = true;
    }
  });

  textBox.addEventListener("keyup", function(event) {
    if (event.key === " " && spaceFlag) {
      clearTimeout(imageTimeout); // Clear any previous timeout
      var message = textBox.innerText;
      var caretPosition = getCaretPosition(textBox);

      if (message.trim().endsWith("space")) {
        var imageTags = '<img src="astronaut-g9c1b70390_1920.png" alt="Space Image" class="resizable-image" style="width: 150px; height: 150px;">';
        textBox.innerHTML += imageTags;
      } else if (message.trim().endsWith("rocket")) {
        var imageTags = '<img src="rocket-gc9c7b6b03_1920.jpg" alt="Rocket Image" class="resizable-image" style="width: 150px; height: 150px;">';
        textBox.innerHTML += imageTags;
      } else if (message.trim().endsWith("messi")) {
        var imageTags = '<img src="lionel-messi-g8892bc3a8_1920.jpg" alt="Messi Image" class="resizable-image" style="width: 150px; height: 150px;">';
        textBox.innerHTML += imageTags;
      }  else if (message.trim().endsWith("Messi")) {
        var imageTags = '<img src="lionel-messi-g8892bc3a8_1920.jpg" alt="Messi Image" class="resizable-image" style="width: 150px; height: 150px;">';
        textBox.innerHTML += imageTags;
      } else if (message.trim().endsWith("ronaldo")) {
        var imageTags = '<img src="cristiano-ronaldo-g95e5ddd86_1920.png" alt="ronaldo Image" class="resizable-image" style="width: 150px; height: 150px;">';
        textBox.innerHTML += imageTags;
      }  else if (message.trim().endsWith("Ronaldo")) {
        var imageTags = '<img src="cristiano-ronaldo-g95e5ddd86_1920.png" alt="ronaldo Image" class="resizable-image" style="width: 150px; height: 150px;">';
        textBox.innerHTML += imageTags;
      } else if (message.trim().endsWith("football")) {
        var imageTags = '<img src="soccer-g8e507349e_1920.jpg" alt="football Image" class="resizable-image" style="width: 150px; height: 150px;">';
        textBox.innerHTML += imageTags;
      }  else if (message.trim().endsWith("Football")) {
        var imageTags = '<img src="soccer-g8e507349e_1920.jpg" alt="football Image" class="resizable-image" style="width: 150px; height: 150px;">';
        textBox.innerHTML += imageTags;
      } else if (message.trim().endsWith("modi")) {
        var imageTags = '<img src="modi-g9d057b13e_1920.jpg" alt="Modi Image" class="resizable-image" style="width: 150px; height: 150px;">';
        textBox.innerHTML += imageTags;
      } else if (message.trim().endsWith("Modi")) {
        var imageTags = '<img src="modi-g9d057b13e_1920.jpg" alt="Modi Image" class="resizable-image" style="width: 150px; height: 150px;">';
        textBox.innerHTML += imageTags;
      } else if (message.trim().endsWith("putin")) {
        var imageTags = '<img src="putin-g61e46c756_1920.jpg" alt="putin Image" class="resizable-image" style="width: 150px; height: 150px;">';
        textBox.innerHTML += imageTags;
      }  else if (message.trim().endsWith("Putin")) {
        var imageTags = '<img src="putin-g61e46c756_1920.jpg" alt="putin Image" class="resizable-image" style="width: 150px; height: 150px;">';
        textBox.innerHTML += imageTags;
      } else if (message.trim().endsWith("biden")) {
        var imageTags = '<img src="joe-biden-g6ee0c1e5d_1920.jpg" alt="biden Image" class="resizable-image" style="width: 150px; height: 150px;">';
        textBox.innerHTML += imageTags;
      }  else if (message.trim().endsWith("Biden")) {
        var imageTags = '<img src="joe-biden-g6ee0c1e5d_1920.jpg" alt="biden Image" class="resizable-image" style="width: 150px; height: 150px;">';
        textBox.innerHTML += imageTags;
      } else if (message.trim().endsWith("king")) {
        var imageTags = '<img src="king-g672888e99_1920.jpg" alt="king Image" class="resizable-image" style="width: 150px; height: 150px;">';
        textBox.innerHTML += imageTags;
      } else if (message.trim().endsWith("lion")) {
        var imageTags = '<img src="lion-gd8a8e712f_1920.jpg" alt="lion Image" class="resizable-image" style="width: 150px; height: 150px;">';
        textBox.innerHTML += imageTags;
      } else if (message.trim().endsWith("politics")) {
        var imageTags = '<img src="direction-gf5df8d266_1920.jpg" alt="politics Image" class="resizable-image" style="width: 150px; height: 150px;">';
        textBox.innerHTML += imageTags;
      } else if (message.trim().endsWith("coding")) {
        var imageTags = '<img src="programming-gf27b85057_1920.jpg" alt="coding Image" class="resizable-image" style="width: 150px; height: 150px;">';
        textBox.innerHTML += imageTags;
      }
      // Add more conditions for other words and their respective images

      imageTimeout = setTimeout(function() {
        var messageContent = textBox.innerHTML;
        var updatedMessage = messageContent.replace(/<img[^>]+>/gi, "");
        textBox.innerHTML = updatedMessage;
        setCaretPosition(textBox, caretPosition);
      }, 3000);

      spaceFlag = false;
    }

    if (event.key !== " ") {
      clearTimeout(imageTimeout);
      spaceFlag = false;
    }
  });

  textBox.addEventListener("click", function(event) {
    var target = event.target;
    if (target.classList.contains("resizable-image")) {
      clearTimeout(imageTimeout);
      clickedImage = target; // Store the reference to the clicked image
    }
  });

  var sendButton = document.querySelector(".send-button");
  sendButton.addEventListener("click", function() {
    var messageContent = textBox.innerHTML;
    localStorage.setItem("messageContent", messageContent);
    var width = textBox.offsetWidth;
    var height = textBox.offsetHeight;
    localStorage.setItem("messageWidth", width);
    localStorage.setItem("messageHeight", height);
    window.open("message.html", "_blank");
  });

  function getCaretPosition(element) {
    // Function to get caret position
    // Implementation omitted for brevity
  }

  function setCaretPosition(element, caretPos) {
    // Function to set caret position
    // Implementation omitted for brevity
  }
});