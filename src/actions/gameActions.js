export const fillSquare = (id, value) => ({
    type: 'FILL_SQUARE',
    payload: {
        id,
        value
    }
});

export const nextTurn = () => ({
    type: 'NEXT_TURN'
});

export const checkWinner = () => ({
    type: 'CHECK_WINNER'
});

export const restart = () => ({
    type: 'RESTART'
});