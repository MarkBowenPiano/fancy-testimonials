// Testimonials
jQuery(function() {
	jQuery('#testimonials-wrapper').after('<div id="pager">')
	.cycle({
		fx: 'fade',
		//timeout: 0, // Remove this line to have the slider transition automitically. 
		prev:   '#prev2',
		next:   '#next2',
		pager: '#pager'
	});
});

// For more information on this slider please see http://jquery.malsup.com/cycle/