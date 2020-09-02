/**
 * @fileoverview Rule no literals in code
 * @author Andrey Chistobaev
 */

"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

const checkLiteral = value => {
	const outputValue = typeof value === 'string' ? value.trim() : value;
	const checkArray = [0, 1, 2, true, false, null, '/', '.', ',', '|', '*'];
	return value && !checkArray.includes(outputValue);
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

			const LITERAL = 'Literal';

			return {
				VariableDeclarator(declar) {
					if (declar.init && declar.init.type === LITERAL && checkLiteral(declar.init.value)) {
						context.report({
							node: declar,
							message: 'No literals in declaration. Use import from constants or strings'
						})
					}
				},
				ExpressionStatement(statement) {
					if (statement.expression && statement.expression.type === 'AssignmentExpression' &&
						statement.expression.right.type === LITERAL && checkLiteral(statement.expression.right.value)) {
						context.report({
							node: statement.expression.right,
							message: 'No literals in assignment. Use import from constants or strings'
						})
					}
				},
				BinaryExpression(expression) {
					if ((expression.left.type === LITERAL || expression.right.type === LITERAL) &&
						(checkLiteral(expression.right.value) || checkLiteral(expression.left.value))) {
						context.report({
							node: expression,
							message: 'No literals in expressions. Use import from constants or strings'
						})
					}
				},
				JSXAttribute(attr) {
					if (attr.value &&  attr.value.expression && attr.value.expression.type === LITERAL && attr.value.expression.value !== '' &&
						checkLiteral(attr.value.expression.value)) {
						context.report({
							node: attr.value.expression,
							message: 'No literals in props. Use import from constants or strings'
						})
					}
				},
				CallExpression(func) {
					const argumentLiteral = func['arguments'].find(el => el.type === 'Literal' && checkLiteral(el.value) && !el.regex);
					const member = func.callee.object && func.callee.object.type === 'Literal';
					const console = func.callee.object && func.callee.object.name === 'console';

					if ((argumentLiteral || member) && !console) {
						context.report({
							node: argumentLiteral || func,
							message: 'No literals. Use import from constants or strings'
						})
					}
				},
				ArrayExpression(array) {
					const elementLiteral = array.elements.find(el => el.type === LITERAL);
					if (checkLiteral(elementLiteral)) {
						context.report({
							node: elementLiteral,
							message: 'No literals. Use import from constants or strings'
						})
					}
				},
				UnaryExpression(expression) {
					if (expression.argument && expression.argument.type === LITERAL && expression.argument.value !== 1) {
						context.report({
							node: expression.argument,
							message: 'No literals. Use import from constants or strings'
						})
					}
				},
				Property(prop) {
					if (prop.value && prop.value.type === LITERAL && checkLiteral(prop.value.value)) {
						context.report({
							node: prop.value,
							message: 'No literals. Use import from constants or strings'
						})
					}
				},
				LogicalExpression(expression){
					if ((expression.left && expression.left.type === LITERAL ||
						expression.right && expression.right.type === LITERAL) &&
						(checkLiteral(expression.right.value) || checkLiteral(expression.left.value))) {
						context.report({
							node: expression,
							message: 'No literals in expressions. Use import from constants or strings'
						})
					}
				},
				ConditionalExpression(condition){
					const consLiteral = condition.consequent.type === LITERAL;
					const altLiteral = condition.alternate.type === LITERAL;
					if((consLiteral || altLiteral) &&
						(checkLiteral(condition.consequent.value) || checkLiteral(condition.alternate.value))){
						context.report({
							node: consLiteral ? condition.consequent : condition.alternate,
							message: 'No literals in condition. Use import from constants or strings'
						})
					}
				},
				SwitchCase(swCase) {
					if (swCase.test && swCase.test.type === LITERAL && checkLiteral(swCase.test.value)) {
						context.report({
							node: swCase.test,
							message: 'No literals. Use import from constants or strings'
						})
					}
				},
			};
		}
	},
};
