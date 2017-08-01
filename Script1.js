// JavaScript source code
var function lateRide(n) {
 var hour = n/60; 
 var min = n%60;
 return Math.floor(hour/10) + hour%10 + Math.floor(min/10) + min%10
}

lateRide(800); 