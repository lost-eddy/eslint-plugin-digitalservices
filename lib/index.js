"use strict";

module.exports = {
	extends: [
		'./rules/main',
	].map(require.resolve),
};



