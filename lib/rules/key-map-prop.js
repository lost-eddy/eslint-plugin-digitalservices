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
			schema: [] // no options
		},
		create: function (context) {
			return {
				CallExpression(container) {
					const _arguments = container['arguments'];
					const mapBody = _arguments && _arguments[0] && _arguments[0].body;
					if (container.callee.property && container.callee.property.name === 'map' &&
						mapBody.type === 'JSXElement' && !mapBody.openingElement.attributes.find(el => el.name.name === 'key')) {
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
