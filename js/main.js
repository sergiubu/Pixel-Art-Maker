// Select color input
let color = $('#colorPicker');
const clearColor = $('#clearColor');
let fillColor = $('#fillColor');
// Select input
let height = $('#input_height');
let width = $('#input_width');
// Select table
const table = $('#pixel_canvas');
// Select form
const form = $('#sizePicker');
// Clear Canvas
const clearCanvas = $('#clearCanvas');

function makeGrid() {
  // Clear previous grid
  table.empty();

  // Create Canvas
  for (let r = 0; r < height.val(); r++) {
    let tr = $('<tr></tr>');
    table.append(tr);

    for (let c = 0; c < width.val(); c++) {
      let td = $('<td></td>');
      tr.append(td);
    }
  }
}

// Color cell
table.on('click', 'td', function() {
  $(this).css('background-color', color.val());
});

// Fill Canvas with selected color
fillColor.on('click', function() {
  const td = $('td');
  td.css('background-color', color.val());
});

// Dynamic fillColor button
fillColor.css('background-color', '#4267B2').hover(
  function() {
    $(this).css('background-color', color.val());
  },

  function() {
    $(this).css('background-color', '#4267B2');
  });

// Delete cell color
table.on('dblclick', 'td', function() {
  $(this).css('background-color', '');
});

// Delete canvas color
clearColor.on('click', function() {
  const td = $('td');
  td.css('background-color', '');
});

// Click & drag to draw
table.on('mousedown mouseover contextmenu', 'td', function(e) {
  e.preventDefault();
  if (e.buttons === 1) {
    $(this).css('background-color', color.val());
  } else if (e.buttons === 2) {
    $(this).css('background-color', '');
  }
});

// Stop form from submitting & call function makeGrid
form.on('change', function(e) {
  e.preventDefault();
  makeGrid();
});

// Clear Canvas
clearCanvas.click(function() {
  table.empty();
});

// Vanilla slider value
let slider1 = document.getElementById('input_height');
let output1 = document.getElementById('val1');
output1.innerHTML = slider1.value;

slider1.oninput = function() {
  output1.innerHTML = this.value;
}

let slider2 = document.getElementById('input_width');
let output2 = document.getElementById('val2');
output2.innerHTML = slider2.value;

slider2.oninput = function() {
  output2.innerHTML = this.value;
}
