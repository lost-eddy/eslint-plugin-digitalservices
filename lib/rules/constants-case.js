/**
 * @fileoverview Rule check case for constants
 * @author Andrey Chistobaev
 */

"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
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
		create: function (context) {
			if (Array.isArray(context.options[0])) {
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

			return undefined;
		}
	},
};
