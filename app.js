$(function(){
	// console.log($('#checky2').prop('checked'));
	
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
});