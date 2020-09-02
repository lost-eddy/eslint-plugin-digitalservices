/**
 * @fileoverview Rule check case for constants
 * @author Andrey Chistobaev
 */

"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
	"nsi-case": {
		meta: {
			type: "problem",
			docs: {
				description: "",
				category: "",
				recommended: true,
				url: ""
			},
			fixable: "code",
			schema: [{"type": "array"}]
		},
		create: function (context) {
			const path = context.getFilename().replace(/\\/g, '/');
			const options = context.options[0];
			return {
				Property(prop) {
					if(path && Array.isArray(options)){
						options.forEach(optionsPath => {
							if(path.indexOf(optionsPath) !== -1){
								const isGroup = prop.value.properties && prop.value.properties.every(el =>
									el.value.type !== 'Property' && el.value.type !== 'ObjectExpression');
								if(isGroup && prop.key.name !== prop.key.name.toUpperCase()){
									context.report({
										node: prop,
										message: 'Key of group is not in "UPPER_CASE"'
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
