<?php
$bgImage = file_get_contents('/api/media/3/uri');?>
<!doctype html>
<html>
	<head>
		<title>
			canvas6
		</title>
		<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=0" /> <link rel="stylesheet" href="/canvas6.css?v=1"></link> <script type="text/javascript" src="/canvas6.js"></script>
	</head>
	<body onload="newCanvas()>
		<div id="page" style="height:100%;width:100%;">

<!--
<style>
#content {
    position: relative;

}

#content canvas {
    position: absolute;
    top: 0;
    left: 0;
}</style>
 -->
			<div id="content" class="content" style="position:relative;">
				<canvas style="z-index:10;yellow:none;top:0;left:0;margin:0;padding:0;background:url(/assets/images/flora.jpg);background-size: contain;" id="canvas" class="canvas" width="100" height="100">
				</canvas>
				<img style="background:url(<?php echo file_get_contents('/api/media/3/uri');?>;z-index:0;position:relative;top:-3000px;left:-3000px;padding:0;margin:0;width:100%" id="respondImage" src="/assets/images/flora.jpg" />
			</div>
			<div class="footer">
				<div>
					<img id="canvasimg" style="background-size:contain;" /> <input type="button" value="save" id="btn" size="30" onclick="save()" style="background:red;"> <input type="button" value="save2" id="btn" size="30" onclick="save3(canvas.toDataURL())" style="background:green;"> <input type="button" value="mail" id="btn" size="30" onclick="link2mail(canvas.toDataURL())" style="background:yellow;">

				</div>
				<div class="palette-case">
					<div class="palette-box">
						<div class="palette white" onclick="selectColor(this)">
						</div>
					</div>
					<div class="palette-box">
						<div class="palette red" onclick="selectColor(this)">
						</div>
					</div>
					<div class="palette-box">
						<div class="palette orange" onclick="selectColor(this)">
						</div>
					</div>
					<div class="palette-box">
						<div class="palette blue" onclick="selectColor(this)">
						</div>
					</div>
					<div class="palette-box">
						<div class="palette green" onclick="selectColor(this)">
						</div>
					</div>
					<div class="palette-box">
						<div class="palette black" onclick="selectColor(this)">
						</div>
					</div>
					<div style="clear:both">
					</div>
				</div>
			</div>
		</div>
<script>
	function save2(dURL){


"use strict";var c=document.getElementById("canvas");
var ctx=c.getContext("2d");
var imageObj1 = new Image();
var imageObj2 = new Image();
imageObj1.src = "http://ks.tosti.info/api/files/p4dl5k1456614651832.png";
imageObj2.src = dURL;
ctx.drawImage(imageObj2, 0, 0, 328, 526);

	ctx.drawImage(imageObj2, 0, 0, 328, 526);
      ctx.drawImage(imageObj2, 15, 85, 300, 300);
      var img = c.toDataURL("image/png");
      document.write('<img src="' + img + '" width="328" height="526"/>');

}
	</script> <script type="text/javascript">
	function save3(dURL){

var img1 = "/uploads/files/p4dl5k1456614651832.png";
var img2 = dURL;
alert(img2);
var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');

canvas.width = img1.width;
canvas.height = img1.height;

context.globalAlpha = 1.0;
context.drawImage(img1, 0, 0);
//context.globalAlpha = 0.5; //Remove if pngs have alpha
context.drawImage(img2, 0, 0);

}
var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');
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
</script> <script src="respondCanvas-jquery.js"></script> <script>window.jQuery || document.write("<script src='respondCanvas-jquery.js'>\x3C/script>")</script> <script type="text/javascript">
  	$(document).ready( function(){
		var ctx = canvas.getContext('2d');
  		//Get the canvas & context
  		var c = $('canvas');
  		var ci = $('#canvasimg');
  		//var ct = c.get(0).getContext('2d');
  		var container = $(c).parent();

  		//Run function when browser  resize
	  	$(window).resize( respondCanvas );

	  	function respondCanvas(){
  			c.attr('width', $('#respondImage').width() ); //max width
  			c.attr('height', $('#respondImage').height() ); //max height
			$('#canvasimg').css( "background","url(/assets/images/flora.jpg)" );
			$('#canvasimg').css( "background-size","contain" );
			/*$('#canvasimg').attr('width', $('#respondImage').width() ); //max width
			$('#canvasimg').attr('height', $('#respondImage').height() ); //max width*/

			ctx.lineWidth = $('#respondImage').width()/100;

  			//http://www.sitepoint.com/css3-background-size-property/

  			//Redraw & reposition content
  			var x = c.width();
  			var y = c.height();
  			ctx.font = "20px Calibri";

  			ctx.fillStyle = "#DDDDDD"; //black
  			//ct.fillRect( 0, 0, x, y); //fill the canvas

  			var resizeText = "Canvas2 width: "+c.width()+"px # height: "+c.height();
  			ctx.textAlign = "center";
  			ctx.fillStyle = "#ff0000"; //white
	  		ctx.fillText(resizeText, (x/2), (y/2) );
		}

		//Initial call
		respondCanvas();
  	});



</script>
	</body>
</html>
