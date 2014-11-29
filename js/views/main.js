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
    var myArray = [];
    this.gg = [];
    var posts = [];
    var aa = [];
    ontd.views.home = React.createClass({
	statics: {
	    h: [],
	    testMethod: function (data) {
		console.log("test Method works");
		myArray[0] = <ontd.models.Page pageName="myPage" pageTarget="myPage2"/>;
		myArray[1] = <ontd.models.Page pageName="myPage2" pageTarget="myPage3"/>;
		myArray[2] = <ontd.models.Page pageName="myPage3" pageTarget="myPage4"/>;
		myArray[3] = <ontd.models.Page pageName="myPage4" pageTarget="myPage5"/>;
		myArray[4] = <ontd.models.Page pageName="myPage5" pageTarget="home"/>;
		// ontd.views.home.invokeReadyState(this.setData, this.testFunction);
	    },
	    setPosts: function (data) {
		// posts = this.data;
		posts = data;
		console.log("setPosts: " + posts.length );
		console.log(posts[0].title);
		// myArray[0] = <ontd.models.Page pageName="myPage" pageTarget="home"/>;
		// ontd.views.home.generatePages();
		ontd.views.home.h[2] = <ontd.models.Page pageName="myPage" pageTarget="home"/>;
	    },
	    generatePages: function (data) {
		console.log("Post length is: " + posts.length);
		// console.log(posts[0].title);
		myArray[0] = <ontd.models.Page pageName="myPage" pageTarget="home"/>;
		ontd.views.home.h[0] = "wooo";
		ontd.views.home.h[1] = "pppi";

		console.log(ontd.views.home.h[1]);
		
	    },
	    invokeReadyState: function (callback) {
		xhr.onreadystatechange = function () {
		    if (xhr.readyState == 4) {
			console.log("Ready State");
			if (xhr.status == 200) {
			    var allEntries = ontd.parser.stripData(xhr.responseXML);
			    callback(allEntries);
			    // callback2();
			} else {
			    console.log("xhr error");
			}
		    } else {
			console.log("xhr not ready");
		    }
		};

		xhr.open("get", url, true);
		xhr.send(null);
	    }
	},
	getInitialState: function () {
	    return {data: [], more: [], myPages: []};

	},
	setData: function (theData) {
	    this.setState({data: theData});

	    // myArray[1] = <ontd.models.Page pageName="myPage2" pageTarget="home"/>;	    
	},
	testFunction: function (myData) {
	    myData.map(function (entry, i){
		// console.log(i  + " Map data ids: " + entry.id);
		// if (i == 0) {
		//     console.log("i is  0");
		//     myArray[i] = <ontd.models.Page pageName="0" pageTarget={i+1}/>;
		//     		    // console.log(myArray[i]);
		// } else {
		//     console.log("i is not 0");
		//     myArray[i] = <ontd.models.Page pageName={i} pageTarget={i+1}/>;
		// }
		// myArray[0] = <ontd.models.Page pageName="myPage" pageTarget="home"/>;
		// myArray[1] = <ontd.models.Page pageName="1" pageTarget="home"/>;
		
	    });
	    // var yy  = <ontd.models.Page pageName="myPage" pageTarget="myPage2" />;
	    // gg[1] = <ontd.models.Page pageName="myPage2" pageTarget="myPage3" />;
	    // gg[2] = <ontd.models.Page pageName="myPage3" pageTarget="home" />;
	    // gg[3] = "jjejeje";	  
	    // myArray[1] = <ontd.models.Page pageName="myPage2" pageTarget="home" />;
	   
	    console.log("does this work");
	},
	invokeReadyState: function (callback, callback2) {
	    xhr.onreadystatechange = function () {
		console.log("in parser");
		if (xhr.readyState == 4) {
		    console.log("read state");
		    if (xhr.status == 200) {
			var test = ontd.parser.stripData(xhr.responseXML);
			callback(test);
			callback2(test);
			// console.log(test[0].title);

		    } else {
			console.log("xhr error");
		    }
		} else {
		    console.log("xhr not ready");
		}
		// if (xhr.readyState == 4 && xhr.status == 200) {
		//     console.log("ready state");
		//     var test = ontd.parser.stripData(xhr.responseXML);
		//     callback(test);
		//     //callback2(test);
		//     window.testFunction(test);
		    
		// } else {
		//     console.log("xhr not ready");
		// }
	    };

	    xhr.open("get", url, true);
	    xhr.send(null);
	    // console.log("nothing to send");
	    
	},
	
	componentWillUpdate: function (nextProps, nextState) {
	    console.log("changing state");
	    // ontd.views.home.testMethod();

	},
	shouldComponentUpdate: function() {

	},
	componentWillMount: function () {
	    console.log("boom");
	    this.invokeReadyState(this.setData, this.testFunction);
	    console.log("there are :" + this.state.data.length);
	    // myArray[0] = <ontd.models.Page pageName="myPage" pageTarget="myPage2"/>;
	    // myArray[1] = <ontd.models.Page pageName="myPage2" pageTarget="home" />;
	    // this.testFunction();
	    // myArray[0] = <ontd.models.Page pageName="myPage" pageTarget="myPage2"/>;
	    // ontd.views.home.testMethod();
	    console.log("how many " + posts.length);
	    // ontd.views.home.h[2] = <ontd.models.Page pageName="myPage" pageTarget="home"/>;
	    // myArray[0] = <ontd.models.Page pageName="myPage" pageTarget="home"/>;
	},
	componentDidMount: function() {
	    try {
		App.restore();
	    } catch (err) {
		App.load('home');
	    }
	    console.log("length is " + gg.length);
	    //ontd.views.home.generatePages();
	    	    	    	    var mya = [];
	    mya[0] = <ontd.models.Page pageName="home" pageTarget="here" pageTitle="WHAT"/>;
	    mya[1] = <ontd.models.Page pageName="here" pageTarget="1" pageTitle=""/> ;
	    mya[2] = <ontd.models.Page pageName="1" pageTarget="2" pageTitle="BOO!"/>;
	    mya[3] = <ontd.models.Page pageName="2" pageTarget="home" pageTitle=""/>;
	    mya[4] = <h1> MANAN </h1>;
	    this.setState({myPages: mya});
	    console.log("Okay " + this.state.myPages);
	    aa[0] = <ontd.models.Page pageName="home" pageTarget="here" pageTitle="Awful"/>;
	    aa[1] = "sjsjs"
	    console.log("right left " + aa);
	    this.forceUpdate();
	},
	componentWillUnmount: function () {
	    console.log("unmounting");
	},
	render: function () {
	    // this.generatePages();
	    console.log(this.state.data);
	   /* {this.state.data.map(function(entry) {
			return <ontd.models.Page pageName={entry.id} />
			})}*/
	    var results = [];
	    results = this.state.data; // Will hold entry models
	    // this.testFunction(this.state.data);
	    /*var  testF = function() {
		this.myO = [];
		    for (var i = 0; i < results.length; i++) {
			myO[i] = <ontd.models.Page pageName={"hey"[i]} pageTarget="home" />
		    }
		return myO;
	    }*/
	    
	    // gg[0] = <ontd.models.Page pageName="myPage" pageTarget="myPage2" />;
	    // gg[1] = <ontd.models.Page pageName="myPage2" pageTarget="myPage3" />;
	    // gg[2] = <ontd.models.Page pageName="myPage3" pageTarget="home" />;
	    console.log("this is the length " + results.length);
	    // {console.log("GG lenght: " + gg.length)};
	    
	   /* return (
		    <div>
		    <ontd.models.Page pageName="home" pageTarget="here"/>
		    <ontd.models.Page pageName="here" pageTarget="myPage"/>
		    {posts}
		{myArray}
		{ontd.views.home.h}
		{results.map(function (entry) {
		    return <ontd.models.Page pageName={entry.id} pageTarget="ddd"/>;
		})}
		    </div>
		    ); */
	    // var myPages = [];
	    this.state.myPages[0] = <ontd.models.Page pageName="home" pageTarget="here" pageTitle="WHAT"/>;
	    this.state.myPages[1] = <ontd.models.Page pageName="here" pageTarget="1" pageTitle=""/> ;
	    this.state.myPages[2] = <ontd.models.Page pageName="1" pageTarget="2" pageTitle="YAY!"/>;
	    this.state.myPages[3] = <ontd.models.Page pageName="2" pageTarget="home" pageTitle=""/>;
	    this.state.myPages[4] = <h1> HEEEEEY </h1>;

	    aa[0] = <ontd.models.Page pageName="home" pageTarget="here" pageTitle="WHAT"/>;
	    aa[1] = <ontd.models.Page pageName="here" pageTarget="1" pageTitle=""/> ;
	    aa[2] = <ontd.models.Page pageName="1" pageTarget="2" pageTitle="YAY!"/>;
	    aa[3] = <ontd.models.Page pageName="2" pageTarget="home" pageTitle=""/>;
	    var p = this.state.myPages;
	    return (
		<div>
		    {this.state.myPages};
		
		console.log("hi");
		    </div>
	    );
	}
    });


})();

// ontd.views.home.testMethod();
//ontd.views.home.invokeReadyState(ontd.views.home.setPosts);
React.renderComponent(
	<ontd.views.home />,
    document.getElementById('container')
    // document.body
	
);


