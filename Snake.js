export const Snake_Speed = 1
 
const SnakeBody = [
			{x:10, y:11},
			{x:11, y:11},
			{x:12, y:11},
			{x:13, y:11},
			{x:14, y:11}
		];	


 export function update(){
 	
 	for (var i = SnakeBody.length - 2; i >= 0; i--) {

 				SnakeBody[i + 1] = {...SnakeBody[i]}
 	}

 	// SnakeBody[0].x += 0;
 	// SnakeBody[0].y += 1;
 }

 export function draw(gameBoard){
 	SnakeBody.forEach(segment => {
 		const snakeElement = document.createElement('div');
 		snakeElement.style.gridRowStart = segment.y;
 		snakeElement.style.gridColumnStart = segment.x;
 		snakeElement.classList.add('snake');
 		gameBoard.appendChild(snakeElement);


 	})	
 }