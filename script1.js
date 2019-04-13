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
		  var show = document.getElementById("q3-packaged-food");
		 
		 if (show.style.display === "none") {
			 show.style.display = "block";
		 }
		 var show = document.getElementById("q3-home-cooked");
		 
		 if (show.style.display === "none") {
			 show.style.display = "block";
		 }
		 var show = document.getElementById("q3-fast-food");
		 
		 if (show.style.display === "none") {
			 show.style.display = "block";
		 }
	
	  });
	  
	 $("#q2-10-mins").click(function(){
	  alert("mins!!");
	  console.log("hi");
	  $("#q3").text("What did you have for lunch?");
			  var show = document.getElementById("q3-packaged-food");
		 
		 if (show.style.display === "none") {
			 show.style.display = "block";
		 }
		 var show = document.getElementById("q3-home-cooked");
		 
		 if (show.style.display === "none") {
			 show.style.display = "block";
		 }
		 var show = document.getElementById("q3-fast-food");
		 
		 if (show.style.display === "none") {
			 show.style.display = "block";
		 }
	
	  });
	  
	 $("#q2-15-mins").click(function(){
	  alert("mins!!");
	  console.log("hi");
	  $("#q3").text("What did you have for lunch?");
			  var show = document.getElementById("q3-packaged-food");
		 
		 if (show.style.display === "none") {
			 show.style.display = "block";
		 }
		 var show = document.getElementById("q3-home-cooked");
		 
		 if (show.style.display === "none") {
			 show.style.display = "block";
		 }
		 var show = document.getElementById("q3-fast-food");
		 
		 if (show.style.display === "none") {
			 show.style.display = "block";
		 }
	
	  });
	  
   $("#q3-packaged-food").click(function(){
	  alert("Food!!");
	  
	  $("#q4").text("How did you get to your game?");
	  var show = document.getElementById("q4-Walked/Biked");
	
	 
	 if (show.style.display === "none") {
		 show.style.display = "block";
	 }
	 	  var show1= document.getElementById("q4-By-car");
	
	 
	 if (show1.style.display === "none") {
		 show1.style.display = "block";
	 }
	 	  var show2 = document.getElementById("q4-Public-Transport");
	
	 
	 if (show2.style.display === "none") {
		 show2.style.display = "block";
	 }
	 });
	 
	 $("#q3-home-cooked").click(function(){
	  alert("Food!!");
	  
	  $("#q4").text("How did you get to your game?");
	  var show = document.getElementById("q4-Walked/Biked");
	
	 
	 if (show.style.display === "none") {
		 show.style.display = "block";
	 }
	 	  var show1= document.getElementById("q4-By-car");
	
	 
	 if (show1.style.display === "none") {
		 show1.style.display = "block";
	 }
	 	  var show2 = document.getElementById("q4-Public-Transport");
	
	 
	 if (show2.style.display === "none") {
		 show2.style.display = "block";
	 }
	 });
	 	 
		 
	 $("#q3-fast-food").click(function(){
	  alert("Food!!");
	  
	  $("#q4").text("How did you get to your game?");
	  var show = document.getElementById("q4-Walked/Biked");
	
	 
	 if (show.style.display === "none") {
		 show.style.display = "block";
	 }
	 	  var show1= document.getElementById("q4-By-car");

		  
	 if (show1.style.display === "none") {
		 show1.style.display = "block";
	 }
	 	  var show2 = document.getElementById("q4-Public-Transport");
	
	 
	 if (show2.style.display === "none") {
		 show2.style.display = "block";
	 }
	 });
	 
	 $("#q4-Walked/Biked").click(function(){
	  alert("Walked/Biked!!");
	  
	  $("#q5").text("After you left your house, did you turn off the lights?");
	  var show = document.getElementById("q5-Yes");
	
	 
	 if (show.style.display === "none") {
		 show.style.display = "block";
	 }
	 	  var show1= document.getElementById("q5-No");

		  
	 if (show1.style.display === "none") {
		 show1.style.display = "block";
	 }
	 });
});
