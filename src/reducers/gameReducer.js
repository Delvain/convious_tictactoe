import { produce } from 'immer';

export const initialState = {
	turn: 'X',
	winner: null,
	finished: false,
	squares: {
		'A1': null,
		'A2': null,
		'A3': null,
		'B1': null,
		'B2': null,
		'B3': null,
		'C1': null,
		'C2': null,
		'C3': null
	}
};

const fillSquare = (draftState, id, value) => {
	draftState.squares[id] = value;
	localStorage.setItem('gameState', JSON.stringify(draftState));
	return draftState;
};

const nextTurn = (draftState) => {
	if (!draftState.finished) {
		draftState.turn = draftState.turn === 'X' ? 'O' : 'X';
		localStorage.setItem('gameState', JSON.stringify(draftState));
	}
	return draftState;
};

const checkWinningLine = (squares, winningLine) => {
	var value = squares[winningLine[0]];
	if (value && value === squares[winningLine[1]] && value === squares[winningLine[2]])
		return value;
};

export const getWinner = (squares) => {
	const winningLines = [
		['A1', 'A2', 'A3'],
		['B1', 'B2', 'B3'],
		['C1', 'C2', 'C3'],
		['A1', 'B1', 'C1'],
		['A2', 'B2', 'C2'],
		['A3', 'B3', 'C3'],
		['A1', 'B2', 'C3'],
		['A3', 'B2', 'C1']
	];

	for (const winningLine of winningLines) {
		const winner = checkWinningLine(squares, winningLine);
		if (winner) {
			return winner;
		}
	}
	return null;
};

export const getOpenSquares = (squares) => {
	const openSquares = [];
	for (const id in squares) {
		if (Object.hasOwnProperty.call(squares, id)) {
			const value = squares[id];
			if (!value)
				openSquares.push(id);
		}
	}
	return openSquares;
};

const checkWinner = (draftState) => {
	const winner = getWinner(draftState.squares);
	if (winner) {
		draftState.winner = winner;
		draftState.finished = true;
	}
	else if (!getOpenSquares(draftState.squares).length) {
		draftState.finished = true;
	}

	localStorage.setItem('gameState', JSON.stringify(draftState));
	return draftState;
};

const restart = () => {
	localStorage.removeItem('gameState');
	return initialState;
};

const gameReducer = (state = JSON.parse(localStorage.getItem('gameState')) || initialState, action) => {
	switch (action.type) {
		case 'FILL_SQUARE':
			if (state.winner)
				return state;
			else
				return produce(state, (draftState) => {
					return fillSquare(draftState, action.payload.id, action.payload.value);
				});
		case 'NEXT_TURN':
			return produce(state, (draftState) => {
				return nextTurn(draftState);
			});
		case 'CHECK_WINNER':
			return produce(state, (draftState) => {
				return checkWinner(draftState);
			});
		case 'RESTART':
			return restart();
		default:
			return state;
	}
};

export default gameReducer;