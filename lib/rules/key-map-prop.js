/**
 * @fileoverview Rule check key prop in render array
 * @author Andrey Chistobaev
 */

"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
	"key-map-prop": {
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

			return {
				CallExpression(container) {
					const _arguments = container['arguments'];
					const mapBody = _arguments && _arguments[0] && _arguments[0].body;
					if (container.callee.property && container.callee.property.name === 'map' &&
						mapBody && mapBody.type === 'JSXElement' &&
						!mapBody.openingElement.attributes.find(el => el && el.name && (el.name.name === 'key'))) {
						context.report({
							node: mapBody,
							message: 'Missing “key” prop for element.'
						})
					}
				}
			};
		}
	},
};
