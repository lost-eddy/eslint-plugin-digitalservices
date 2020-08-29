"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
	rules: {
		"constants-case": {
			meta: {
				type: "constants-case",
				docs: {
					description: "",
					category: "",
					recommended: true,
					url: ""
				},
				fixable: "code",
				schema: [] // no options
			},
			create: function(context) {
				return {
					Property(prop) {
						if ((prop.key.name !== prop.key.name.toUpperCase()) && prop.value.type === 'Literal') {
							context.report({
								node: prop,
								message: 'Key of literal is not in "UPPER_CASE"'
							})
						}
						if ((prop.key.name === prop.key.name.toUpperCase()) && prop.value.type === 'ObjectExpression') {
							context.report({
								node: prop,
								message: 'Key of object is not in "camelCase"'
							})
						}
					}
				};
			}
		},
		"no-literal-declaration": {
			meta: {
				type: "no-literal-declaration",
				docs: {
					description: "",
					category: "",
					recommended: true,
					url: ""
				},
				fixable: "code",
				schema: [] // no options
			},
			create: function (context) {
				return {
					VariableDeclarator(declar) {
						if (declar.init.type === 'Literal') {
							if (typeof declar.init.value === 'number' && declar.init.value !== -1 && declar.init.value !== 0 &&
								declar.init.value !== 1 && declar.init.value !== 2) {
								context.report({
									node: declar,
									message: 'No magic numbers in declaration. Use import from constants'
								})
							} else {
								context.report({
									node: declar,
									message: 'No literals in declaration. Use import from constants or strings'
								})
							}
						}
					}
				};
			}
		}
	},
};
