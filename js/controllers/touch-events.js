/*
  raspberry-coke/ontd/js/controllers/touch-events.js
  Handles touch events needed for page transitions
*/

var ontd = ontd || {};
ontd.controllers = ontd.controllers || {};

(function () {
    var startX = '';
    var startY = '';
    var distance = 0;
    var allowedTime = 200;
    var startTime = '';
    var elapsedTime = '';
    var downThreshold = 78;
    var upThreshold = -78;
    var page = document.body;
    var next = '';
    var previous = '';
    
    ontd.controllers.nextPage = function (page) {
	App.load(page);
    };

    // ontd.controllers.previousPage = function (page) {
    // 	App.load(page);
    // };

    page.addEventListener("touchstart", function (e) {
	var touchObj = e.changedTouches[0];
	distance = 0;
	startX = touchObj.pageX;
	startY = touchObj.pageY;
	startTime = new Date().getTime();
	// e.preventDefault();
    }, false);
    
    page.addEventListener("touchmove", function (e) {
	e.preventDefault(); // Stops scrolling
    }, false);

    page.addEventListener("touchend", function(e) {
	var touchObj = e.changedTouches[0];
	distance = touchObj.pageY - startY;
	elapsedTime = new Date().getTime() - startTime;

	if (elapsedTime <= allowedTime && distance >= downThreshold && Math.abs(touchObj.pageX - startX) <= 100) {
	    console.log("down");
	    var domRef = document.getElementById("ontd-page").getAttribute("data-prev");

	    if (domRef)
		App.load(domRef);
		
	} else if (elapsedTime <= allowedTime && distance <= upThreshold && Math.abs(touchObj.pageX - startX) <=100) {
	    console.log("up and next");
	    // ontd.controllers.nextPage
	    App.load(document.getElementById("ontd-page").getAttribute("data-next"));
	    // ontd.controllers.nextPage(document.getElementById("ontd-page").getAttribute("data-next"));
	    
	}
    }, false);
    
})();
