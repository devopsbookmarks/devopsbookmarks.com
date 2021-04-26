function filter() {
  var children = document.getElementsByClassName("content-grid")[0].children;
  var input = document.getElementById("search-input").value.toUpperCase();

  for (var index in children) {
    var child = children[index];

    if (child.children === undefined) {
      break;
    }

    var toolName = child.children[0].firstElementChild.innerText;

    if (toolName.toUpperCase().indexOf(input) > -1) {
      child.style.display = "";
    } else {
      child.style.display = "none";
    }
  }
}
