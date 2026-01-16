import { useEffect, useState } from 'react';
import './TicTacToe.scss';

export default function TicTacToe() {
	const [squares, setSquares] = useState(Array(9).fill(''));
	const [isXTurn, setIsXTurn] = useState(true);
	const [status, setStatus] = useState('');

	function handleClick(getCurrentSqure) {
		const copiedSquares = [...squares];
		if (getWinner(copiedSquares) || copiedSquares[getCurrentSqure]) return;
		copiedSquares[getCurrentSqure] = isXTurn ? 'X' : 'O';
		setIsXTurn(!isXTurn);
		console.log(isXTurn ? 'X' : 'O');
		setSquares(copiedSquares);
	}

	function getWinner(squares) {
		const winningPatterns = [
			// Horizontal direction
			[1, 2, 3],
			[4, 5, 6],
			[7, 8, 9],

			// Vertical direction
			[1, 4, 7],
			[2, 5, 8],
			[3, 6, 9],

			// Cross
			[1, 5, 9],
			[3, 5, 7],
		];

		for (let i = 0; i < winningPatterns.length; i++) {
			const [x, y, z] = winningPatterns[i];
			if (squares[x] && squares[x] === squares[y] && squares[x] === squares[z]) {
				return squares[x];
			}
		}

		return null;
	}

	function handleRestart() {
		setIsXTurn(true);
		setSquares(Array(9).fill(''));
	}

	useEffect(() => {
		console.log(!getWinner(squares));
		console.log(squares);
		if (!getWinner(squares) && squares.every((item) => item !== '')) {
			setStatus('This is a draw!');
		} else if (getWinner(squares)) {
			setStatus(`Winner is ${getWinner(squares)}`);
		} else {
			setStatus(`Next player is ${isXTurn ? 'X' : 'O'}`);
		}
	}, [squares, isXTurn]);

	return (
		<div id="TicTacToe">
			<p className="status">{status}</p>
			<div className="container">
				{[...Array(9)].map((_, i) => (
					<button key={i + 1} className="Square" onClick={() => handleClick(i)}>
						{squares[i]}
					</button>
				))}
			</div>
			<button className="restart-button" onClick={handleRestart}>
				Restart
			</button>
		</div>
	);
}
