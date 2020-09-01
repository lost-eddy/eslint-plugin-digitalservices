"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
	"constants-case": {
		meta: {
			type: "constants-case",
			docs: {
				description: "",
				category: "",
				recommended: true,
				url: ""
			},
			fixable: "code",
			schema: [] // no options
		},
		create: function(context) {
			return {
				Property(prop) {
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
			};
		}
	},
	"no-literal-expression": {
		meta: {
			type: "no-literal-expression",
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
					if (declar.init.type === 'Literal'&& declar.init.value !== 0 && declar.init.value !== 1) {
						context.report({
							node: declar,
							message: 'No literals in declaration. Use import from constants or strings'
						})
					}
				},
				ExpressionStatement(statement){
					if(statement.expression.type === 'AssignmentExpression' && statement.expression.right.type === 'Literal' &&
						statement.expression.right.value !== 0 && statement.expression.right.value !== 1) {
						context.report({
							node: statement,
							message: 'No literals in assignment. Use import from constants or strings'
						})
					}
				},
				BinaryExpression(expression){
					if((expression.left.type === 'Literal' || expression.right.type === 'Literal') &&
						expression.right.value !== -1 && expression.left.value !== -1 &&
						expression.right.value !== 0 && expression.left.value !== 0 &&
						expression.right.value !== 1 && expression.left.value !== 1 &&
						expression.right.value !== 2 && expression.left.value !== 2) {
						context.report({
							node: expression,
							message: 'No literals in expressions. Use import from constants or strings'
						})
					}
				},
				JSXAttribute(attr){
					if(attr.value.expression.type === 'Literal' && attr.value.expression.value !== '' &&
						attr.value.expression.value !== 0 && attr.value.expression.value !== 1){
						context.report({
							node: attr.value.expression,
							message: 'No literals in props. Use import from constants or strings'
						})
					}
				},
				CallExpression(func){
					const argumentLiteral = func.arguments.find(el => el.type === 'Literal');
					if(argumentLiteral){
						context.report({
							node: argumentLiteral,
							message: 'No literals. Use import from constants or strings'
						})
					}
				},
				ArrayExpression(array){
					const elementLiteral = array.elements.find(el => el.type === 'Literal');
					if(elementLiteral){
						context.report({
							node: elementLiteral,
							message: 'No literals. Use import from constants or strings'
						})
					}
				},
				UnaryExpression(expression){
					if(expression.argument.type === 'Literal' && expression.argument.value !== 1){
						context.report({
							node: expression.argument,
							message: 'No literals. Use import from constants or strings'
						})
					}
				},
				Property(prop){
					if(prop.value.type === 'Literal'){
						context.report({
							node: prop.value,
							message: 'No literals. Use import from constants or strings'
						})
					}
				}
			};
		}
	},
	"styles-import": {
		meta: {
			type: "styles-import",
			docs: {
				description: "",
				category: "",
				recommended: true,
				url: ""
			},
			fixable: "code",
			schema: [] // no options
		},
		create: function(context) {
			return {
				ImportDeclaration(_import){
					const fileName = _import.source.value.replace(/\.|\//g, '');
					if((fileName === 'styles' || fileName === 'stylesjs') &&
						(_import.specifiers[0].type !== 'ImportNamespaceSpecifier' ||
							_import.specifiers[0].local.name !== 'styles' || _import.specifiers[0].imported)){
						context.report({
							node: _import,
							message: 'Use construction "import * as styles"'
						})
					}
				}
			};
		}
	},
	"key-map-prop": {
		meta: {
			type: "key-map-prop",
			docs: {
				description: "",
				category: "",
				recommended: true,
				url: ""
			},
			fixable: "code",
			schema: [] // no options
		},
		create: function(context) {
			return {
				JSXExpressionContainer(container){
					const mapBody = container.expression.arguments[0] && container.expression.arguments[0].body;
					if(container.expression.callee && container.expression.callee.property.name === 'map' &&
						mapBody.type === 'JSXElement' && !mapBody.openingElement.attributes.find(el => el.name.name === 'key')){
						context.report({
							node: container,
							message: 'Missing “key” prop for element.'
						})
					}
				}
			};
		}
	},
};
