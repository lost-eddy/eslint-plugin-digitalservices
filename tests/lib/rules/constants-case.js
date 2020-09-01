"use strict";

const rule = require("../../../lib/rules/constants-case.js"),
	RuleTester = require("eslint").RuleTester;

const ruleTester = new RuleTester();
ruleTester.run("custom-plugin-rule", rule['constants-case'].create, {
	valid: [
		// "var validVariable = true",
	],

	invalid: [

	]
});
