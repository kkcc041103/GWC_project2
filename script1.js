$(document).ready(function(){

	  
	$("#q1-brought").click(function(){
	  alert("brought!!");
	  
	  $("#q2").text("You just finished your game, how long is your shower?");
	  var show = document.getElementById("q2-5-mins");
	
	 
	 if (show.style.display === "none") {
		 show.style.display = "block";
	 }
	 	  var show1= document.getElementById("q2-10-mins");
	
	 
	 if (show1.style.display === "none") {
		 show1.style.display = "block";
	 }
	 	  var show2 = document.getElementById("q2-15-mins");
	
	 
	 if (show2.style.display === "none") {
		 show2.style.display = "block";
	 }
	});  
	  
	$("#q1-bought").click(function(){
	  alert("bought!!");
	   $("#q2").text("You just finished your game, how long is your shower?");
	   var show = document.getElementById("q2-5-mins");
	
	 
	 if (show.style.display === "none") {
		 show.style.display = "block";
	 }
	 	  var show1= document.getElementById("q2-10-mins");
	
	 
	 if (show1.style.display === "none") {
		 show1.style.display = "block";
	 }
	 	  var show2 = document.getElementById("q2-15-mins");
	
	 
	 if (show2.style.display === "none") {
		 show2.style.display = "block";
	 }
	}); 
	
	  $("#q2-5-mins").click(function(){
	  alert("mins!!");
	  console.log("hi");
	  $("#q3").text("What did you have for lunch?");
	
	  });
	 $("#q2-10-mins").click(function(){
	  alert("mins!!");
	  console.log("hi");
	  $("#q3").text("What did you have for lunch?");
	
	  });
	 $("#q2-15-mins").click(function(){
	  alert("mins!!");
	  console.log("hi");
	  $("#q3").text("What did you have for lunch?");
	
	  });
   
	 	 
	 	 
	 
});
