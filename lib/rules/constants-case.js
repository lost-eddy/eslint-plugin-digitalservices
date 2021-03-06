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
						})
					}
				}
			};
		}
	},
};
