import { getInputDirection } from './input.js'

export const Snake_Speed = 5;
 
const SnakeBody = [{x:1, y:11}];	

let newSegment = 0

 export function update(){
 	addSegment();
 	const inputDirection = getInputDirection();
 	for (var i = SnakeBody.length - 2; i >= 0; i--) {

 				SnakeBody[i + 1] = {...SnakeBody[i]}
 	}

 	SnakeBody[0].x += inputDirection.x;
 	SnakeBody[0].y += inputDirection.y;
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

 export function getSnakeHead(){
 	return SnakeBody[0];
 }


 export function expandSnake(rate){
 		newSegment += rate; 
 }

 export function onSnake(posi){
 		return SnakeBody.some(segment => {
 			return equalPosition(segment, posi)
 		})
 }

 function equalPosition(pos1, pos2){
 	return pos1.x === pos2.x && pos1.y === pos2.y 
 }

 function addSegment(){
 	for (var i = 0; i< newSegment; i++){
 		SnakeBody.push({ ...SnakeBody[SnakeBody.length - 1]});
 	}
 	newSegment = 0
 }