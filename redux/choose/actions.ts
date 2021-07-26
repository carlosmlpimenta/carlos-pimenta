import { SET_CHOOSE, SetChooseAction, SetChoosePayload } from './types';

export const setChoose = (payload: SetChoosePayload): SetChooseAction => ({
	type: SET_CHOOSE,
	payload
});
