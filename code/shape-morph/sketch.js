const sketchWidth = 400;
const sketchHeight = 400;

function setup() {
  createCanvas(sketchWidth, sketchHeight);
}

let pMax = 10;
let rotation = 0;

function draw() {

  // const value = document.getElementById('input').attr('value');

  background(0);
  fill('white');
  translate(sketchWidth/2, sketchHeight/2);
  const radius = 150;
  for (let p = 0; p < pMax; p += 1) {
    const x = polarX(radius, 360 / pMax * p);
    const y = polarY(radius, 360 / pMax * p);
    polygon(x, y, 3 + p, 30);
  }
  rotation += 1;
}

function polygon(x, y, numSides, radius) {
  push();
  translate(x, y);
  rotate(Math.PI / 180 * rotation);
  beginShape();
  for (let s = 0; s < numSides; s += 1) {
    const x = polarX(radius, 360 / numSides * s);
    const y = polarY(radius, 360 / numSides * s);
    vertex(x, y);
  }
  endShape(CLOSE);
  pop();
}

function polarX(radius, angle) {
  const x = radius * Math.cos(Math.PI / 180 * angle);
  return x;
}

function polarY(radius, angle) {
  const y = radius * Math.sin(Math.PI / 180 * angle);
  return y;
}
    

