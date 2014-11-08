/*
 * Javascript Model for ONTD Entry details
 * Uses Constructor/Prototype pattern
 * raspberry-coke/ontd/js/models/entry.js
 */

var ontd = ontd || {};
ontd.Model = ontd.Model || {};

(function () {
    ontd.Model.entry = function (theTitle, thePoster, theDate, theTags, theContent) {
	this.title = theTitle;
	this.poster = thePoster;
	this.date = theDate;
	this.tags = theTags;
	this.content = theContent;
	this.noComments = ""; // number of Comments
	this.read = false; // Has the post been read before
	this.observers = []; // Required for observer pattern
    };

    ontd.Model.entry.prototype.getPost = function () {
	console.log(this.poster);
    };
    //Must implement Observer pattern as well
})(); //Imediate execution