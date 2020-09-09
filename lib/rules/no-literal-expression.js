/**
 * @fileoverview Rule no literals in code
 * @author Andrey Chistobaev
 */

"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

const exceptions = value => {
	const isString = typeof value === 'string';
	const outputValue = isString ? value.trim() : value;
	const checkArray = [0, 1, 2, true, false, null];

	if(isString && outputValue.length === 1){
		return !outputValue.match(/\W/g)
	}

	return outputValue && !checkArray.includes(outputValue);
};

const checkLiteral = (node) => {
	const noCheckArray = ['ImportDeclaration', 'JSXElement'];
	const isActionDeclarator = node.parent.type === 'VariableDeclarator' && node.parent.id.name === node.value;
	const isRegex = node.regex;
	return !noCheckArray.includes(node.parent.type) && !isRegex && !isActionDeclarator
};

module.exports = {
	"no-literal-expression": {
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
				Literal(node) {
					if(checkLiteral(node) && exceptions(node.value)){
						context.report({
							node: node,
							message: 'No literals in code. Use import from constants or strings'
						})
					}
				},
				TemplateLiteral(template){
					const hasLiteral = template.quasis.some(el => el.value.cooked);
					if(hasLiteral){
						context.report({
							node: template,
							message: 'No literals in code. Use import from constants or strings'
						})
					}
				},
			};
		}
	},
};
