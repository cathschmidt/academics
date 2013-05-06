jQuery(document).ready(function(){
	
	$("#hide").click(function () {
			  $('#mainContainer').toggleClass('hide');
		  });
	
	
	$(window).scroll( function (){

	if ($(window).scrollTop() > 170){

	$('#sideBar').css('position', 'fixed').css('top','5px');

	} else {

	$('#sideBar').css('position', 'static').css('top','auto');

	}

	})
	
	
	
		
	$(window).scroll( function (){

	  		if ($(window).scrollTop() > 170){

	  		$('#top').css('bottom', '0em');

	  		} else {

	  		$('#top').css('bottom', '-4em');

	  		}

	  		})

});