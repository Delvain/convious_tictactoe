import Board from './Board';
import Log from './Log';
import { useSelector, useDispatch } from 'react-redux';
import { restart } from "../actions/gameActions";
import { clearLog } from "../actions/logActions";

const Game = () => {
    const dispatch = useDispatch();
    const turn =  useSelector(state => state.game.turn);
    const winner = useSelector(state => state.game.winner);
    const finished = useSelector(state => state.game.finished);
    const onClick = () => {
        dispatch(restart());
        dispatch(clearLog());
    };

    let status;
    if (winner)
        status = 'Player ' + winner + ' has won!';
    else if (finished)
        status = 'The game has ended in a draw.';
    else
        status = 'Player turn: ' + turn;

    return (
        <div className="game">
            <div className="status">{status}</div>
            <div className="board">
                <Board/>
            </div>
            <button className="restart" onClick={onClick}>Restart</button>
            <Log />
        </div>
    );
};

export default Game;