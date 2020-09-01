"use strict";

const rule = require("../../../lib/rules/key-map-prop.js"),
	RuleTester = require("eslint").RuleTester;

const ruleTester = new RuleTester();
ruleTester.run("custom-plugin-rule", rule['key-map-prop'].create, {
	valid: [
		// "var validVariable = true",
	],

	invalid: [

	]
});
