/**
 * @fileoverview Rule import from styles
 * @author Andrey Chistobaev
 */

"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
	"styles-import": {
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
				ImportDeclaration(_import) {
					const fileName = _import.source.value.replace(/\.|\//g, '');
					if ((fileName === 'styles' || fileName === 'stylesjs') &&
						(_import.specifiers[0].type !== 'ImportNamespaceSpecifier' ||
							_import.specifiers[0].local.name !== 'styles' || _import.specifiers[0].imported)) {
						context.report({
							node: _import,
							message: 'Use construction "import * as styles"'
						})
					}
				}
			};
		}
	},
};
