import { combineReducers, createStore } from 'redux';

import { chooseReducer } from '@redux/choose/reducer';

const rootReducer = combineReducers({
	choose: chooseReducer
});

const store = createStore(rootReducer);

export type RootState = ReturnType<typeof rootReducer>;

export default store;
