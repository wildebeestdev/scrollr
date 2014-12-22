$(function(){
	$('#checky2').click(function(){
		if ($('#customurl').css("opacity")=="0")
		{
			$("#customurl").animate({"opacity": 1},100);
		}
		else
		{
			$("#customurl").animate({"opacity": 0},100);
		}
	});

	$('.generateembedcode').click(function(){
		var condition1 = $('#checky').prop('checked') && !$('#checky2').prop('checked');
		var condition2 = !$('#checky').prop('checked') && $('#checky2').prop('checked');
		var condition3 = $('#checky').prop('checked') && $('#checky2').prop('checked');
		if (condition1){
			// https://googledrive.com/host/0B-0_gMK-4dyCaTdOc3hGTTdIUlE
			$('.codegenerated').text('<script src="https://googledrive.com/host/0B-0_gMK-4dyCaTdOc3hGTTdIUlE" type="text/javascript"></script>');		
		}	
		else if (condition2){
			var url = $('#customurl').val();
			$('.codegenerated').text('<script src="https://googledrive.com/host/0B-0_gMK-4dyCdFVlc1owOGJGME0" id="button" class="' + url + '" type="text/javascript"></script>');
		}
		else if(condition3){
			var url = $('#customurl').val();
			$('.codegenerated').text('<script src="https://googledrive.com/host/0B-0_gMK-4dyCQUxoWVlpNGlNUXc" id="pulseandbutton" class="' + url + '" type="text/javascript"></script>');
		}
		else{
			// no selections nothing happens
		}
	});

});