angular.module('application.controllers')
.controller('DrawOnCanvasController', function ($scope, $state, $stateParams) {

var test = 5;

//document.getElementById('title2').innerHTML = test;

var ctx, color = "#000";

document.addEventListener( "DOMContentLoaded", function(){

	// setup a new canvas for drawing wait for device init
    setTimeout(function(){
	   newCanvas();
    }, 1000);

}, false );


// function to setup a new canvas for drawing
$scope.newCanvas = function () {
	//define and resize canvas
    //document.getElementById("content").style.height = window.innerHeight - 90;
   	//var canvas = '<canvas id="canvas" class="canvas" width="'+window.innerWidth+'" height="'+(window.innerHeight - 90)+'"></canvas>';
// 	document.getElementById("content").innerHTML = canvas;

    // setup canvas
	$scope.ctx = document.getElementById("canvas").getContext("2d");
	$scope.ctx.strokeStyle = 'red';
	$scope.ctx.lineWidth = 5;

	// setup to trigger drawing on mouse or touch
    drawTouch();
    drawPointer();
	drawMouse();
}

//	selecting color
$scope.selectColor = function (el) {

alert(el.currentTarget.attributes.style.borderColor);
	// var dataValue = provider.target.attributes.data.value;
	// 	var textValue = provider.target.attributes.text.value;
	// 	var newStatusValue = provider.target.attributes.newStatusValue.value;

	// alle elementers borderColor og borderStyle sættes til hhv #777 og solid
    for(var i=0;i<document.getElementsByClassName("palette").length;i++) {
        document.getElementsByClassName("palette")[i].style.borderColor = "#777";
        document.getElementsByClassName("palette")[i].style.borderStyle = "solid";

        // det valgte element har sine egne farver
        el.style.borderColor = "#fff";
		el.style.borderStyle = "dashed";

    }
    /*el.target.attributes.style.borderColor = "#fff";	//el.style.borderColor = "#fff";
    el.target.attributes.style.borderStyle = "dashed";	//el.style.borderStyle = "dashed";*/
    // finder farven fra baggrundsfarven på det element, der blev klikke på
    color = window.getComputedStyle(el).backgroundColor;
    ctx.beginPath();
    ctx.strokeStyle = color;
}

// prototype to	start drawing on touch using canvas moveTo and lineTo
$scope.drawTouch = function() {
	var start = function(e) {
		$scope.ctx.beginPath();
		x = e.changedTouches[0].pageX;
		y = e.changedTouches[0].pageY-44;
		$scope.ctx.moveTo(x,y);
	};
	var move = function(e) {
		e.preventDefault();
		x = e.changedTouches[0].pageX;
		y = e.changedTouches[0].pageY-44;
		$scope.ctx.lineTo(x,y);
		$scope.ctx.stroke();
	};
    document.getElementById("canvas").addEventListener("touchstart", start, false);
	document.getElementById("canvas").addEventListener("touchmove", move, false);
};
/*
// prototype to	start drawing on pointer(microsoft ie) using canvas moveTo and lineTo
$scope.drawPointer = function() {
	var start = function(e) {
        e = e.originalEvent;
		$scope.ctx.beginPath();
		x = e.pageX;
		y = e.pageY-44;
		$scope.ctx.moveTo(x,y);
	};
	var move = function(e) {
		e.preventDefault();
        e = e.originalEvent;
		x = e.pageX;
		y = e.pageY-44;
		$scope.ctx.lineTo(x,y);
		$scope.ctx.stroke();
    };
    document.getElementById("canvas").addEventListener("MSPointerDown", start, false);

// prototype to	start drawing on mouse using canvas moveTo and lineTo
$scope.drawMouse = function() {
	var clicked = 0;
	var start = function(e) {
		clicked = 1;
		$scope.ctx.beginPath();
		x = e.pageX;
		y = e.pageY-44;
		$scope.ctx.moveTo(x,y);
	};
	var move = function(e) {
		if(clicked){
			x = e.pageX;
			y = e.pageY-44;
			$scope.ctx.lineTo(x,y);
			$scope.ctx.stroke();
		}
	};
	var stop = function(e) {
		clicked = 0;
	};
    document.getElementById("canvas").addEventListener("mousedown", start, false);
	document.getElementById("canvas").addEventListener("mousemove", move, false);
	document.addEventListener("mouseup", stop, false);
};
	document.getElementById("canvas").addEventListener("MSPointerMove", move, false);
};


//	tosti:
$scope.save = function () {
    document.getElementById("canvasimg").style.border = "0";//"2px solid";
    var dataURL = canvas.toDataURL();alert(dataURL);
    document.getElementById("canvasimg").src = dataURL;
    document.getElementById("canvasimg").style.display = "inline";
      document.getElementById("canvasimg").style.background='url(/assets/images/flora.jpg);background-size:contain;';
}


$scope.save2 = function (dURL){

var c=document.getElementById("canvas");
var ctx=c.getContext("2d");
var imageObj1 = new Image();
var imageObj2 = new Image();
imageObj1.src = "http://ks.tosti.info/api/files/p4dl5k1456614651832.png";
imageObj2.src = dURL;
$scope.ctx.drawImage(imageObj2, 0, 0, 328, 526);

	$scope.ctx.drawImage(imageObj2, 0, 0, 328, 526);
      $scope.ctx.drawImage(imageObj2, 15, 85, 300, 300);
      var img = c.toDataURL("image/png");
      document.write('<img src="' + img + '" width="328" height="526"/>');

}

$scope.save3 = function (dURL){

var img1 = "http://ks.tosti.info/api/files/p4dl5k1456614651832.png";
var img2 = dURL;
alert(img2);
$scope.canvas = document.getElementById('canvas');
$scope.context = canvas.getContext('2d');

$scope.canvas.width = img1.width;
$scope.canvas.height = img1.height;

$scope.context.globalAlpha = 1.0;
$scope.context.drawImage(img1, 0, 0);
$scope.context.globalAlpha = 0.5; //Remove if pngs have alpha
$scope.context.drawImage(img2, 0, 0);

}

var img = canvas.toDataURL("image/png");
      document.write('<img src="' + img + '" width="328" height="526"/>');

function link2mail(body){
alert(body);
document.write('<form  style="background:orange;" method="POST" action="http://ks.tosti.info/canvas/postoffice/sendmail.php"><input type="hidden" name="message" value="' + body + '"/><input type="hidden" name="subject" value="test canvas"/><input type="submit" value="send billede" /></form>');

}
function sendMail()
{
   var mailBody=document.getElementById('canvas').innerHTML;
   window.location="mailto:tosti@mac.com?subject=hii&body="+mailBody;
}
*/

    });