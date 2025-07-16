let canvas;

function setup() {
  canvas = createCanvas(400, 400);
  windowResized();
  
}

function draw() {
    background(220);
  ellipse(mouseX, mouseY, 50, 50);
}

// Diese Funktion wird aufgerufen, wenn das Fenster geändert wird
function windowResized() {
  let aspectRatio = 16 / 9;
  let w = windowWidth;
  let h = windowHeight;

  if (w / h > aspectRatio) {
    // Bildschirm ist breiter als 16:9
    w = h * aspectRatio;
  } else {
    // Bildschirm ist höher als 16:9
    h = w / aspectRatio;
  }

  resizeCanvas(w, h);
  centerCanvas();
  
}

// Canvas zentrieren, damit es schön in der Mitte bleibt
function centerCanvas() {
  let x = (windowWidth - width) / 2;
  let y = (windowHeight - height) / 2;
  canvas.position(x, y);
}