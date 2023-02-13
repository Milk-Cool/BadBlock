const keys = [
	[ "Ctrl", "CTRL" ],
	[ "Shift", "SHIFT" ],
	[ "Alt", "ALT" ],
	[ "Windows", "GUI" ],
	[ "Down", "DOWN" ],
	[ "Left", "LEFT" ],
	[ "Right", "RIGHT" ],
	[ "Up", "UP" ],
	[ "Enter", "ENTER" ],
	[ "Break", "BREAK" ],
	[ "Pause", "PAUSE" ],
	[ "Caps Lock", "CAPSLOCK" ],
	[ "Delete", "DELETE" ],
	[ "Backspace", "BACKSPACE" ],
	[ "End", "END" ],
	[ "Esc", "ESC" ],
	[ "Home", "HOME" ],
	[ "Insert", "INSERT" ],
	[ "Num Lock", "NUMLOCK" ],
	[ "Page Up", "PAGEUP" ],
	[ "Page Down", "PAGEDOWN" ],
	[ "Print Screen", "PRINTSCREEN" ],
	[ "Scroll Lock", "SCROLLLOCK" ],
	[ "Space", "SPACE" ],
	[ "Tab", "TAB" ],
	[ "Menu", "MENU" ],
	[ "App", "APP" ],
	[ "F1", "F1" ],
	[ "F2", "F2" ],
	[ "F3", "F3" ],
	[ "F4", "F4" ],
	[ "F5", "F5" ],
	[ "F6", "F6" ],
	[ "F7", "F7" ],
	[ "F8", "F8" ],
	[ "F9", "F9" ],
	[ "F10", "F10" ],
	[ "F11", "F11" ],
	[ "F12", "F12" ],
	[ "a", "a" ],
	[ "b", "b" ],
	[ "c", "c" ],
	[ "d", "d" ],
	[ "e", "e" ],
	[ "f", "f" ],
	[ "g", "g" ],
	[ "h", "h" ],
	[ "i", "i" ],
	[ "j", "j" ],
	[ "k", "k" ],
	[ "l", "l" ],
	[ "m", "m" ],
	[ "n", "n" ],
	[ "o", "o" ],
	[ "p", "p" ],
	[ "q", "q" ],
	[ "r", "r" ],
	[ "s", "s" ],
	[ "t", "t" ],
	[ "u", "u" ],
	[ "v", "v" ],
	[ "w", "w" ],
	[ "x", "x" ],
	[ "y", "y" ],
	[ "z", "z" ],
	[ "0", "0" ],
	[ "1", "1" ],
	[ "2", "2" ],
	[ "3", "3" ],
	[ "4", "4" ],
	[ "5", "5" ],
	[ "6", "6" ],
	[ "7", "7" ],
	[ "8", "8" ],
	[ "9", "9" ],
	[ "!", "!" ],
	[ "\"", "\"" ],
	[ "#", "#" ],
	[ "$", "$" ],
	[ "%", "%" ],
	[ "&", "&" ],
	[ "'", "'" ],
	[ "(", "(" ],
	[ ")", ")" ],
	[ "*", "*" ],
	[ "+", "+" ],
	[ ",", "," ],
	[ "-", "-" ],
	[ ".", "." ],
	[ "/", "/" ],
	[ ":", ":" ],
	[ ";", ";" ],
	[ "<", "<" ],
	[ "=", "=" ],
	[ ">", ">" ],
	[ "?", "?" ],
	[ "@", "@" ],
	[ "[", "[" ],
	[ "\\", "\\" ],
	[ "]", "]" ],
	[ "^", "^" ],
	[ "_", "_" ],
	[ "`", "`" ],
	[ "{", "{" ],
	[ "|", "|" ],
	[ "}", "}" ],
	[ "~", "~" ],
];
const combinations = [
	[ "Ctrl+Alt", "CTRL-ALT" ],
	[ "Ctrl+Shift", "CTRL-SHIFT" ],
	[ "Alt+Shift", "ALT-SHIFT" ],
	[ "Alt+Windows", "ALT-GUI" ],
	[ "Windows+Shift", "GUI-SHIFT" ],
	[ "Windows+Ctrl", "GUI-CTRL" ],
];
const prefixes = keys.slice(0, 4).concat(combinations);
const chars = keys.slice(39);

