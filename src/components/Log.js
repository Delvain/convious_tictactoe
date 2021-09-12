import { useSelector } from "react-redux";

const Log = () => {
    const logState = useSelector(state => state.log);
    const logItems = logState.map((logItem, i) => <li key={i}>{logItem}</li>);

    return (
        <div>
            <h3 className="log_title">Moves:</h3>
            <ol className="log">{logItems}</ol>
        </div>
    );
};

export default Log;