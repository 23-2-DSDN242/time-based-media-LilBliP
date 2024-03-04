// Update this function to draw you own maeda clock on a 960x500 canvas

function draw_clock(obj) {
  // YOUR MAIN CLOCK CODE GOES HERE
  translate(width / 2, height / 2);
  angleMode(DEGREES)
  background(50); //  beige
  fill(200); // dark grey
  textAlign(CENTER, CENTER);
  push();
  rotate(360 / 12 * obj.hours)
  textSize(200);
  text(obj.hours, 0, 0);
  pop()
  push()
  rotate(360 / 60 * obj.minutes)
  fill(255, 0, 0)
  textSize(100);
  text(obj.minutes, 0, 0);
  pop()
  push()
  rotate(360 / 60 * obj.seconds)
  fill(0, 255, 0)
  textSize(50);
  text(obj.seconds, 0, 0);
  pop()
}