/*
 * use p5.js to draw a clock on a 960x500 canvas
 */
function draw_gear(x, y, t, ts, rot, trimc, bodyc, tl, test, arms) { //t=teeth num ts=teethsize rot=rotationspeed trimc=trimcolour bodyc=body colour tl=teeth length 1-1.5 for best relsults
  let s = ts * (t / 2) //s=ellispe diameter
  let trim = ts / 3
  push()
  translate(x, y)
  rotate(360 * rot) //gear rotate
  fill(trimc)
  for (let i = 0; i < t; i++) { //teeth forloop
    rotate(360 / t)
    ellipse(0, s / 2, ts, ts * tl);
  }
  if (arms > 0) {
    fill(bodyc)
    strokeWeight(3)
    stroke(trimc)
    for (let i = 0; i < 5; i++) { //teeth forloop
      rotate(360 / 5)
      rect(0, s / 4, s / 10, s / 2)
    }
    ellipse(0, 0, ts * (s / 50), ts * (s / 50))
    ellipse(0, 0, ts * 1.5, ts * 1.5)
  }
  strokeWeight(trim)
  stroke(trimc) //trim colou
  fill(0, 0, 0, 0)
  ellipse(0, 0, s) //trims
  ellipse(0, 0, s - trim * 4)
  strokeWeight(trim * 2)

  stroke(bodyc) //body colour

  ellipse(0, 0, s - trim * 2) //body

  if (test > 0) {
    noStroke()
    fill(255, 255, 255)
    ellipse(0, -s / 2, ts, ts * tl); //testing white ellipse
  }
  pop()
}
function brick_wall_layer(x,y,l,h,nx,g,c){

  push()
  rectMode(CENTER)
  strokeWeight(2)
  stroke(50,25,25)
  fill(c)
    for(let i = 0; i < nx; i++){
      rect(x,y,l,h)
      translate(l+g,0)
    }
pop()
}
function radialGradient(sX, sY, sR, eX, eY, eR, colorS, colorE) {
  let gradient = drawingContext.createRadialGradient(
    sX, sY, sR, eX, eY, eR
  );
  gradient.addColorStop(0, colorS);
  gradient.addColorStop(1, colorE);
  drawingContext.fillStyle = gradient;

}

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
  rectMode(CENTER)
  //colours
  let brown = color(46, 26, 11)
  let redbrown = color(86, 36, 21)
  let gold = color(232, 171, 28)
  let gold2 = color(190, 100, 10)
  let gold3 = color(160, 100, 10)
  let maroon = color(110, 47, 59)
  let oxycopper = color(52, 163, 115)
  let copper = color(207, 72, 27)
  let silver = color(173, 166, 149)
  let forgeGlowS = color(255, 171, 58, 10)
  let forgeGlowE = color(200, 121, 18, 50)
  let nightvinetteE = color(100, 250, 255, 120)
  let nightvinetteS = color(0, 0, 0, 0)

  let hours = obj.hours;
  let minutes = obj.minutes;
  let seconds = obj.seconds;
  let millis = obj.millis;
  let alarm = obj.seconds_until_alarm;

  let secondgearrot = seconds + (millis / 1000.0);
  let minutegearrot = minutes + (secondgearrot / 60)
  let hoursgearrot = hours + (minutegearrot / 60)

  let glowflicker = map(millis, 0, 999, width / 2, width / 3)
  
  let speedup = 1//for general gear speedchange
  if (alarm < 0) {
    speedup = 1
  }
  if (alarm > 0) {
    speedup = map(alarm, 15, 0, 1, 10000)
  }
  if (alarm == 0) {
    speedup = 10000
  }
  //make a map with seconds_until_alarm
  // translate(width/2, height/2)
  background(50);
  fill(255);
  textSize(40);
  textAlign(CENTER, CENTER);
  angleMode(DEGREES)
  //bricks
  brick_wall_layer(655,-20,100,50,6,8,redbrown)
  brick_wall_layer(600,40,100,50,6,8,redbrown)
  brick_wall_layer(655,100,100,50,6,8,redbrown)
  brick_wall_layer(600,160,100,50,6,8,redbrown)
  brick_wall_layer(655,220,100,50,6,8,redbrown)
  brick_wall_layer(600,280,100,50,6,8,redbrown)
  brick_wall_layer(655,340,100,50,6,8,redbrown)
  brick_wall_layer(600,400,100,50,6,8,redbrown)
  brick_wall_layer(655,460,100,50,6,8,redbrown)
  fill(redbrown)
  stroke(50,25,25)
  rect(575,-20,50,50)
  rect(575,100,50,50)
  rect(575,220,50,50)
  rect(575,340,50,50)
  rect(575,460,50,50)
