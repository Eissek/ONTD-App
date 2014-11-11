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
    var xhr = new XMLHttpRequest();
    var url = "http://ohnotheydidnt.livejournal.com/data/atom";
    
    ontd.views.home = React.createClass({
	generatePages: function () {

	    console.log("hi");
	   // ontd.parser.
	    // console.log("Generate entries: " + ontd.parser.getNoEntries());
	},
	loadEntries: function () {
	      var myData = ontd.parser.invokeReadyState(ontd.parser.stripData);
	},
	getInitialState: function () {
	    return {data: []};
	},
	setData: function (theData) {
	    this.setState({data: theData});
	},
	invokeReadyState: function (callback) {
	    xhr.onreadystatechange = function () {
		console.log("in parser");
		if (xhr.readyState == 4) {
		    console.log("read state");
		    if (xhr.status == 200) {
			// console.log(xhr.responseXML);
			// ontd.views.home.setData(callback(xhr.responseXML));
			var test = ontd.parser.stripData(xhr.responseXML);
			callback(test);
		    } else {
			console.log("xhr error");
		    }
		} else {
		    console.log("xhr not ready");
		}

	    }
	    
	    xhr.open("get", url, true);
	    xhr.send(null);
	    // console.log("nothing to send");
	    
	},
	componentDidMount: function() {
	    // setInterval(this.loadEntries, 1400000000000);

	   // console.log(data);
	    // this.setState({data: "Arnold"});
	    // this.setState({data: "Hey"});
	    // this.setState({data: "Ge"});
	    var save = "testing";
	
	    // this.invokeReadyState(ontd.parser.stripData);
	    this.invokeReadyState(this.setData);
	   // console.log(tt);
	},
	
	render: function () {
	    console.log(this.state.data);

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


