/**
 * @fileoverview Rule no literals in code
 * @author Andrey Chistobaev
 */

"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

const checkLiteral = (value, dividerFlag) => {
	const checkArray = [0, 1, true, false, null];
	if(dividerFlag){
		checkArray.push(2)
	}
	return value && !checkArray.find((el) => el === value)
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
			schema: [] // no options
		},
		create: function (context) {
			return {
				VariableDeclarator(declar) {
					var sourceCode = context.getSourceCode();
					if (declar.init.type === 'Literal' && checkLiteral(declar.init.value)) {
						context.report({
							node: declar,
							message: 'No literals in declaration. Use import from constants or strings'
						})
					}
				},
				ExpressionStatement(statement) {
					if (statement.expression.type === 'AssignmentExpression' && statement.expression.right.type === 'Literal' &&
						checkLiteral(statement.expression.right.value)) {
						context.report({
							node: statement,
							message: 'No literals in assignment. Use import from constants or strings'
						})
					}
				},
				BinaryExpression(expression) {
					if ((expression.left.type === 'Literal' || expression.right.type === 'Literal') &&
						checkLiteral(expression.right.value, true) && checkLiteral(expression.left.value, true)) {
						context.report({
							node: expression,
							message: 'No literals in expressions. Use import from constants or strings'
						})
					}
				},
				JSXAttribute(attr) {
					if (attr.value.expression.type === 'Literal' && attr.value.expression.value !== '' &&
						checkLiteral(attr.value.expression.value)) {
						context.report({
							node: attr.value.expression,
							message: 'No literals in props. Use import from constants or strings'
						})
					}
				},
				CallExpression(func) {
					const argumentLiteral = func['arguments'].find(el => el.type === 'Literal' && checkLiteral(el.value));
					const member = func.callee.object && func.callee.object.type === 'Literal';
					if (argumentLiteral || member) {
						context.report({
							node: argumentLiteral || func,
							message: 'No literals. Use import from constants or strings'
						})
					}
				},
				ArrayExpression(array) {
					const elementLiteral = array.elements.find(el => el.type === 'Literal');
					if (elementLiteral) {
						context.report({
							node: elementLiteral,
							message: 'No literals. Use import from constants or strings'
						})
					}
				},
				UnaryExpression(expression) {
					if (expression.argument.type === 'Literal' && expression.argument.value !== 1) {
						context.report({
							node: expression.argument,
							message: 'No literals. Use import from constants or strings'
						})
					}
				},
				Property(prop) {
					if (prop.value.type === 'Literal' && checkLiteral(prop.value.value)) {
						context.report({
							node: prop.value,
							message: 'No literals. Use import from constants or strings'
						})
					}
				},
				LogicalExpression(expression){
					if ((expression.left.type === 'Literal' || expression.right.type === 'Literal') &&
						(checkLiteral(expression.right.value) || checkLiteral(expression.left.value))) {
						context.report({
							node: expression,
							message: 'No literals in expressions. Use import from constants or strings'
						})
					}
				},
			};
		}
	},
};
