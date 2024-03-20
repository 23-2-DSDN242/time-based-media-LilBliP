/*
 * use p5.js to draw a clock on a 960x500 canvas
 */
function draw_gear(x,y,t,ts,rot,trimc,bodyc,tl,test,arms) {//t=teeth num ts=teethsize rot=rotationspeed trimc=trimcolour bodyc=body colour tl=teeth length 1-1.5 for best relsults
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
   if(arms>0){
    fill(bodyc)
    strokeWeight(3)
    stroke(trimc)
    for(let i = 0; i < 5; i++) {//teeth forloop
     rotate(360/5)
     rect(0,s/4,s/10,s/2)
    }
    ellipse(0,0,ts*(s/50),ts*(s/50))
    ellipse(0,0,ts*1.5,ts*1.5)
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
 ellipse(0,-s/2,ts,ts*tl);//testing white ellipse
}
  pop()
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
let gold = color(232, 171, 28)
let gold2 = color(190,100,10)
let oxycopper = color(52, 163, 115)
let copper = color(207, 72, 27)
let silver = color(173, 166, 149)


  let hours = obj.hours;
let minutes = obj.minutes;
let seconds = obj.seconds;
let millis = obj.millis;
let alarm = obj.seconds_until_alarm;

let secondgearrot = seconds + (millis / 1000.0);
let minutegearrot = minutes + (secondgearrot/60)
let hoursgearrot = hours + (minutegearrot/60)

let speedup = 1

if(alarm < 0){
   speedup = 1
}
if(alarm > 0){
  speedup = map(alarm,15,0,1,10000)
}
if(alarm == 0){
  speedup = 10000
}
let glowheight = map(millis,0,999,0,height)-map(seconds,0,59,0,height/2)
 //make a map with seconds_until_alarm
 // translate(width/2, height/2)
  background(50); //  beige
  fill(255); // dark grey
  textSize(40);
  textAlign(CENTER, CENTER);
angleMode(DEGREES)


draw_gear(100,300,3,10,(secondgearrot)*speedup,oxycopper,brown,1.5)

draw_gear(192,295,30,10,(-minutegearrot*6)*speedup,gold,brown,1.5,0,1)


draw_gear(250,145,30,10,(minutegearrot*6)*speedup,gold,brown,1.5,0,1)
draw_gear(250,145,3,10,(minutegearrot*6)*speedup,gold2,brown,1.5)



draw_gear(277,201,18,10,(-minutegearrot)*speedup,gold2,brown,1.5)

draw_gear(277,201,6,10,(-minutegearrot)*speedup,gold2,brown,1.5)
draw_gear(287,238,6,10,(minutegearrot)*speedup,copper,brown,1.5)


draw_gear(461,238,60,10,(-minutegearrot/10)*speedup,gold,brown,1.5,0,1)
draw_gear(461,238,3,10,(-minutegearrot/10)*speedup,gold,brown,1.5)

draw_gear(480,179,18,10,(hoursgearrot)*speedup,silver,brown,1.5,0,1)

draw_gear(470,299,18,10,(hoursgearrot)*speedup,gold,brown,1.5,0,1)
draw_gear(470,299,3,10,(hoursgearrot)*speedup,gold2,brown,1.5,0,1)

draw_gear(542,380,36,10,(-hoursgearrot/12)*speedup,gold,brown,1.5,0,1)


draw_gear(718,306,36,10,(hoursgearrot/12)*speedup,gold,brown,1.5,0,1)
draw_gear(718,306,6,15,(hoursgearrot/12)*speedup,gold,brown,1.5,0,1)

draw_gear(648,346,12,15,(hoursgearrot/12)*speedup,gold2,brown,1.5,0,1)


draw_gear(287,238,10,30,(minutegearrot)*speedup,copper,brown,1.5,1)//1 rotation per minute (use to find seconds)
draw_gear(100,300,10,25,(secondgearrot)*speedup,oxycopper,brown,1.5,1)//1 rotation per second (use to find milliseconds)
draw_gear(480,179,12,28,(hoursgearrot)*speedup,silver,brown,1.5,1)//1 rotation her hour(use to find minutes)
draw_gear(648,346,12,30,(hoursgearrot/24)*speedup,gold2,brown,1.5,1)//1 rotation per day

if(hours > 8 && hours < 18){
  noStroke()
  fill(207,72,27,20)
rect(width/2,height,width,glowheight)
}

}


