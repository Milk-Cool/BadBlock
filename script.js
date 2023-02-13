const toolbox = {
	"kind": "flyoutToolbox",
	"contents": [
		{ "kind": "block", "type": "start" },
		{ "kind": "block", "type": "id" },
		{ "kind": "block", "type": "comment" },
		{ "kind": "block", "type": "string" },
		{ "kind": "block", "type": "altstring" },
		{ "kind": "block", "type": "key" },
		{ "kind": "block", "type": "combination" },
		{ "kind": "block", "type": "combination_key" },
		{ "kind": "block", "type": "sysrq" },
		{ "kind": "block", "type": "delay" },
		{ "kind": "block", "type": "default_delay" },
		{ "kind": "block", "type": "repeat" },
		{ "kind": "block", "type": "repeat_n" },
		{ "kind": "block", "type": "define" },
		{ "kind": "block", "type": "call" }
	]
};
const workspace = Blockly.inject("blocklyDiv", { toolbox });

// https://stackoverflow.com/a/30832210/13046254
function download(data, filename, type) {
	var file = new Blob([data], {type: type});
	if (window.navigator.msSaveOrOpenBlob) // IE10+
		window.navigator.msSaveOrOpenBlob(file, filename);
	else { // Others
		var a = document.createElement("a"),
				url = URL.createObjectURL(file);
		a.href = url;
		a.download = filename;
		document.body.appendChild(a);
		a.click();
		setTimeout(function() {
			document.body.removeChild(a);
			window.URL.revokeObjectURL(url);  
		}, 0); 
	}
}

const openFile = a => new Promise(resolve => {
	const sel = document.querySelector("#file");
	sel.accept = a;
	sel.onchange = e => {
		const reader = new FileReader();
		reader.addEventListener("load", e => resolve(e.target.result));
		reader.readAsText(e.target.files[0]);
	};
	sel.click();
});

const generate = () => {
	let code = generator.workspaceToCode(workspace);
	code = code.split("\n").map(x => x.trimStart()).join("\n");
	download(code, "script.txt", "text/plain");
}

const serializer = new Blockly.serialization.blocks.BlockSerializer();

const save = () => {
	const saved = serializer.save(workspace);
	download(JSON.stringify(saved), "blocks.json", "application/json");
}

const _open = async () => {
	const saved = await openFile(".json");
	serializer.load(JSON.parse(saved), workspace);
}
