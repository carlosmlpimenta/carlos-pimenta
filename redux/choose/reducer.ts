import { ChooseAction, ChooseState, SET_CHOOSE } from './types';

const initialState: ChooseState = {
	choose: 'home'
};

export const chooseReducer = (
	state: ChooseState = initialState,
	action: ChooseAction
): ChooseState => {
	switch (action.type) {
		case SET_CHOOSE:
			return {
				...state,
				...{ choose: action.payload }
			};

		default:
			return state;
	}
};
