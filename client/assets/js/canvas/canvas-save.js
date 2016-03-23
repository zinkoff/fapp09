//	tosti:
function save() {
    document.getElementById("canvasimg").style.border = "2px solid";
    var dataURL = canvas.toDataURL();alert(dataURL);
    document.getElementById("canvasimg").src = dataURL;
    document.getElementById("canvasimg").style.display = "inline";
}


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
      document.write('<img src="' + img + '" width="328" height="526" />');

}

	function save3(dURL){

var img1 = "http://ks.tosti.info/api/files/p4dl5k1456614651832.png";
var img2 = dURL;
alert(img2);
var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');

canvas.width = img1.width;
canvas.height = img1.height;

context.globalAlpha = 1.0;
context.drawImage(img1, 0, 0);
context.globalAlpha = 0.5; //Remove if pngs have alpha
context.drawImage(img2, 0, 0);
var img = canvas.toDataURL("image/png");
      document.write('<img src="' + img + '" width="328" height="526" />');

}

