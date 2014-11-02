/** @jsx React.DOM */
/* 
   Main View in MVC setup
   ontd2/js/views/main.js
*/

var ontd = ontd || {};
ontd.views = {};
ontd.views.home = ontd.views.home || {};
// ontd.models = ontd.models || {};



var modelPage = ontd.models.Page;
(function () {
    ontd.views.home = React.createClass({
	render: function () {
	    return (
		// <ontd.views.Heading />
		<ontd.models.Page />



		    
		    
	    );
	}
    });


})();


// (function () {
//     ontd.views.home = React.createClass({
// 	render: function () {
// 	    return (
// 		<h1>TEST</h1>
// 	    );
// 	}
//     });
// })();

// Make topbar and title seperate component


React.renderComponent(
	<ontd.views.home />,
    document.getElementById('content')
	
);


