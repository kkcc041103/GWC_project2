$(document).ready(function(){

	  
	$("#q1-brought").click(function(){
	  alert("According to Arcadia Power, by using a reusbale water bottle, you would be saving 1,460 plastic bottles per year!!");
	  
	  $("#q2").text("You just finished your game, how long is your shower?");
	  var show = document.getElementById("q2-15-mins");
	
	 
	 if (show.style.display === "none") {
		 show.style.display = "block";
	 }
	 	  var show1= document.getElementById("q2-30-mins");
	
	 
	 if (show1.style.display === "none") {
		 show1.style.display = "block";
	 }
	 	  var show2 = document.getElementById("q2-60-mins");
	
	 
	 if (show2.style.display === "none") {
		 show2.style.display = "block";
	 }
	});  
	  
	$("#q1-bought").click(function(){
	  alert("According to an article on EcoWatch, 1 million plastic bottles are bought every minute!!");
	   $("#q2").text("You just finished your game, how long is your shower?");
	   var show = document.getElementById("q2-15-mins");
	 
	 if (show.style.display === "none") {
		 show.style.display = "block";
	 }
	 var show1= document.getElementById("q2-30-mins");
	
	 
	 if (show1.style.display === "none") {
		 show1.style.display = "block";
	 }
	 var show2 = document.getElementById("q2-60-mins");
	
	 
	 if (show2.style.display === "none") {
		 show2.style.display = "block";
	 }
	}); 
	
	  $("#q2-15-mins").click(function(){
		  alert("The flow rate of our showerhead uses 3.5 gallons per minute So you used 52.5 gallons of water!!");
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
	  
	 $("#q2-30-mins").click(function(){
	  alert("The flow rate of our showerhead uses 3.5 gallons per minute So you used 105 gallons of water!!");
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
	  
	 $("#q2-60-mins").click(function(){
	  alert("The flow rate of our showerhead uses 3.5 gallons per minute So you used 210 gallons of water!!");
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
	  alert("Environmental Protection Agency (EPA, 2006) found that only approximately 31% of the Municipal Solid Waste generated in 2005 was from packaging-related materials");
	  
	  $("#q4").text("How did you get to your game?");
	  var show = document.getElementById("q4-Walked-or-Biked");
	
	 
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
	  var show = document.getElementById("q4-Walked-or-Biked");
	
	 
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
	  var show = document.getElementById("q4-Walked-or-Biked");
	
	 
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
	  $("#q4-Walked-or-Biked").click(function(){
	  alert("Walked/Biked!!");
	  
	  $("#q5").text("When you were leaving your house, what did you forget to turn off?");
	  var show = document.getElementById("q5-Lights");
	
	 
	 if (show.style.display === "none") {
		 show.style.display = "block";
	 }
	 	  var show1= document.getElementById("q5-Water");

		  
	 if (show1.style.display === "none") {
		 show1.style.display = "block";
	 }
	   var show1= document.getElementById("q5-Gas");

		  
	 if (show1.style.display === "none") {
		 show1.style.display = "block";
	 }
	 var show1= document.getElementById("q5-I-turned-off-everything");

		  
	 if (show1.style.display === "none") {
		 show1.style.display = "block";
	 }
	 });
	 
	 $("#q4-By-car").click(function(){
	  alert("The U.S. has 30 percent of the world's automobiles, yet it contributes about half of the world's emissions from cars.!!");
	  
	  $("#q5").text("When you were leaving your house, what did you forget to turn off?");
	  var show = document.getElementById("q5-Lights");
	
	 
	 if (show.style.display === "none") {
		 show.style.display = "block";
	 }
	 	  var show1= document.getElementById("q5-Water");

		  
	 if (show1.style.display === "none") {
		 show1.style.display = "block";
	 }
	   var show1= document.getElementById("q5-Gas");

		  
	 if (show1.style.display === "none") {
		 show1.style.display = "block";
	 }
	 var show1= document.getElementById("q5-I-turned-off-everything");

		  
	 if (show1.style.display === "none") {
		 show1.style.display = "block";
	 }
	 });
	  $("#q4-Public-Transport").click(function(){
	  alert("Public Transport!!");
	  
	  $("#q5").text("When you were leaving your house, what did you forget to turn off?");
  var show = document.getElementById("q5-Lights");
	
	 
	 if (show.style.display === "none") {
		 show.style.display = "block";
	 }
	 	  var show1= document.getElementById("q5-Water");

		  
	 if (show1.style.display === "none") {
		 show1.style.display = "block";
	 }
	   var show1= document.getElementById("q5-Gas");

		  
	 if (show1.style.display === "none") {
		 show1.style.display = "block";
	 }
	 var show1= document.getElementById("q5-I-turned-off-everything");

		  
	 if (show1.style.display === "none") {
		 show1.style.display = "block";
	 }
	 });
	 
	   $("#q5-Lights").click(function(){
	  alert("The International Dark-Sky Association (IDA), a non-profit organization that raises awareness of light pollution, estimates that excessive nighttime lighting releases more than 12 million tons of carbon dioxide, the most serious greenhouse gas, into the atmosphere each year. It would take nearly 702 million trees to absorb the carbon dioxide produced by wasted light!!");
	  
	  $("#q6").text("What type of bag do you use to carry your groceries?");
	  var show = document.getElementById("q6-Plastic");
	
	 
	 if (show.style.display === "none") {
		 show.style.display = "block";
	 }
	 	  var show1= document.getElementById("q6-Paper");

		  
	 if (show1.style.display === "none") {
		 show1.style.display = "block";
	 }
	  var show1= document.getElementById("q6-Reusable");

		  
	 if (show1.style.display === "none") {
		 show1.style.display = "block";
	 }
	 });
	 
	 $("#q5-Water").click(function(){
	  alert("Not Good!!");
	  
	  $("#q6").text("What type of bag do you use to carry your groceries?");
	  var show = document.getElementById("q6-Plastic");
	
	 
	 if (show.style.display === "none") {
		 show.style.display = "block";
	 }
	 	  var show1= document.getElementById("q6-Paper");

		  
	 if (show1.style.display === "none") {
		 show1.style.display = "block";
	 }
	  var show1= document.getElementById("q6-Reusable");

		  
	 if (show1.style.display === "none") {
		 show1.style.display = "block";
	 }
	 });
	 
	 $("#q5-Gas").click(function(){
	  alert("Not Good!!");
	  
	  $("#q6").text("What type of bag do you use to carry your groceries?");
	  var show = document.getElementById("q6-Plastic");
	
	 
	 if (show.style.display === "none") {
		 show.style.display = "block";
	 }
	 	  var show1= document.getElementById("q6-Paper");

		  
	 if (show1.style.display === "none") {
		 show1.style.display = "block";
	 }
	  var show1= document.getElementById("q6-Reusable");

		  
	 if (show1.style.display === "none") {
		 show1.style.display = "block";
	 }
	 });

	   $("#q5-I-turned-off-everything").click(function(){
		  alert("Good Job!!");
		  
		  $("#q6").text("What type of bag do you use to carry your groceries?");
		  var show = document.getElementById("q6-Plastic");
		
		 
		 if (show.style.display === "none") {
			 show.style.display = "block";
		 }
			  var show1= document.getElementById("q6-Paper");

			  
		 if (show1.style.display === "none") {
			 show1.style.display = "block";
		 }
		  var show1= document.getElementById("q6-Reusable");

			  
		 if (show1.style.display === "none") {
			 show1.style.display = "block";
		 }
		 });

		 
	    $("#q6-Plastic").click(function(){
		  alert("Plastic doesn’t biodegrade. It’s forever. Plastic bags get into soil and slowly release toxic chemicals. They eventually break down into the soil, with the unfortunate result being that animals eat them and often choke and die.!!");
		
		$("#q7").text("Use public transport. Keep up car maintenance to reduce leakage of oil, antifreeze and other fluids. Keep a trash bag in the car. Never throw trash out of your car window.");
		 var showEnd = document.getElementById("toggle");
		 
		  if (showEnd.style.display === "none") {
			 showEnd.style.display = "block";
		 }
	 });
	 
	   $("#q6-Paper").click(function(){
	  alert("Statistics!!");
	  
	  $("#q7").text("Use public transport. Keep up car maintenance to reduce leakage of oil, antifreeze and other fluids. Keep a trash bag in the car. Never throw trash out of your car window.");
	 
	  var showEnd = document.getElementById("toggle");
		 
		  if (showEnd.style.display === "none") {
			 showEnd.style.display = "block";
		 }
	 
	 });
	 
	  $("#q6-Reusable").click(function(){
	  alert("Statistics!!");
	  
	  $("#q7").text("Use public transport. Keep up car maintenance to reduce leakage of oil, antifreeze and other fluids. Keep a trash bag in the car. Never throw trash out of your car window.");
	 
	  var showEnd = document.getElementById("toggle");
		 
		  if (showEnd.style.display === "none") {
			 showEnd.style.display = "block";
		 }
	 });
	 
	  });