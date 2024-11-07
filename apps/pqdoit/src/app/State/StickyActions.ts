import IAction from './Actions';
import { Sticky } from './StickyReducer';
import { UniqueIdentifier } from '@dnd-kit/core';

export enum StickyActionTypes {
  ADD_STICKY = 'ADD_STICKY',
  SET_PARENT = 'SET_PARENT',
  SET_TEXT = 'SET_TEXT',
}

export const addSticky = (sticky: Sticky) => ({
  type: StickyActionTypes.ADD_STICKY,
  payload: sticky,
});

export const setParent = (setParent: {
  id: UniqueIdentifier;
  parentId: UniqueIdentifier;
}) => ({
  type: StickyActionTypes.SET_PARENT,
  payload: setParent,
});

export const setText = (setText: { id: UniqueIdentifier; text: string }) => ({
  type: StickyActionTypes.SET_TEXT,
  payload: setText,
});

export type ISetStickyAction = IAction<{
  id: UniqueIdentifier;
  text: string;
}>;
export type IAddStickyAction = IAction<Sticky>;
export type ISetParentAction = IAction<{
  id: UniqueIdentifier;
  parentId: UniqueIdentifier;
}>;

export type IStickyAction =
  | IAddStickyAction
  | ISetParentAction
  | ISetStickyAction;
