import * as gameReducer from "../reducers/gameReducer";

it('returns all open squares', () => {
    expect(gameReducer.getOpenSquares({
        'A1': null,
        'A2': null,
        'A3': 'X',
        'B1': 'O',
        'B2': 'X',
        'B3': 'O',
        'C1': 'X',
        'C2': null,
        'C3': null
    })).toHaveLength(4);
    expect(gameReducer.getOpenSquares({
        'A1': 'X',
        'A2': 'X',
        'A3': 'O',
        'B1': 'O',
        'B2': 'X',
        'B3': 'X',
        'C1': 'X',
        'C2': 'O',
        'C3': 'O'
    })).toHaveLength(0);
});

it('gets the correct winner', () => {
    expect(gameReducer.getWinner({
        'A1': null,
        'A2': null,
        'A3': 'X',
        'B1': 'O',
        'B2': 'X',
        'B3': 'O',
        'C1': 'X',
        'C2': null,
        'C3': null
    })).toEqual('X');

    expect(gameReducer.getWinner({
        'A1': 'O',
        'A2': 'O',
        'A3': 'O',
        'B1': 'X',
        'B2': 'X',
        'B3': null,
        'C1': 'X',
        'C2': null,
        'C3': null
    })).toEqual('O');

    expect(gameReducer.getWinner({
        'A1': 'X',
        'A2': 'X',
        'A3': 'O',
        'B1': 'O',
        'B2': 'X',
        'B3': 'X',
        'C1': 'X',
        'C2': 'O',
        'C3': 'O'
    })).toEqual(null);
});