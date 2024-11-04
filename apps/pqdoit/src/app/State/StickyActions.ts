import IAction from './Actions';
import { Sticky } from './StickyReducer';
import { UniqueIdentifier } from '@dnd-kit/core';

export enum StickyActionTypes {
  ADD_STICKY = 'ADD_STICKY',
  SET_PARENT = 'SET_PARENT',
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

export type IAddStickyAction = IAction<Sticky>;
export type ISetParentAction = IAction<{
  id: UniqueIdentifier;
  parentId: UniqueIdentifier;
}>;

export type IStickyAction = IAddStickyAction | ISetParentAction;
