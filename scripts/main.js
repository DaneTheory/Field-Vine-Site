// Fades out an image of the first video frame
// to avoid the jumping look the video has
// when it starts playing.
//
// This function starts playing the video
// as soon as the browser determines it
// can play the video without any buffering.
$(document).ready(function() {
	var vid = document.getElementById("vid");
		vid.oncanplaythrough = function() {	
			$("#firstFrame").fadeOut("slow");
				vid.oncanplay = vid.play();
			}
});		

$(document).ready(function() {
	  // Fire focuspoint plugin
	
	  // Initiates the focus point plugin, which keeps a specfic part
	  // of the background image for each section in the viewport. As 
	  // the viewport is resized the focal point stays in view, while
	  // the rest of the bg overflows. Focal point set in the HTML using
	  // data attr X Y cord system to map over bg image.
	  $('.focuspoint').focusPoint();
});
	
$(document).ready(function() {	
	// Fit Text
	
	// code belows dynamicly resizes the heading within each section
	// as the window is resized. Text is resized to fill the containing 
	// parent div. Each heading container div has a set width.
	window.fitText( document.getElementById("welcome-heading"), .5 );
	window.fitText( document.getElementById("collaborate-heading"), 1.2 );
	window.fitText( document.getElementById("phone-text"), 2.25 );
	window.fitText( document.getElementById("tablet-text"), 2.25 );
	window.fitText( document.getElementById("tools-heading-top"), 0.8 );
	window.fitText( document.getElementById("tools-p"), 1.3 );
	window.fitText( document.getElementById("beta-p"), 1.2 );
	window.fitText( document.getElementById("connect-heading"), 0.6 );
	window.fitText( document.getElementById("connect-p"), 1.8 );
	window.fitText( document.getElementsByClassName("team-modal"), 2.4 );
	window.fitText( document.getElementById("mobile-text"), 2.2 );
	window.fitText( document.getElementById("grow-text"), 2.0 );
	window.fitText( document.getElementById("blue-box"), 2.2 );
	window.fitText( document.getElementById("red-box"), 2.2 );
	window.fitText( document.getElementById("yellow-box"), 2.2 );
	window.fitText( document.getElementById("default"), 2.6 );
});	
	

$(document).ready(function() {	
	// Benefits Section Event Listeners 
	
	$('.blue.content-selector').on('mouseover', function () {
	  $('.default').hide();
	  $('.blue-box').addClass('active');
	});
	
	$('.blue.content-selector').on('mouseout', function () {
	  $('.default').show();
	  $('.blue-box').removeClass('active');
	});
	
	$('.red.content-selector').on('mouseover', function () {
	  $('.default').hide();
	  $('.red-box').addClass('active');
	});
	
	$('.red.content-selector').on('mouseout', function () {
	  $('.default').show();
	  $('.red-box').removeClass('active');
	});
	
	$('.yellow.content-selector').on('mouseover', function () {
	  $('.default').hide();
	  $('.yellow-box').addClass('active');
	});
	
	$('.yellow.content-selector').on('mouseout', function () {
	  $('.default').show();
	  $('.yellow-box').removeClass('active');
	});
	
	$('.orange.content-selector').on('mouseover', function () {
	  $('.default').hide();
	  $('.orange-box').addClass('active');
	});
	
	$('.orange.content-selector').on('mouseout', function () {
	  $('.default').show();
	  $('.orange-box').removeClass('active');
	});

});