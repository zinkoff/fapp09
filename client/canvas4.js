var ctx, color = "#000";

document.addEventListener( "DOMContentLoaded", function(){

	// setup a new canvas for drawing wait for device init
    setTimeout(function(){
	   newCanvas();
    }, 1000);

}, false );

// function to setup a new canvas for drawing
function newCanvas(){
	//define and resize canvas
    document.getElementById("content").style.height = window.innerHeight-90;
   //  var canvas = '<canvas id="canvas" class="canvas" width="'+window.innerWidth+'" height="'+(window.innerHeight-90)+'"></canvas>';
// 	document.getElementById("content").innerHTML = canvas;

    // setup canvas
	ctx=document.getElementById("canvas").getContext("2d");
	ctx.strokeStyle = 'red';
	ctx.lineWidth = 5;

	// setup to trigger drawing on mouse or touch
    drawTouch();
    drawPointer();
	drawMouse();
}