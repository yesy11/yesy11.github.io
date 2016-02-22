var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");

var a = 100;
var b = 100;

var c= 50;
var d= 0;

var e = 500;
var f = 500;

var g= 50;
var h= 50;

var i = 900;
var j = 900;

var k = 4003;
var l = 0;


function draw2() { 
  
//cirle1
ctx.beginPath();
ctx.arc(a,b,c,d,2*Math.PI);
ctx.stroke();
  c+=0.8
  d+=1446

//cirle3
ctx.beginPath();
ctx.arc(a,b,c,d,2*Math.PI);
ctx.stroke();
  c+=0.8
  d+=1446
  
//darkblueline1
ctx.fillStyle = "darkblue";
ctx.fillRect(a,b,3,3);
  a+=1.6
 if (a>1000) {return a=60}
  
//cirle2
ctx.beginPath();
ctx.arc(e,f,g,h,2*Math.PI);
ctx.stroke();
  g+=0.8
  h+=1446
  
//cirle1
ctx.beginPath();
ctx.arc(i,j,k,l,2*Math.PI);
ctx.stroke();
  k+=0.8
  l+=1446

//cirle3
ctx.beginPath();
ctx.arc(i,j,k,l,2*Math.PI);
ctx.stroke();
  k+=0.8
  l+=1446
  
requestAnimationFrame(draw2);
}
requestAnimationFrame(draw2);

var i = 900;
var j = 900;

var k = 50;
var l = 0;

//cirle1
ctx.beginPath();
ctx.arc(i,j,k,l,2*Math.PI);
ctx.stroke();
  k+=0.8
  l+=1446

//cirle3
ctx.beginPath();
ctx.arc(i,j,k,l,2*Math.PI);
ctx.stroke();
  k+=0.8
  l+=1446