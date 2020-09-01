/**
 * @fileoverview Rule check if onClick or onPress function is not wrapped
 * @author Andrey Chistobaev
 */

"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
	"wrap-on-click": {
		meta: {
			type: "problem",
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
				JSXAttribute(attr) {
					if ((attr.name.name === 'onClick' || attr.name.name === 'onPress') &&
						attr.value.expression.type === 'CallExpression' && attr.value.expression['arguments']) {
						context.report({
							node: attr.value.expression,
							message: "Wrap function in arrow function",
						})
					}
				}
			};
		}
	},
}
