/**
 * @fileoverview Rule check case for constants
 * @author Andrey Chistobaev
 */

"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
	"strings-case": {
		meta: {
			type: "problem",
			docs: {
				description: "",
				category: "",
				recommended: true,
				url: ""
			},
			fixable: "code",
			schema: [
				{
					"type": "array",
					"properties": {
						"type": "string"
					},
					"additionalProperties": false
				}
			]
		},
		create: function (context) {
			let path = context.getFilename().replace(/\\/g, '/');
			const options = context.options[0];
			return {
				Property(prop) {
					if(path && Array.isArray(options)){
						options.forEach(optionsPath => {
							if(path.indexOf(optionsPath) !== -1){
								if ((prop.key.name === prop.key.name.toUpperCase())) {
									context.report({
										node: prop,
										message: 'Key of property is not in "camelCase"'
									})
								}
							}
						})
					}
				}
			};
		}
	},
};
