const generator = new Blockly.Generator("BadUSB");
const next = block => generator.blockToCode(block.nextConnection && block.nextConnection.targetBlock());

let macros = [];

generator["start"] = block => {
	macros = [];
	return next(block);
};
generator["id"] = block => {
	return "ID " + block.getFieldValue("ID") + "\n" + next(block);
};
generator["comment"] = block => {
	return "REM " + block.getFieldValue("COMMENT") + "\n" + next(block);
};
generator["string"] = block => {
	return "STRING " + block.getFieldValue("STRING") + "\n" + next(block);
};
generator["altstring"] = block => {
	return "ALTSTRING " + block.getFieldValue("STRING") + "\n" + next(block);
};
generator["key"] = block => {
	return block.getFieldValue("KEY") + "\n" + next(block);
};
generator["combination"] = block => {
	return block.getFieldValue("COMBINATION") + "\n" + next(block);
};
generator["combination_key"] = block => {
	return block.getFieldValue("COMBINATION") + " " + block.getFieldValue("KEY") + "\n" + next(block);
};
generator["sysrq"] = block => {
	return "SYSRQ " + block.getFieldValue("KEY") + "\n" + next(block);
};
generator["delay"] = block => {
	return "DELAY " + block.getFieldValue("TIME") + "\n" + next(block);
};
generator["default_delay"] = block => {
	return "DEFAULTDELAY " + block.getFieldValue("TIME") + "\n" + next(block);
};
generator["repeat"] = block => {
	return "REPEAT " + block.getFieldValue("TIMES") + "\n" + next(block);
};
generator["repeat_n"] = block => {
	return generator.statementToCode(block, "DO").repeat(parseInt(block.getFieldValue("TIMES"))) + "\n" + next(block);
};
generator["define"] = block => {
	macros[block.getFieldValue("NAME")] = generator.statementToCode(block, "DO");
	return next(block);
};
generator["call"] = block => {
	return (macros[block.getFieldValue("NAME")] || "") + "\n" + next(block);
};
