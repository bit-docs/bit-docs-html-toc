/**
 * @parent bit-docs-html-toc/static
 * @module {function} bit-docs-html-toc/toc.js
 * 
 * Main front end JavaScript file for static portion of this plugin.
 * 
 * @signature `TOCContainer(el)`
 * 
 * Hydrates the container element with class `on-this-page-container` with the
 * headers from the page.
 * 
 * If `DEPTH` was specified to the [bit-docs-html-toc/tags/outline] tag, then
 * only headers less than and including that depth will be hydrated.
 * 
 * @param {HTMLElement} el The HTML element to hydrate.
 * 
 * @body
 */
var TOCContainer =  require("./toc-container-control");

var el = document.getElementsByClassName("on-this-page-container");

if (el.length) {
	new TOCContainer(el.item(0));
} else {
	console.log("An element with class 'on-this-page-container' is required");
}
