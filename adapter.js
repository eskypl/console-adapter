/**
 * Console logging adapter returns native console object or a stub with empty functions.
 * If there is no native window.console or console object, "empty" stub will be assigned to it.
 */

define(function () {
	'use strict';

	// prepare console stub with empty functions
	var consoleStub = {
		log:   function () {},
		debug: function () {},
		info:  function () {},
		warn:  function () {},
		error: function () {}
	};

	// if something goes wrong, return consoleStub because it is safer
	var returnConsole = consoleStub;

	try {
		// if there was a "real console" object in window.console or console, return it
		// if both window.console and console were undefined, return "empty stub"

		if (typeof window.console === 'undefined') {
			window.console = consoleStub;
		}
		else {
			returnConsole = window.console;
		}

		if (typeof console === 'undefined') {
			console = consoleStub;
		}
		else {
			returnConsole = console;
		}
	} catch (e) {

	}

	return returnConsole;
});