/**
   raspberry-coke/ontd/js/parser.js
   Parses ONTDs XML file and gets hold of details including title, users, post etc
**/

var ontd = ontd || {};
ontd.parser = ontd.parser || {};
(function () {
  //  var parser = new DOMParser();
    var xhr = new XMLHttpRequest();
    var url = "http://ohnotheydidnt.livejournal.com/data/atom";

    xhr.onreadystatechange = function () {
	console.log("in parser");
	if (xhr.readyState == 4){
	    console.log("ready state");
	    if ((xhr.status >= 4 && xhr.status < 300) || xhr.status == 304) {
		console.log(xhr.responseXML);
		return ontd.parser.stripData(xhr.responseXML);
	    } else {
		console.log("xhr error");
	    }
	} else {
	    console.log("xhr not ready");
	}
	return false;
    };
    xhr.open("get", url, true);
    xhr.send(null);
    
    ontd.parser.stripData = function(data) {
	var parser = new DOMParser();
	var xml = parser.parseFromString(data, "text/html");
	var result = data.evaluate("/", data.documentElement, resolver, XPathResult.ORDERED_NODE_ITERATOR_TYPE, null);

	var entry = "";
	var feed = "";
	var title = "";
	var author = "";
	var date = "";
	var tags = ""; //category
	var content = "";
	
	if (result != null) {
	    var element = result.iterateNext();
	    while(element) {
		console.log("here " + element.getElementsByTagName("feed")[0].nodeName);
		feed = element.getElementsByTagName("feed")[0];
		entry = feed.getElementsByTagName("entry");
		console.log("Number of Entries " + entry.length);
		element = result.iterateNext();
	    }
	   
	}

	for (var i = 0; i < entry.length; i++) {
	    title = entry[i].getElementsByTagName("title");
	    author = entry[i].getElementsByTagName("author");
	    tags = entry[i].getElementsByTagName("category");
	    content = entry[i].getElementsByTagName("content")[0].firstChild.nodeValue;

	    console.log("\n Title: " +  title[0].firstChild.nodeValue
			+ "\n Poster: " + author[0].getElementsByTagName("name")[0].firstChild.nodeValue
			+ "\n Date: " + entry[i].getElementsByTagName("published")[0].firstChild.nodeValue
		       );
	    console.log("\n Tags: " + tags.length);
	    for (var j = 0; j<tags.length;j++) {
		console.log(tags[j].getAttributeNode("term").nodeValue);
	    }
	}
    };
    var resolver = function (prefix) {
	switch(prefix) {
		case "lj": return "http://www.livejournal.com";
		default: return "http://www.w3.org/2005/Atom";
	}
    };
});


