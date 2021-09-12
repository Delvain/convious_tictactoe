import gameReducer from "./gameReducer";
import logReducer from "./logReducer";
import { combineReducers } from 'redux';

const allReducers = combineReducers({
	game: gameReducer,
	log: logReducer
});

export default allReducers;