"use strict";

const constantsCase = require('./rules/constants-case.js');
const stringsCase = require('./rules/strings-case.js');
const nsiCase = require('./rules/nsi-case.js');
const noLiteralExpression = require('./rules/no-literal-expression.js');
const stylesImport = require('./rules/styles-import.js');
const propsOnNewLine = require('./rules/props-on-new-line.js');
const wrapOnClick = require('./rules/wrap-on-click.js');

module.exports = {
	rules: {
		...constantsCase,
		...stringsCase,
		...nsiCase,
		...noLiteralExpression,
		...stylesImport,
		...propsOnNewLine,
		...wrapOnClick,
	}
};
