"use strict";

const rule = require("../../../lib/rules/wrap-on-click.js"),
	RuleTester = require("eslint").RuleTester;

const ruleTester = new RuleTester();
ruleTester.run("custom-plugin-rule", rule['wrap-on-click'].create, {
	valid: [
		// "var validVariable = true",
	],

	invalid: [

	]
});
