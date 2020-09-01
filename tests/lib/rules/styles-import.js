"use strict";

const rule = require("../../../lib/rules/styles-import.js"),
	RuleTester = require("eslint").RuleTester;

const ruleTester = new RuleTester();
ruleTester.run("custom-plugin-rule", rule['styles-import'].create, {
	valid: [
		// "var validVariable = true",
	],

	invalid: [

	]
});
