"use strict";

const rulesFile = require("../lib/rules/main"),
	RuleTester = require("eslint").RuleTester;

const ruleTester = new RuleTester();

ruleTester.run("constants-case", rulesFile.rules["constants-case"].create, {
	valid: [
		{
			code: "var test = {VOID_HREF: 'javascript:void(0)'}",
			options: []
		}
	],

	invalid: [
		{
			code: "var test = {void_href: 'javascript:void(0)'}",
			errors: [{ message: "Key of literal is not in UPPER_CASE" }]
		},
		{
			code: "var test = {VOID_HREF: {TEST: 'javascript:void(0)'}}",
			errors: [{ message: "Unexpected invalid variable." }]
		},
	]
});
