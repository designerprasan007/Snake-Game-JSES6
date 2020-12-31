import { update as updateSnake, draw as drawSnake, Snake_Speed } from './Snake.js';

var lastrendered = 0;
const gameBoard = document.getElementById('game-board');

	function main(cTime) {
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
	}

	function draw(){
		gameBoard.innerHTML = '';
		drawSnake(gameBoard);
	}