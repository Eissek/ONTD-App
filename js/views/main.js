/** @jsx React.DOM */
/* 
   Main View in MVC setup
   ontd2/js/views/main.js
*/

var ontd = ontd || {};
ontd.views = {};
ontd.views.home = ontd.views.home || {};

var modelPage = ontd.models.Page;
(function () {
    ontd.views.home = React.createClass({
	generatePages: function () {

	    console.log("hi");
	   // ontd.parser.
	   // console.log("Generate entries: " + ontd.parser.getNoEntries());
	},
	render: function () {
	    ontd.parser.invokeReadyState();

	    return (
		// <ontd.views.Heading />
		<ontd.models.Page />
		    
	    );
	}
    });


})();




React.renderComponent(
	<ontd.views.home />,
    document.getElementById('content')
	
);


