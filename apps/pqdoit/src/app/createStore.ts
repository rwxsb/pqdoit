import {
  Action,
  applyMiddleware,
  combineReducers,
  compose,
  createStore as createReduxStore,
} from '@reduxjs/toolkit';
import { IStickyState, stickyReducer } from './State/StickyReducer';
import { createEpicMiddleware } from 'redux-observable';
import { IQueueState, queueReducer } from './State/QueueReducer';

export interface IAppState {
  sticky: IStickyState;
  queue: IQueueState;
}

export const createStore = () => {
  const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : compose;

  const rootReducer = combineReducers<IAppState>({
    sticky: stickyReducer,
    queue: queueReducer,
  });

  //const rootEpic = combineEpics<Action, Action, IAppState>();

  const epicMiddleware = createEpicMiddleware<Action, Action, IAppState>();

  const middlewares =
    process.env.NODE_ENV === 'production' ? [epicMiddleware] : [epicMiddleware];

  //TODO: maybe use configure store in future
  const store = createReduxStore(
    rootReducer,
    composeEnhancers(applyMiddleware(...middlewares))
  );

  //epicMiddleware.run(rootEpic);

  return store;
};
