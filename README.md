## Using Javascript To Access URL Segments

Today I found I needed to set the state on the navigation of an ExpressionEngine site I am currently working on based on which category page a visitor was viewing. The navigation is using the [categories][] tag pair to output an unordered list of products. This is a fairly standard method for creating site navigation and something I use regularly. Where this site was different I wanted the accordion navigation to remain open depending on what the category segment in the url was outputting. To do this I found a simple bit of javascript published on [CSS-Tricks][] which looks like this:

Get the full URL path:

	var newURL = window.location.protocol + "://" + window.location.host + "/" + window.location.pathname;

Next split the segments of the URL using:

	var pathArray = window.location.pathname.split( '/' );

Finally select the segment you require using:

	var segment_1 = pathArray[1];
	
The above code would select segment_1 but you can see how you can easily select segment_2,3 etc.

Once these segments are stored in variables it is really easy to set states for your navigation using jQuery.

	if(segment_2  ==  "category") {
		$(nav).find('li ul:not(:first)').hide();
	}
I have posted the complete example for you to use and modify as you see fit over at [github][].

[categories]:http://expressionengine.com/user_guide/modules/channel/categories.html
[CSS-Tricks]:http://css-tricks.com/snippets/javascript/get-url-and-url-parts-in-javascript
	 