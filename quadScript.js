//Javascript for drawing and calculating quadratics 2017
var a, b, c, context, w, h, k=10;

function init() {
  canvas= document.getElementById("mycanvas");
  context = canvas.getContext("2d");
  w = canvas.width = 600;
  h = canvas.height = 400;
  console.log('canvas is loaded into context',w);
  graphpaper();
}  // close init

function QF() {
  // getting values to do quadratic formula
  a = $("#quadA").val();
  b = $("#linB").val();
  c = $("#constant").val();
  x1=(-b+math.sqrt(b**2-4*a*c))/(2*a)
  x1= math.round (x1*10000)/10000;
  x2= (-b-math.sqrt(b**2-4*a*c))/(2*a)
  $("#solution1").text("x intercepy is at"+x1)
  $("#solution1").text("x intercepy is at"+x1)


  console.log(a,b,c);
  results();
}  // close QF

function results() {
  // finding vertext and displaying symline and yint results
  vX = -(b*1)/(2*a);
  vY = a*Math.pow(vX,2)+b*vX+c*1;
  $("#vertex").text("Vertex is at (" + vX+","+vY+")");
  $("#y-int").text("Y intercept is at (0," + c+")");
}  // close results()
  //today: y intercept and corresponding point.
   // make a new variable and use $("") with an new paragraphs
function graphpaper() {

  context.linewidth = 3;
  context.beginPath();
  context.moveTo(w/2,0);
  context.lineTo(w/2,h);
  context.stroke();

   context.linewidth = 3;
  context.beginPath();
  context.moveTo(0,h/2);
  context.lineTo(w,h/2);
  context.stroke();
 
  // thin line with a 50% opacity using rgba() 
  context.lineWidth=1;
  context.strokeStyle="rgba(0,0,255,.5)";

  //using the direct variation constant, k
  //  here are the vertical and horizontal lines

  for (i=0; i<h/(2*k); i++) {
    context.beginPath();
    context.moveTo( 0, h/2-i*k );
    context.lineTo( w, h/2-i*k );
    context.stroke();


    context.beginPath();
    context.moveTo( 0, h/2+i*k );
    context.lineTo( w, h/2+i*k );
    context.stroke();
}

for (i=0; i<w/(2*k); i++) {
    context.beginPath();
    context.moveTo( w/2-i*k,0 );
    context.lineTo( w/2-i*k,w );
    context.stroke();


    context.beginPath();
    context.moveTo( w/2+i*k,0 );
    context.lineTo( w/2+i*k,h );
    context.stroke();
}












}
function graphQuad () {
  for (var i = 0; i < w; i++) {
    x = (w/2-i)/k;
    y = c*1+b*x+a*Math.pow(x,2);
    nx =  (w/2-(i+1))/k;
    ny =  c*1+b*nx+a*Math.pow(nx,2);
    console.log(x,y,nx,ny);
    context.beginPath();
    context.lineWidth = 2;
    context.strokeStyle = "Red";
    context.moveTo(x/2+x*k,h/2-y*k);
    context.stroke();
  }

  }

