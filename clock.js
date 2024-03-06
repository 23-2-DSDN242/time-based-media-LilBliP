/*
 * use p5.js to draw a clock on a 960x500 canvas
 */
function draw_clock(obj) {
  // draw your own clock here based on the values of obj:
  //    obj.hours goes from 0-23
  //    obj.minutes goes from 0-59
  //    obj.seconds goes from 0-59
  //    obj.millis goes from 0-999
  //    obj.seconds_until_alarm is:
  //        < 0 if no alarm is set
  //        = 0 if the alarm is currently going off
  //        > 0 --> the number of seconds until alarm should go off
  translate(width/2, height/2)
  background(50); //  beige
  fill(200); // dark grey
  textSize(40);
  textAlign(CENTER, CENTER);



  fill(249, 140, 255);// pink
  ellipse(-170, 0, 100);
  fill(140, 255, 251) // blue
  ellipse(-45, 0, 150);
  fill(175, 133, 255); // purple
  ellipse(150, 50, 250);

}
