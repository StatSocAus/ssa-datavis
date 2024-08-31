function onwindowresize() {
  var doc = document.getElementById("quarto-document-content");
  var items = document.getElementsByClassName("dim169");
  var width = doc.offsetWidth;

  for (var i = 0; i < items.length; i++) {
   items[i].style.height = width * 9 / 16 + "px";
  }
}

onwindowresize();

window.onresize = onwindowresize;
