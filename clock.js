/*
 * use p5.js to draw a clock on a 960x500 canvas
 */
function draw_gear(x,y,t,ts,rot,trimc,bodyc,tl,test) {//t=teeth num ts=teethsize rot=rotationspeed trimc=trimcolour bodyc=body colour tl=teeth length 1-1.5 for best relsults
  let s = ts*(t/2) //s=ellispe diameter
let trim = ts/3
push()
  translate(x,y)
  rotate(360*rot)//gear rotate
    fill(trimc)
  for(let i = 0; i < t; i++) {//teeth forloop
    rotate(360/t)
     ellipse(0,s/2,ts,ts*tl);
   }
   strokeWeight(trim)
    stroke(trimc)//trim colou
   fill(0,0,0,0)
   ellipse(0,0,s) //trims
   ellipse(0,0,s-trim*4)
   strokeWeight(trim*2)
   
    stroke(bodyc) //body colour
   
   ellipse(0,0,s-trim*2)//body

if(test>0) {
  noStroke()
  fill(255,255,255,255)
 ellipse(0,s/2,ts,ts*tl);//testing white ellipse
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

function gradient_gear(x,y,t,ts,rot,colourS,colourE,tl){

}

//232, 171, 28 trim colour
// 59, 53, 49 body colour
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
let brown = color(46, 26, 11)
let gold = color(232, 171, 28)
  let hours = obj.hours;
let minutes = obj.minutes;
let seconds = obj.seconds;
let millis = obj.millis;
let alarm = obj.seconds_until_alarm;

let milligearrot = millis
let secondgearrot = seconds + (millis / 1000.0);
let minutegearrot = minutes + (secondgearrot/60)

 // translate(width/2, height/2)
  background(50); //  beige
  fill(200); // dark grey
  textSize(40);
  noStroke()
  textAlign(CENTER, CENTER);
angleMode(DEGREES)


//   fill(249, 140, 255);// pink
//   ellipse(-125, 0, 100);

// push()
// rotate(360*minutegearrot) 
//   fill(140, 255, 251) // blue
//   ellipse(0, 0, 150);

//   for(let i = 0; i < 9; i++) {
//    rotate(360/9)
//     ellipse(0,75,30);
//   }
//   fill(255)
//   ellipse(0,75,20);
// pop()
//   fill(175, 133, 255); // purple
//   ellipse(195, 50, 250);
draw_gear(150,300,3,10,secondgearrot,gold,brown,1.5)

draw_gear(242,295,30,10,-minutegearrot*6,gold,brown,1.5)


draw_gear(300,145,30,10,minutegearrot*6,gold,brown,1.5)
draw_gear(300,145,3,10,minutegearrot*6,gold,brown,1.5)

//draw_gear(242,295,5,10,-minutegearrot*6,gold,brown,1.5)

draw_gear(327,201,18,10,-minutegearrot,gold,brown,1.5)

draw_gear(327,201,8,10,-minutegearrot,gold,brown,1.5)
draw_gear(337,248,8,10,minutegearrot,gold,brown,1.5)

//train wheel linkage maybe line with ends defined by rotaions?

draw_gear(337,248,10,30,minutegearrot,gold,brown,1.5,1)
draw_gear(150,300,10,25,secondgearrot,gold,brown,1.5,1)

//draw_gear(384,215,10,30,minutegearrot,gold,brown,1.5)




}


