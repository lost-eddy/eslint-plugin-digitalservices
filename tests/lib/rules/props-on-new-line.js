"use strict";

const rule = require("../../../lib/rules/props-on-new-linee.js"),
	RuleTester = require("eslint").RuleTester;

const ruleTester = new RuleTester();
ruleTester.run("custom-plugin-rule", rule['props-on-new-line'].create, {
	valid: [
		// "var validVariable = true",
	],

	invalid: [

	]
});
