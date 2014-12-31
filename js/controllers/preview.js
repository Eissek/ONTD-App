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
	var images = ontd.controllers.getFirstImage(content);
	var newText = "";
	if (images.length > 0) {
	    console.log("FOUND IMAGES");
	    // console.log(images[0].outerHTML);
	    // images = images[0].outerHTML;
	    var text = content.replace(/<(?:.|\n)*?>/gm, '');
	    // console.log("Word count is " + text.split(/\s+/).length);
	    if (text.split(/\s+/).length > 40) {
		text = text.split(" ").splice(0, 40).join(" ");
		console.log("spliced EVERYTHING");
	    }
	    
	    text += "..."; // Used to indicate more text to be read
;
	    newText = images[0].outerHTML + "<br/><br/>"+ text;
	    // console.log(newText);
	}
	// console.log(images[0]);

	// return images[0].outerHTML;
	// }
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
