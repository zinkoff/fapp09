	var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");
  	$(document).ready( function(){

  		//Get the canvas & context
  		var canvas = $('canvas');
  		var ci = $('#canvasimg');
  		//var ct = c.get(0).getContext('2d');
  		var container = $(c).parent();

  		//Run function when browser  resize
	  	$(window).resize( respondCanvas );

	  	function respondCanvas(){


  			canvas.attr('width', $('#respondImage').width() ); //max width
  			canvas.attr('height', $('#respondImage').height() ); //max height
			$('#canvasimg').css( "background","url(/assets/images/flora.jpg)" );
			$('#canvasimg').css( "background-size","contain" );
			/*$('#canvasimg').attr('width', $('#respondImage').width() ); //max width
			$('#canvasimg').attr('height', $('#respondImage').height() ); //max width*/

			ctx.lineWidth = $('#respondImage').width()/100;

  			//http://www.sitepoint.com/css3-background-size-property/

  			//Redraw & reposition content
  			var x = canvas.width();
  			var y = canvas.height();
  			ctx.font = "20px Calibri";

  			ctx.fillStyle = "#DDDDDD"; //black
  			//ct.fillRect( 0, 0, x, y); //fill the canvas

  			var resizeText = "Canvas2 width: " + canvas.width() + "px # height: " + canvas.height();
  			ctx.textAlign = "center";
  			ctx.fillStyle = "#ff0000"; //white
	  		ctx.fillText(resizeText, (x/2), (y/2) );
		}

		//Initial call
		respondCanvas();
  	});

