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

			function getEvent (eventName){
				const eventList = Object.keys(window).filter(event => !event.indexOf('on'))
				return eventList.some(el => el === eventName.toLowerCase())
			}

			return {
				JSXAttribute(attr) {
					if (getEvent(attr.name.name) &&
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
};
