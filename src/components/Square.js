import { useSelector, useDispatch } from "react-redux";
import { fillSquare, nextTurn, checkWinner } from "../actions/gameActions";
import { logMessage } from "../actions/logActions";

const Square = ({ id }) => {
    const dispatch = useDispatch();
    const finished = useSelector(state => state.game.finished);
    const value = useSelector(state => state.game.squares[id]);
    const turn = useSelector(state => state.game.turn);
    const onClick = () => {
        if (!finished && !value) {
            dispatch(logMessage('Player ' + turn + ' takes ' + id));
            dispatch(fillSquare(id, turn));
            dispatch(checkWinner());
            dispatch(nextTurn());
        }
    }

    return (
        <button className="square" data-id={id} onClick={onClick}>
            {value}
        </button>
    );
};

export default Square;