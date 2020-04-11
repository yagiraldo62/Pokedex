import { SET_FIRST_LOADING, SET_CURRENT_LOADING } from '../actionTypes';

const initialState = {
	first: true,
	current: false,
};

export default (state = initialState, action) => {
	switch (action.type) {
		case SET_FIRST_LOADING:
			return { ...state, first: action.payload };
		case SET_CURRENT_LOADING:
			return { ...state, current: action.payload };
		default:
			return state;
	}
};
