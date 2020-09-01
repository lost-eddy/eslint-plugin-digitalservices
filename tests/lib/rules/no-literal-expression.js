var rule = require("../../../lib/rules/no-literal-expression.js"),
	RuleTester = require("eslint").RuleTester;

var ruleTester = new RuleTester();
ruleTester.run("no-literal-expression", rule["no-literal-expression"].create, {
	valid: [
		"var test = {}",
		"var test = null",
		"var test = null; var test2 = test;",
	],
	invalid: [
		{
			code: "var test = 3453456",
			errors: [ { message: "Magic number." } ]
		},
		{
			code: "var test = 'sdfgsdg'",
			errors: [ { message: "String literal" } ]
		},
		{
			code: "var test = {node: '3453'}",
			errors: [ { message: "String literal in object" } ]
		},
	]
});
