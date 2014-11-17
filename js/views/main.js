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
	getInitialState: function () {
	    return {data: []};
	},
	entryList: function () {
	    // render
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
			var test = ontd.parser.stripData(xhr.responseXML);
			callback(test);
			// console.log(test[0].title);
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
	componentWillMount: function () {
	    console.log("boom");

	},
	componentDidMount: function() {
	    this.invokeReadyState(this.setData);
	    // console.log(tt);
	    App.load('home');

	},
	
	render: function () {
	    // this.generatePages();
	    console.log(this.state.data);
	    var myTest = this.state.data.map( function(entry) {
	    	// console.log(entry.title);
	    	return (
	    		<ontd.models.Page pageName={entry.id} />
	    	)
	    });
	   /* {this.state.data.map(function(entry) {
			return <ontd.models.Page pageName={entry.id} />
		    })}*/
	    return (
	 <div>
		    <ontd.models.Page pageName="home" pageTarget="myPage"/>

		    <ontd.models.Page pageName="myPage" pageTarget="home"/>
		    
	</div>
	    );
	}
    });


})();


React.renderComponent(
	<ontd.views.home />,
    document.getElementById('container')
	
);


