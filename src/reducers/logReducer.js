import { produce } from 'immer';

const logMessage = (draftState, message) => {
	console.log(message);
	draftState.push(message);
	localStorage.setItem('logState', JSON.stringify(draftState));
	return draftState;
};

const logReducer = (state = JSON.parse(localStorage.getItem('logState')) || [], action) => {
	switch (action.type) {
		case 'LOG_MESSAGE':
			return produce(state, (draftState) => {
				return logMessage(draftState, action.payload.message);
			});
		case 'CLEAR_LOG':
			localStorage.removeItem('logState');
			return [];
		default:
			return state;
	}
};

export default logReducer;