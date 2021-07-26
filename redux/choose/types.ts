/*
    SET_CHOOSE
*/
export const SET_CHOOSE = 'SET_CHOOSE';

export type SetChoosePayload = string;

export type SetChooseAction = {
	type: typeof SET_CHOOSE;
	payload: SetChoosePayload;
};

export type ChooseAction = SetChooseAction;
export type ChooseState = { choose: string };
