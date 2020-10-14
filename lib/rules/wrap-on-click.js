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
				const eventList = [
				"onsearch",
				"onappinstalled",
				"onbeforeinstallprompt",
				"onabort",
				"onblur",
				"oncancel",
				"oncanplay",
				"oncanplaythrough",
				"onchange",
				"onclick",
				"onclose",
				"oncontextmenu",
				"oncuechange",
				"ondblclick",
				"ondrag",
				"ondragend",
				"ondragenter",
				"ondragleave",
				"ondragover",
				"ondragstart",
				"ondrop",
				"ondurationchange",
				"onemptied",
				"onended",
				"onerror",
				"onfocus",
				"onformdata",
				"oninput",
				"oninvalid",
				"onkeydown",
				"onkeypress",
				"onkeyup",
				"onload",
				"onloadeddata",
				"onloadedmetadata",
				"onloadstart",
				"onmousedown",
				"onmouseenter",
				"onmouseleave",
				"onmousemove",
				"onmouseout",
				"onmouseover",
				"onmouseup",
				"onmousewheel",
				"onpause",
				"onplay",
				"onplaying",
				"onprogress",
				"onratechange",
				"onreset",
				"onresize",
				"onscroll",
				"onseeked",
				"onseeking",
				"onselect",
				"onstalled",
				"onsubmit",
				"onsuspend",
				"ontimeupdate",
				"ontoggle",
				"onvolumechange",
				"onwaiting",
				"onwebkitanimationend",
				"onwebkitanimationiteration",
				"onwebkitanimationstart",
				"onwebkittransitionend",
				"onwheel",
				"onauxclick",
				"ongotpointercapture",
				"onlostpointercapture",
				"onpointerdown",
				"onpointermove",
				"onpointerup",
				"onpointercancel",
				"onpointerover",
				"onpointerout",
				"onpointerenter",
				"onpointerleave",
				"onselectstart",
				"onselectionchange",
				"onanimationend",
				"onanimationiteration",
				"onanimationstart",
				"ontransitionend",
				"onafterprint",
				"onbeforeprint",
				"onbeforeunload",
				"onhashchange",
				"onlanguagechange",
				"onmessage",
				"onmessageerror",
				"onoffline",
				"ononline",
				"onpagehide",
				"onpageshow",
				"onpopstate",
				"onrejectionhandled",
				"onstorage",
				"onunhandledrejection",
				"onunload",
				"ondevicemotion",
				"ondeviceorientation",
				"ondeviceorientationabsolute",
				"onpointerrawupdate",
				];
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
