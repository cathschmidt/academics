jQuery(document).ready(function(){
	$(window).scroll( function (){

	if ($(window).scrollTop() > 170){

	$('#sideBar').css('position', 'fixed').css('top','5px');

	} else {

	$('#sideBar').css('position', 'static').css('top','auto');

	}

	})
	
	var arcPosition = jQuery('#architecture').offset().top;
	
	jQuery('#architecture').click(function(){
		// Scroll down to 'philPosition'
		jQuery('html, body').animate({scrollTop:arcPosition}, 'slow');
		// Stop the link from acting like a normal anchor link
		return false;
	});
	
	$(window).scroll( function (){

	  		if ($(window).scrollTop() > 170){

	  		$('#top').css('bottom', '0em');

	  		} else {

	  		$('#top').css('bottom', '-4em');

	  		}

	  		})

})