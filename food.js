import {expandSnake, onSnake} from './Snake.js';
import { randomgridPosition } from './grid.js';

let food = getRandomfoodPosition();
let Expansion_Rate = 1

export function update(){

	if(onSnake(food)){
		expandSnake(Expansion_Rate)
		food = getRandomfoodPosition();
	}
 }

 export function draw(gameBoard){
 		const foodElement = document.createElement('div');
 		foodElement.style.gridRowStart = food.y;
 		foodElement.style.gridColumnStart = food.x;
 		foodElement.classList.add('food');
 		gameBoard.appendChild(foodElement);
 }


 function getRandomfoodPosition(){
 	let newfoodposition;
 	while(newfoodposition == null || onSnake(newfoodposition)){
 		newfoodposition = randomgridPosition();
 	}
 	return newfoodposition;
 }



