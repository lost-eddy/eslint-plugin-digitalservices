"use strict";

const rule = require("../../../lib/rules/key-map-prop.js"),
	RuleTester = require("eslint").RuleTester;

const ruleTester = new RuleTester({
	parserOptions: { ecmaVersion: 2015 }
});

ruleTester.run("custom-plugin-rule", rule['key-map-prop'].create, {
	valid: [
		`const testFunc = () => {
 			return (
				<SubdivisionWrapper>
					{
						array.map((dep) => (
							<SubdivisionItem key={dep.uuid}/>
						))
					}
				</SubdivisionWrapper>
			)
		}`,
	],

	invalid: [
		{
			code: `const testFunc = () => {
 			return (
				<SubdivisionWrapper>
					{
						array.map((dep) => (
							<SubdivisionItem/>
						))
					}
				</SubdivisionWrapper>
			)
		}`,
			errors: [ { message: "Magic number." } ]
		},
	]
});
