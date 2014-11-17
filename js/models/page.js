/** @jsx React.DOM */
/* raspberry-coke/ontd2/js/models/page.js
   Plain Model to represent a page component

*/
var ontd = ontd || {};
ontd.models = ontd.models || {};
// ontd.views = {};
//ontd.components = {};

(function () {
    ontd.models.Page = React.createClass({
	render: function () {
	    return (
		    <div id="page" className="app-page" data-page={this.props.pageName}>
		   <ontd.components.Header />
		    <ontd.components.Content pageTarget={this.props.pageTarget} />
		    
		</div>
	    );
	}
    }); 
})();
