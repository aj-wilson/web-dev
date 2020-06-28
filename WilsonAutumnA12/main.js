/*
     Filename: main.css
  
     Author: Autumn Wilson
     Date: 12/7/2017
 */
function computearea(r){
	return Math.PI*r*r;
}

$(document).ready(function(){
	
	$("#calculatearea").click(function(){
		
		var p = $("#precision").val();
		
		var r = $("#radius").val();
		
		var a = computearea(r);
		
		$("#area").val(a.toFixed(p));
	});
	
});