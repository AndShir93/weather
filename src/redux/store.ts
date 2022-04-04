import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension'
import { reducer } from './reducers';
import thunk from 'redux-thunk';
import { TypedUseSelectorHook, useSelector } from 'react-redux';

export const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector