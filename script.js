$(document).ready(function()
	{
	
		$("answer").click(function() 
		{
		
			var issues = $("community issues").val();
		
			if (issues == "excessive waste")
			{
				answer = "h3";
				$("answer").html("h3");
			}
		
		});

	});