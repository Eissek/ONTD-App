/*
 * rasperberry-coke/ontd/js/controllers/preview.js
 * Controller class that handles the entry previews when the user is scorlling through entries

 */

var ontd = ontd || {};
ontd.controllers = ontd.controllers || {};

(function () {

    
    ontd.controllers.getFirstImage = function (data) {
	var element = [];
	var temp = document.createElement("div");
	temp.innerHTML = data;
	element = temp.getElementsByTagName("img");
	
	return element;
    };

    ontd.controllers.getFirstTweet = function (data) {
	var element = [];
	var temp = document.createElement("div");
	temp.innerHTML = data;
	element = temp.getElementsByClassName("twitter-tweet");
	// element = element.getElementsByClassName()
	return element;

    };

    // Helps to display either an image or embedded tweet
    ontd.controllers.getFirstEmbed = function (data) {
	var temp = document.createElement("div");
	temp.innerHTML = data;
	var element = [];
	// var nodes = temp.childNodes;
	var nodes = temp.children;
	console.log("THESE ARE THE NODES " + nodes);
	console.log(nodes[0].tagName);
	for (var i = 0; i < nodes.length; i++) {
	    if (nodes[i].tagName === "IMG") {
		console.log("Found image");
		console.log(nodes[i]);
		element = nodes[i];
		break;
	    } else if (nodes[i].tagName === "BLOCKQUOTE") {
		console.log("Found Quote");
		element = nodes[i];
		break;
	    }
	}

	return element;

    };
    
    // Removes the content text that is not visible
    ontd.controllers.previewText = function (content) {
	// var view = document.getElementById("previewContent");
	// if (view.offsetHeight < content.scrollHeight || view.offsetWidth < content.scrollWidth) {

	// }
	// var off = document.getElementById("container");
	// var off2 = document.getElementById("previewContent");
	// console.log(off2.offsetHeight);

	// if (ontd.controllers.checkWindowHeight()) {
	// var x =  $(content).text();

	// First image found is added to the preview
	// var images = ontd.controllers.getFirstImage(content);
	var images = ontd.controllers.getFirstEmbed(content);
	var newText = "";
	var text = content.replace(/<(?:.|\n)*?>/gm, '');
	
	
	if (text.split(/\s+/).length > 40) {
	    text = text.split(" ").splice(0, 40).join(" ");
	    console.log("spliced EVERYTHING");
	}
	
	text += "..."; // Used to indicate more text to be read
	// Image is added before the text for formatting purposes
	// if (images.length > 0)
	if (images !== "undefined")
	    newText = images.outerHTML + "<br/> <br/>" + text;
	
	return newText;
	
    };
    // Resizes image so it's visible in element window
    ontd.controllers.previewImage = function (image) {
	
    };


    ontd.controllers.checkWindowHeight = function() {
	var check = true;
	if (window.innerHeight >= 540) {
	    console.log("INNER HEIGHT IS EXACT");
	    check = true;
	} else {
	    check = false;
	}

	return check;
    };
})();
