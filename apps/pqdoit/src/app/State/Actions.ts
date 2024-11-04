import { Action } from '@reduxjs/toolkit';
import { StickyActionTypes } from './StickyActions';

type ActionTypes = StickyActionTypes;

interface IAction<Payload = {}> extends Action<ActionTypes> {
  payload?: Payload;
}

export default IAction;
