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
  let hours = obj.hours;
let minutes = obj.minutes;
let seconds = obj.seconds;
let millis = obj.millis;
let alarm = obj.seconds_until_alarm;

let secondgearrot = seconds + (millis / 1000.0);
let minutegearrot = minutes + ((seconds + millis/1000)/60)


  translate(width/2, height/2)
  background(50); //  beige
  fill(200); // dark grey
  textSize(40);
  textAlign(CENTER, CENTER);
angleMode(DEGREES)


  fill(249, 140, 255);// pink
  ellipse(-125, 0, 100);

push()
rotate(360 / secondgearrot)
  fill(140, 255, 251) // blue
  ellipse(0, 0, 150);

  for(let i = 0; i < 9; i++) {
   rotate(360/9)
    ellipse(0,75,20);
  }
  fill(255)
  ellipse(0,75,20);
pop()

  fill(175, 133, 255); // purple
  ellipse(195, 50, 250);

}

//function draw_gear(x,y,t,)