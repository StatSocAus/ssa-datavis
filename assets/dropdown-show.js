function show_input(x, id, nmax) {
    for (let i = 1; i < nmax + 1; i++) {
      document.getElementById(id + i).style.display = 'none';
    }
    var value = x.value;  
    document.getElementById(id + value).style.display = 'block';


};

function show_lesson(i) {
  document.getElementById('dropdown-videos').value=i;
  document.getElementById('dropdown-slides').value=i;
  show_input(document.getElementById('dropdown-slides'), 'dropdown-slides', 12);
  document.getElementById('tabset-1-' + i + "-tab").click();
};
