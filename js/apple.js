var apple = {
	addCell:function() {
		this.clearCell();
		var cells = document.querySelectorAll(".free");
		if(!cells.length||cells.length==1&&field.width%2&&field.height%2) {
			alert("GAME OVER!");
			main();
			return;
		}
		var cell = cells[getRandomInt(cells.length)];
		cell.classList.add("apple");
		function getRandomInt(max) {
  			return Math.floor(Math.random() * max);
		}
	},
	clearCell:function(){
		var apple = document.querySelector(".apple");
		apple&&apple.classList.remove("apple");
	}
}