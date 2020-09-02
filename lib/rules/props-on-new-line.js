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
			schema: [{
				"type": "object",
				"properties": {
					"ignoreFiles": {
						"type": "array"
					}
				},
				"additionalProperties": false
			}]
		},
		create: function (context) {
			const path = context.getFilename().replace(/\\/g, '/');
			const ignoreFiles = context.options[0] && context.options[0].ignoreFiles || [];

			if(ignoreFiles.find(optionsPath => path.indexOf(optionsPath) !== -1)){
				return {}
			}

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
