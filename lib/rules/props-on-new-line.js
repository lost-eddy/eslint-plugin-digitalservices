/**
 * @fileoverview Rule two or more React props write each on a new line
 * @author Andrey Chistobaev
 */

"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
	"props-on-new-line": {
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
			let linePosition = null;
			return {
				JSXAttribute(attr) {
					if (linePosition === attr.loc.start.line) {
						context.report({
							node: attr,
							message: "Two or more props write each on a new line",
						})
					}
					linePosition = attr.loc.start.line
				}
			};
		}
	},
};
