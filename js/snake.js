var snake = {
	angles:[],
	addSnakeCell:function(x,y) {
		var snakeblock = document.getElementById("snakeblock");
		var cell=snakeblock.childNodes[y].childNodes[x];
		cell.classList.add("snakecell");
		cell.classList.remove("free");
	},
	cleanSnakeCell:function(x,y) {
		var snakeblock = document.getElementById("snakeblock");
		var cell=snakeblock.childNodes[y].childNodes[x];
		cell.classList.remove("snakecell");
		cell.classList.add("free");
	},
	startSnake:function(){
		this.head={x:2,y:0, orientation:'r'};
		this.tail={x:0,y:0, orientation:'r'};
		this.angles=[];
		this.addSnakeCell(0,0);
		this.addSnakeCell(1,0);
		this.addSnakeCell(2,0);
	},
	go:function(orient){
		if(this.head.orientation!=orient){
			this.angles.push({coordinates:{x:this.head.x,y:this.head.y},orientation:orient});
			this.head.orientation=orient;
		}
		if(orient=='r') {
			this.head.x++;
		}
		if(orient=='l') {
			this.head.x--;
		}
		if(orient=='d') {
			this.head.y++;
		}
		if(orient=='u') {
			this.head.y--;
		}
		this.addSnakeCell(this.head.x,this.head.y);
		var cell=snakeblock.childNodes[this.head.y].childNodes[this.head.x];
		if(cell.classList.contains('apple')){
			apple.addCell();
		}
		else{
			this.moveTail();
		}
	},
	moveTail:function(){
		if(this.angles[0]
			&& this.tail.x==this.angles[0].coordinates.x
			&& this.tail.y==this.angles[0].coordinates.y) {
			this.tail.orientation=this.angles[0].orientation;
			this.angles.shift();
		}
		if (this.tail.orientation=='r') {
			this.cleanSnakeCell(this.tail.x++,this.tail.y);
		}
		if (this.tail.orientation=='l') {
			this.cleanSnakeCell(this.tail.x--,this.tail.y);
		}
		if (this.tail.orientation=='d') {
			this.cleanSnakeCell(this.tail.x,this.tail.y++);
		}
		if (this.tail.orientation=='u') {
			this.cleanSnakeCell(this.tail.x,this.tail.y--);
		}
	}
}