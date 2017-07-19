function main() {
	var width = document.getElementById('width').value;
	var height = document.getElementById('height').value;
	var speed = document.getElementById('speed').value;
	field.generate(width, height);
	bot.start(speed);
}

var field = {
	generate:function(width, height){
		this.width=width;
		this.height=height;
		var body = document.getElementsByTagName('body')[0];
		var snakeblock = document.getElementById('snakeblock');
		snakeblock&&snakeblock.remove();
		snakeblock = document.createElement('div');
		snakeblock.id = 'snakeblock';
		body.appendChild(snakeblock);
		this.addStrings(snakeblock, width, height);
		snake.startSnake();
		apple.addCell();
	},
	addStrings:function(elem, width, height){
	if(!height) return;
		var gorizontalBlock = document.createElement("div");
		this.addCells(gorizontalBlock, width);
		this.addStrings(elem, width, --height);
		elem.appendChild(gorizontalBlock);
	},
	addCells:function(gorizontalBlock, width){
	if(!width) return;
	var cell = document.createElement("div");
		cell.classList.add("cell");
		cell.classList.add("free");
		this.addCells(gorizontalBlock, --width);
		gorizontalBlock.appendChild(cell);
	}
}