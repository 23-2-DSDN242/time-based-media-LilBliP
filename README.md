## MDDN 242 Project 1: Time-based Media  

### THIS IS YOUR README

Clockwork Workgears
By Lliam Booth

HOW TO READ
Each coloured gear displays a certain unit of time through a single rotaion per the unit greater than it eg milliseconds are read using the gear that rotates once per second this tells you both how far through the larger unit you are and the current number of smaller units
blue-green("oxycopper") gear = millisecond (1 rotation per second)
orange("copper") gear = seconds (1 rotation per minute)
grey("silver") gear = minutes (1 rotation per hour)
maroon gear = hours (1 rotation per day)

I began my initial ideation based first on the sketches put forward by my pers (i was behind due to enrollment issues) this gave me several interesting directions initially i looked in to an idea by Ethan Scarrow that of a cars speedometer and dashboard this made me think of and aircraft and its various intruments and dials however i felt this was too similar which lead me to the idea of making a traditional clock without the UI ie the hands of the clock using the gears themselves to tell the time. this evolved to have a steampunk asthetic although the more detailed asthetic i was initally wanting proved to be out of scope as several bugs made this impossible to implement in the way i intended forcing me to maintain a simplified asthetic instead (which was far easier to code) from here i created by inital working gears and used this code to create a specialised function to draw the gears (im really glad i did this overwise i would not have finished) math gear ratios and possitioning was the most time consuming part if i had to manually do all of this it would be impossible to finish on time. as i was making the gears i decided on each of their colours sticking to various metal colours to stay within theme whilst adding contrast to the primary gears

CHANGELOG
// 5/03/24 created maede clock and created initial sketch with gear idea 
![alt_text](readmeimg/<preview.jpg>)
// 7/03/24 created first working gear with so called "flick" bug where full rotation would occur once every minute in a sudden motion
// 7/03/24 created basic gear function for drawing gears complete various bug fixes
// 10/03/24 began creating additional ability for gears to have gradient colour
//14/03/24 abandoned gradient colour gears in favour of pursuing a simplified steampunk asthetic
//19/03/24 made testing ellipse actually toggleable on draw_gear. completed minute gear finally and mechanism between second gear and minute gear
//19/03/24 added unique gear colours to existing primary gears eg second minute. added hour gear and mechanism. chose colours primaryily based on steam punk colour palete eg copper brass silver etc.fixed test ellipse (was possitioned incorrectly at bottom of gears meaning they were upsidedown). added gold2 colour to add some contrast between mechannism gears as they were visually merging due to low contrast. added "speedup" to all gear rotates to allow future work on alarm map
//21/03/24 completed final gear, updated final gear colour,added 3rd gold colour for additional contrast added alarm function using speedup, added day/night ambiance using radial gradients mapped to milliseconds for flickering effect, experimented with different background colours but found they caused the gears to lag for some unknown reason so reverted to original background colour. reversed day ambiance to be a vinette similar to night to avoid gradient cliping bug