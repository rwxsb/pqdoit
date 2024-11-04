import { UniqueIdentifier } from '@dnd-kit/core';
import IAction from './Actions';
import { Action } from '@reduxjs/toolkit';
import { IStickyAction, StickyActionTypes } from './StickyActions';
import { StickyComponent } from '../Components/Sticky/Sticky';

export enum Status {
  None = 'None',
  Loading = 'Loading',
  Successful = 'Successful',
  Failed = 'Failed',
}

export interface IState {
  status: Status;
  isError: boolean;
  error: string;
}

export interface Sticky {
  id: UniqueIdentifier;
  parent: UniqueIdentifier;
}

export interface IStickyState extends IState {
  stickies: Sticky[];
}

const initialState: IStickyState = {
  stickies: [],
  status: Status.None,
  isError: false,
  error: '',
};

export const stickyReducer = (
  state: IStickyState = initialState,
  action: IStickyAction
): IStickyState => {
  switch (action.type) {
    case StickyActionTypes.ADD_STICKY:
      return {
        ...state,
        stickies: [
          ...state.stickies,
          {
            ...action.payload,
          },
        ],
      };
    case StickyActionTypes.SET_PARENT:
      return {
        ...state,
        stickies: findAndSetParent(state.stickies, action.payload),
      };
    default:
      return state;
  }
};

const findAndSetParent = (
  stickies: Sticky[],
  payload:
    | {
        id: UniqueIdentifier;
        parentId: UniqueIdentifier;
      }
    | undefined
): Sticky[] => {
  return stickies.reduce((acc: Sticky[], current: Sticky) => {
    if (current.id === payload?.id) {
      return [
        ...acc,
        {
          ...current,
          parent: payload?.parentId,
        },
      ];
    }

    return [...acc, current];
  }, []);
};
