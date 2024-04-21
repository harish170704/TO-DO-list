function addtask() {
  var inputValue = document.getElementById("input").value;
  if (inputValue === '') {
    alert("You must write something!");
    return;
  }

  var li = document.createElement("li");
  var textNode = document.createTextNode(inputValue);
  li.appendChild(textNode);

  document.getElementById("list").appendChild(li);
  document.getElementById("input").value = "";

  var closeButton = document.createElement("span");
  var closeText = document.createTextNode("\u00D7");
  closeButton.className = "close";
  closeButton.appendChild(closeText);
  li.appendChild(closeButton);

  var closeButtons = document.getElementsByClassName("close");
  for (var i = 0; i < closeButtons.length; i++) {
    closeButtons[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }

  li.onclick = function() {
    this.classList.toggle('checked');
  }
}
