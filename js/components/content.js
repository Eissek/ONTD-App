/** @jsx React.DOM */
/* Content Component this is where all the main data will be loaded
   ontd/js/components/content.js
*/

var ontd = ontd || {};
ontd.components = ontd.components || {};

(function () {
    ontd.components.Content = React.createClass({
	render: function() {
	    return (
		// changed from main-content
		    <div className="app-content"> 
		    <div className="app-section">
		    test
		    <h2>{this.props.pageTitle}</h2>
		    <div className="app-button" data-target={this.props.pageTarget}>Click here</div>
		</div>
		</div>
	    );
	}
    });
})();