Blockly.Extensions.register("vid_pid_extension", function(){
	this.getField("ID").setValidator(value => /^\d{3}:\d{3}$/.test(value) ? value : "");
});

Blockly.defineBlocksWithJsonArray([
	{
		"type": "start",
		"message0": "Start",
		"colour": 200,
		"nextStatement": null
	},
	{
		"type": "id",
		"message0": "Set VID:PID to %1",
		"args0": [
			{ "type": "field_input", "name": "ID" }
		],
		"colour": 200,
		"nextStatement": null,
		"previousStatement": null,
		"extensions": [ "vid_pid_extension" ]
	},
	{
		"type": "comment",
		"message0": "Comment %1",
		"args0": [
			{ "type": "field_input", "name": "COMMENT" }
		],
		"colour": 130,
		"nextStatement": null,
		"previousStatement": null
	},
	{
		"type": "string",
		"message0": "Inject string %1",
		"args0": [
			{ "type": "field_input", "name": "STRING" }
		],
		"colour": 20,
		"nextStatement": null,
		"previousStatement": null
	},
	{
		"type": "altstring",
		"message0": "Inject unicode string %1",
		"args0": [
			{ "type": "field_input", "name": "STRING" }
		],
		"colour": 20,
		"nextStatement": null,
		"previousStatement": null
	},
	{
		"type": "key",
		"message0": "Press key %1",
		"args0": [
			{ "type": "field_dropdown", "name": "KEY", "options": keys }
		],
		"colour": 20,
		"nextStatement": null,
		"previousStatement": null
	},
	{
		"type": "combination",
		"message0": "Press combination %1",
		"args0": [
			{ "type": "field_dropdown", "name": "COMBINATION", "options": combinations }
		],
		"colour": 20,
		"nextStatement": null,
		"previousStatement": null
	},
	{
		"type": "combination_key",
		"message0": "Press combination %1 %2",
		"args0": [
			{ "type": "field_dropdown", "name": "COMBINATION", "options": prefixes },
			{ "type": "field_dropdown", "name": "KEY", "options": keys }
		],
		"colour": 20,
		"nextStatement": null,
		"previousStatement": null
	},
	{
		"type": "sysrq",
		"message0": "Press SysRq + %1",
		"args0": [
			{ "type": "field_dropdown", "name": "KEY", "options": chars }
		],
		"colour": 20,
		"nextStatement": null,
		"previousStatement": null
	},
	{
		"type": "delay",
		"message0": "Wait %1 milliseconds",
		"args0": [
			{ "type": "field_number", "name": "TIME" }
		],
		"colour": 60,
		"nextStatement": null,
		"previousStatement": null
	},
	{
		"type": "default_delay",
		"message0": "Set default delay to %1",
		"args0": [
			{ "type": "field_number", "name": "TIME" }
		],
		"colour": 60,
		"nextStatement": null,
		"previousStatement": null
	},
	{
		"type": "repeat",
		"message0": "Repeat instruction above %1 times",
		"args0": [
			{ "type": "field_number", "name": "TIMES" }
		],
		"colour": 180,
		"nextStatement": null,
		"previousStatement": null
	},
	{
		"type": "repeat_n",
		"message0": "%1 times",
		"args0": [
			{ "type": "field_number", "name": "TIMES" }
		],
		"message1": "do %1",
		"args1": [
			{ "type": "input_statement", "name": "DO" }
		],
		"colour": 270,
		"nextStatement": null,
		"previousStatement": null
	},
	{
		"type": "define",
		"message0": "Define macro %1",
		"args0": [
			{ "type": "field_input", "name": "NAME" }
		],
		"message1": "do %1",
		"args1": [
			{ "type": "input_statement", "name": "DO" }
		],
		"colour": 320,
		"nextStatement": null,
		"previousStatement": null
	},
	{
		"type": "call",
		"message0": "Call macro %1",
		"args0": [
			{ "type": "field_input", "name": "NAME" }
		],
		"colour": 320,
		"nextStatement": null,
		"previousStatement": null
	}
]);
