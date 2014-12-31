// raspberry-coke/ontd/js/views/home.js
var ontd = ontd || {};
ontd.views = ontd.views || {};
ontd.views.home = ontd.views.home || {};
//ontd.views.home.setDat
(function() {


    ontd.views.home.setData = function(data) {
	var theData = data;
	// console.log(theData);
	// console.log(theData[0]);
	console.log("First title " + theData[0].title);
	// console.log(theData[0].tags);
	var templateScript = $('#myPage').html();
	var template = Handlebars.compile(templateScript);
	$('#container').append(template(theData));
	// document.getElementById('container').innerHTML = template(theData);
	App.load("home");
	// COULD ALSO HAVE A CHECK ARCHIVE FUNCTION AFTER THE LIVE DATA
	// HAS BEEN RETRIEVED
	
    };


    ontd.views.home.init = function() {
	ontd.parser.invokeReadyState(ontd.views.home.setData);
    }; 
    console.log("Home works");
    ontd.views.home.init();


    // App.controller('home', function (page) {
    // 	$(page).on('appShow', function () {
    // 	    console.log('the user can see it!');

    // 	});
    // });
    // App.controller("home", function (page) {
    // 	console.log("PAGE LOADEDED");
    	    // clamp(document.getElementById('container'), 6);
	
    // });

    // App.controller('home', function (page) {
    // 	$(page).on('appShow', function () {
    // 	    console.log("SHOOOOOOW ITTTTT");
    // 	});
    // });
   
})();



