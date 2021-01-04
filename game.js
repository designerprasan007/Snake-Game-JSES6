import { update as updateSnake, draw as drawSnake, Snake_Speed } from './Snake.js';

import {update as updateFood, draw as drawFood} from './food.js';

var lastrendered = 0;
let gameOver = false;
const gameBoard = document.getElementById('game-board');


	function main(cTime) {

		if(gameOver){
			return alert('game end');
		}

		window.requestAnimationFrame(main);
		var secondsLastRendered = (cTime - lastrendered) / 1000

		if (secondsLastRendered < 1 / Snake_Speed) return

		console.log('render');
		lastrendered = cTime;	

		update()
		draw()

	}
	window.requestAnimationFrame(main);

	function update(){
		updateSnake()
		updateFood()
		checkDeath()
	}

	function draw(){
		gameBoard.innerHTML = '';
		drawSnake(gameBoard);
		drawFood(gameBoard);

	}

	function checkDeath(){
		gameOver = outsideGrid(getSnakeHead()) || snakeInterfere()
	}
