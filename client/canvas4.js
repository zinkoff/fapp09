'use strict';
/*jslint browser:true */

//part01

//variables
var alert, ctx, x, y, drawTouch, drawPointer, drawMouse, canvas, color = "#000";

//
//--functions--//
//

//function to setup a new canvas for drawing
function newCanvas() {
    //define and resize canvas

    document.getElementById("content").style.height = window.innerHeight - 90;
   //  var canvas = '<canvas id = "canvas" class = "canvas" width = "'+window.innerWidth+'" height = "'+(window.innerHeight-90)+'"></canvas>';
//     document.getElementById("content").innerHTML = canvas;

    // setup canvas
    ctx = document.getElementById("canvas").getContext("2d");
    ctx.strokeStyle = 'red';
    ctx.lineWidth = 5;

    // setup to trigger drawing on mouse or touch
    drawTouch();
    drawPointer();
    drawMouse();
}

document.addEventListener("DOMContentLoaded", function () {

    // setup a new canvas for drawing wait for device init
    setTimeout(function () {
        newCanvas();
    }, 1000);

}, false);

function selectColor(el) {

    var i;
    for (i = 0; i < document.getElementsByClassName("palette").length; i++) {
        document.getElementsByClassName("palette")[i].style.borderColor = "#777";
        document.getElementsByClassName("palette")[i].style.borderStyle = "solid";
    }
    el.style.borderColor = "#fff";
    el.style.borderStyle = "dashed";
    color = window.getComputedStyle(el).backgroundColor;
    ctx.beginPath();
    ctx.strokeStyle = color;
}

// prototype to start drawing on touch using canvas moveTo and lineTo
var drawTouch = function () {
    var start, move;
    start = function (e) {
        ctx.beginPath();
        x = e.changedTouches[0].pageX;
        y = e.changedTouches[0].pageY - 44;
        ctx.moveTo(x, y);
    };
    move = function (e) {
        e.preventDefault();
        x = e.changedTouches[0].pageX;
        y = e.changedTouches[0].pageY - 44;
        ctx.lineTo(x, y);
        ctx.stroke();
    };
    document.getElementById("canvas").addEventListener("touchstart", start, false);
    document.getElementById("canvas").addEventListener("touchmove", move, false);
};

// prototype to    start drawing on pointer(microsoft ie) using canvas moveTo and lineTo
var drawPointer = function () {
    var start, move;
    start = function (e) {
        e = e.originalEvent;
        ctx.beginPath();
        x = e.pageX;
        y = e.pageY - 44;
        ctx.moveTo(x, y);
    };
    move = function (e) {
        e.preventDefault();
        e = e.originalEvent;
        x = e.pageX;
        y = e.pageY - 44;
        ctx.lineTo(x, y);
        ctx.stroke();
    };
    document.getElementById("canvas").addEventListener("MSPointerDown", start, false);
    document.getElementById("canvas").addEventListener("MSPointerMove", move, false);
};

// prototype to    start drawing on mouse using canvas moveTo and lineTo
var drawMouse = function () {

    var start, move, stop, clicked = 0;
    start = function (e) {
        clicked = 1;
        ctx.beginPath();
        x = e.pageX;
        y = e.pageY - 44;
        ctx.moveTo(x, y);
    };
    move = function (e) {
        if (clicked) {
            x = e.pageX;
            y = e.pageY - 44;
            ctx.lineTo(x, y);
            ctx.stroke();
        }
    };
    stop = function (e) {
        clicked = 0;
    };

    document.getElementById("canvas").addEventListener("mousedown", start, false);
    document.getElementById("canvas").addEventListener("mousemove", move, false);
    document.addEventListener("mouseup", stop, false);
};

//    tosti:
function save() {
    document.getElementById("canvasimg").style.border = "0"; //"2px solid";
    var dataURL = canvas.toDataURL();
    alert(dataURL);
    document.getElementById("canvasimg").src = dataURL;
    document.getElementById("canvasimg").style.display = "inline";
    document.getElementById("canvasimg").style.background = 'url(/assets/images/flora.jpg); background-size:contain;';
}

//part02

function save2(dURL) {

    var c = document.getElementById("canvas"), ctx = c.getContext("2d"), imageObj1 = new Image(), imageObj2 = new Image(), img;
    imageObj1.src = "http://ks.tosti.info/api/files/p4dl5k1456614651832.png";
    imageObj2.src = dURL;
    ctx.drawImage(imageObj2, 0, 0, 328, 526);
    ctx.drawImage(imageObj2, 0, 0, 328, 526);
    ctx.drawImage(imageObj2, 15, 85, 300, 300);
    img = c.toDataURL("image/png");
    document.write('<img src = "' + img + '" width = "328" height = "526"/>');

}

//part03

function save3(dURL) {

    var img1 = "http://ks.tosti.info/api/files/p4dl5k1456614651832.png", img2 = dURL, canvas = document.getElementById('canvas'), context = canvas.getContext('2d');
    alert(img2);
    canvas.width = img1.width;
    canvas.height = img1.height;
    context.globalAlpha = 1.0;
    context.drawImage(img1, 0, 0);
    context.globalAlpha = 0.5; //Remove if pngs have alpha
    context.drawImage(img2, 0, 0);
    var img = canvas.toDataURL("image/png");
document.write('<img src = "' + img + '" width = "328" height = "526"/>');

}


//part04



function link2mail(body) {
    alert(body);
    document.write('<form  style = "background:orange;" method = "POST" action = "http://ks.tosti.info/canvas/postoffice/sendmail.php"><input type = "hidden" name = "message" value = "' + body + '"/><input type = "hidden" name = "subject" value = "test canvas"/><input type = "submit" value = "send billede" /></form>');

}

function sendMail() {
    var mailBody = document.getElementById('canvas').innerHTML;
    window.location = "mailto:tosti@mac.com?subject = hii&body = " + mailBody;
}
