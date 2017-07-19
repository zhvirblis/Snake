var bot = {
	start:function(speed){
		field.height%2&&this.iteration(this.oddHeihtStrategy, speed);
		!(field.height%2)&&this.iteration(this.evenHeihtStrategy, speed);
	},
	iteration: function(func,speed){
		this.interval && clearInterval(this.interval);
		this.interval = setInterval(func, 1000/speed);
	},
	strategy: true,
	oddHeihtStrategy:function(){
		if(field.width%2){
			if(field.width==3){
				threeCellWidth();
			}
			else{
				oddWidth();
			}
		}
		else{
			evenWidth();
		}

		function evenWidth(){
			if(snake.head.y==0&&snake.head.orientation=='r') {
				snake.go('d');
			}
			else if(snake.head.y==field.height-1&&snake.head.x!=field.width-1&&snake.head.orientation=='r') {
				snake.go('r');
			}
			else if(snake.head.y==field.height-1&&snake.head.x==field.width-1&&snake.head.orientation=='r') {
				snake.go('u');
			}
			else if(snake.head.y==field.height-1&&snake.head.orientation=='d') {
				snake.go('r');
			}
			else if(snake.head.y==field.height-1&&snake.head.orientation=='r') {
				snake.go('r');
			}
			else if(snake.head.y!=field.height-1&&snake.head.x==0&&snake.head.orientation=='d') {
				snake.go('d');
			}
			else if(snake.head.y!=field.height-2&&snake.head.orientation=='d') {
				snake.go('d');
			}
			else if(snake.head.y==field.height-2&&snake.head.orientation=='d') {
				snake.go('l');
			}
			else if(snake.head.y==field.height-2&&snake.head.orientation=='l') {
				snake.go('u');
			}
			else if(snake.head.y!=0&&snake.head.orientation=='u') {
				snake.go('u');
			}
			else if(snake.head.y==0&&snake.head.orientation=='u') {
				snake.go('l');
			}
			else if(snake.head.y==0&&snake.head.orientation=='l') {
				snake.go('d');
			}
			else if(snake.head.y==field.height-1&&snake.head.orientation=='d') {
				snake.go('r');
			}
		}

		function oddWidth(){
			console.log(bot.strategy);
			if(snake.head.x!=field.width-1&&snake.head.orientation=='r') {
				snake.go('r');
			}
			else if(snake.head.y==0&&snake.head.orientation=='u') {
				snake.go('r');
			}
			else if(snake.head.x==field.width-1&&snake.head.orientation=='r') {
				snake.go('d');
			}
			else if(snake.head.x==field.width-1&&snake.head.y==field.height-2&&snake.head.orientation=='d') {
				snake.go('d');
			}
			else if(snake.head.x==field.width-1&&snake.head.orientation=='d') {
				snake.go('l');
			}
			else if(bot.strategy&&snake.head.y==field.height-1
				&&snake.head.x==1
				&&snake.head.orientation=='l') {
					snake.go('l');
					bot.strategy=false;
			}
			else if(bot.strategy==false&&snake.head.y==field.height-2
				&&snake.head.x==2
				&&snake.head.orientation=='l') {
					snake.go('l');
					bot.strategy=true;
			}
			else if(snake.head.y==field.height-1&&snake.head.orientation=='l') {
				snake.go('u');
			}
			else if(snake.head.x==0&&snake.head.orientation=='u') {
				snake.go('u');
			}
			else if(snake.head.y==field.height-2&&snake.head.orientation=='u') {
				snake.go('l');
			}
			else if(snake.head.y==field.height-2&&snake.head.orientation=='l') {
				snake.go('d');
			}
			else if(snake.head.y==field.height-1&&snake.head.orientation=='d') {
				snake.go('l');
			}
			else if(snake.head.x!=1&&snake.head.orientation=='l') {
				snake.go('l');
			}
			else if(snake.head.x==1&&snake.head.orientation=='l') {
				snake.go('d');
			}
			else if(snake.head.x==1&&snake.head.orientation=='d') {
				snake.go('r');
			}
			
		}

		function threeCellWidth(){
			if(snake.head.x!=2&&snake.head.orientation=='r') {
				snake.go('r');
			}
			else if(snake.head.x==2&&snake.head.orientation=='r') {
				snake.go('d');
			}
			else if(bot.strategy&&snake.head.x==2&&snake.head.y==1&&snake.head.orientation=='d') {
				snake.go('d');
				bot.strategy=false;
			}
			else if(snake.head.x==2&&snake.head.orientation=='d') {
				snake.go('l');
			}
			else if(snake.head.y==field.height-1&&snake.head.x==1&&snake.head.orientation=='d') {
				snake.go('l');
			}
			else if(snake.head.x==0&&snake.head.orientation=='l') {
				snake.go('u');
			}
			else if(snake.head.y==field.height-1&&snake.head.orientation=='l') {
				snake.go('l');
			}
			else if(snake.head.x==1&&snake.head.orientation=='l') {
				snake.go('d');
			}
			else if(snake.head.x==1&&snake.head.orientation=='d') {
				snake.go('r');
			}
			else if(snake.head.y!=0&&snake.head.orientation=='u') {
				snake.go('u');
			}
			else if(snake.head.y==0&&snake.head.orientation=='u') {
				snake.go('r');
			}
			if(snake.head.x==1&&snake.head.y==1){
				bot.strategy=true;
			}
		}
	},
	evenHeihtStrategy:function(){
		if(snake.head.x==1&&snake.head.y==field.height-1&&snake.head.orientation=='l') {
			snake.go('l');
		}
		else if(snake.head.x==0&&snake.head.orientation=='l') {
			snake.go('u');
		}
		else if(snake.head.y==0&&snake.head.orientation=='u') {
			snake.go('r');
		}
		else if(snake.head.x==0&&snake.head.orientation=='u') {
			snake.go('u');
		}
		else if(snake.head.x!=field.width-1&&snake.head.orientation=='r') {
			snake.go('r');
		}
		else if(snake.head.x==field.width-1&&snake.head.orientation=='r') {
			snake.go('d');
		}
		else if(snake.head.x==field.width-1&&snake.head.orientation=='d') {
			snake.go('l');
		}
		else if(snake.head.x!=1&&snake.head.orientation=='l') {
			snake.go('l');
		}
		else if(snake.head.x==1&&snake.head.orientation=='l') {
			snake.go('d');
		}
		else if(snake.head.x==1&&snake.head.orientation=='d') {
			snake.go('r');
		}
	}
}