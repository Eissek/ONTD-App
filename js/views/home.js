// raspberry-coke/ontd/js/views/home.js
var ontd = ontd || {};

ontd.views.home = ontd.views.home || {};
//ontd.views.home.setDat
(function() {
    ontd.views.home.setData = function(data) {
	var theData = data;
	console.log("First title " + theData[0].title);
	Transparency.render(document.getElementById("container"), theData);
    };
    ontd.views.home = function() {
	ontd.parer.invokeReadyState(ontd.views.home.setData);
    };
})();



