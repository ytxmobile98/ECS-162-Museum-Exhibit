"use strict";
 
const contentManipulator = new (function () {
	const visibilityHook = document.body;
	const visibilityAttr = "data-js-collapse-state";
	const readMoreLinksHook = "js-expand-collapse-link--read-more";
	const readLessLinksHook = "js-expand-collapse-link--read-less";
	
	Object.defineProperty(this, "readMore", {
		value: function () {
			visibilityHook.setAttribute(visibilityAttr, "false");
		}
	});
	
	Object.defineProperty(this, "readLess", {
		value: function () {
			visibilityHook.setAttribute(visibilityAttr, "true");
		}
	});
	
	const readMoreLinks = document.getElementsByClassName(readMoreLinksHook);
	for (let i of readMoreLinks) {
		i.addEventListener("click", this.readMore);
	}

	const readLessLinks = document.getElementsByClassName(readLessLinksHook);
	for (let i of readLessLinks) {
		i.addEventListener("click", this.readLess);
	}
	
	
})();