//gears sorted by axle numbers/maingears
  //1
  draw_gear(120, 300, 3, 10, (secondgearrot) * speedup, oxycopper, brown, 1.5)
  //2
  draw_gear(212, 295, 30, 10, (-minutegearrot * 6) * speedup, gold, brown, 1.5, 0, 1)
  //3
  draw_gear(270, 145, 30, 10, (minutegearrot * 6) * speedup, gold3, brown, 1.5, 0, 1)
  draw_gear(270, 145, 3, 10, (minutegearrot * 6) * speedup, gold3, brown, 1.5)
  //4
  draw_gear(297, 201, 18, 10, (-minutegearrot) * speedup, gold, brown, 1.5)
  draw_gear(297, 201, 6, 10, (-minutegearrot) * speedup, gold, brown, 1.5)
  //5
  draw_gear(307, 238, 6, 10, (minutegearrot) * speedup, copper, brown, 1.5)
  //6
  draw_gear(481, 238, 60, 10, (-minutegearrot / 10) * speedup, gold3, brown, 1.5, 0, 1)
  draw_gear(481, 238, 3, 10, (-minutegearrot / 10) * speedup, gold3, brown, 1.5)
  //7
  draw_gear(500, 179, 18, 10, (hoursgearrot) * speedup, silver, brown, 1.5, 0, 1)
  //8
  draw_gear(490, 299, 18, 10, (hoursgearrot) * speedup, gold2, brown, 1.5, 0, 1)
  draw_gear(490, 299, 3, 10, (hoursgearrot) * speedup, gold2, brown, 1.5, 0, 1)
  //9
  draw_gear(562, 380, 36, 10, (-hoursgearrot / 12) * speedup, gold, brown, 1.5, 0, 1)
  //10
  draw_gear(738, 306, 36, 10, (hoursgearrot / 12) * speedup, gold, brown, 1.5, 0, 1)
  draw_gear(738, 306, 6, 15, (hoursgearrot / 12) * speedup, gold, brown, 1.5, 0, 1)
  //11
  draw_gear(668, 346, 12, 15, (hoursgearrot / 12) * speedup, maroon, brown, 1.5, 0, 1)
  //maingears
  draw_gear(307, 238, 10, 30, (minutegearrot) * speedup, copper, brown, 1.5, 1) //1 rotation per minute (use to find seconds)
  draw_gear(120, 300, 10, 25, (secondgearrot) * speedup, oxycopper, brown, 1.5, 1) //1 rotation per second (use to find milliseconds)
  draw_gear(500, 179, 12, 28, (hoursgearrot) * speedup, silver, brown, 1.5, 1) //1 rotation her hour(use to find minutes)
  draw_gear(668, 346, 12, 30, (hoursgearrot / 24) * speedup, maroon, brown, 1.5, 1) //1 rotation per day

  if (hours > 8 && hours < 18) { //day ambiance
    push()
    ellipseMode(RADIUS)
    radialGradient(width / 2, height / 4, 70, width / 2, height, width-glowflicker, forgeGlowS, forgeGlowE)
    rect(width / 2, height / 2, width, height)
    pop()
  } else { //night ambiance
    push()
    ellipseMode(RADIUS)
    radialGradient(width / 2, height / 2, 100, width / 2, height, width, nightvinetteS, nightvinetteE)
    rect(width / 2, height / 2, width, height)
    pop()
  }
}