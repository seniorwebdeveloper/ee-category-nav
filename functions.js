$(document).ready (function() {
	
	// Get segments and store in variables(named after EE segment variables for simplicity)
	var newURL = window.location.protocol + "://" + window.location.host + "/" + window.location.pathname;
	var pathArray = window.location.pathname.split( '/' ),
			segment_3 = pathArray[3],
			segment_2 = pathArray[2];
	
	//Put the main nav in a variable for re-use.
	var nav = $('#mainNav');
	
	// Hide everything bar the first li's ul when not on a category page.
	if(segment_2 !== "category") {
		$(nav).find('li ul:not(:first)').hide();
	}
	
	// Hide everything on a category page.
	if(segment_2 === "category") {
		$(nav).find('li ul').hide();
	}
	
	//Get the nav uls which are the parents of the category class.
	var navUls = $('#mainNav').find('a.' + segment_3).parents('ul');
	$(navUls).show();
	$(nav).find('ul:visible').parent().children('a').addClass('open');
	
	//Add an open class for css styling
	$('#mainNav').find('a.' + segment_3).addClass('open');
	
	//Click function to open and close menu.
	$(buttons).on('click', function(event) {
		var $this = $(this);
		$($this).parent().children('ul').stop().slideToggle('slow').prev().toggleClass('open');
		event.preventDefault();
	});

});