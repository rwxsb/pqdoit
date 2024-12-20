import { UniqueIdentifier } from '@dnd-kit/core';
import { IStickyAction, StickyActionTypes } from './StickyActions';
import { IState, Status } from './Common';

export interface Sticky {
  id: UniqueIdentifier;
  parent: UniqueIdentifier;
  text: string;
  color: string;
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
        stickies: findAndSetKey(
          state.stickies,
          { keyName: 'parent', valueName: 'parentId' },
          action.payload
        ),
      };
    case StickyActionTypes.SET_TEXT:
      return {
        ...state,
        stickies: findAndSetKey(
          state.stickies,
          {
            keyName: 'text',
            valueName: 'text',
          },
          action.payload
        ),
      };
    default:
      return state;
  }
};

const findAndSetKey = (
  stickies: Sticky[],
  prop: { keyName: string; valueName: string },
  payload:
    | {
        id: UniqueIdentifier;
        parentId: UniqueIdentifier;
      }
    | {
        id: UniqueIdentifier;
        text: string;
      }
): Sticky[] => {
  return stickies.reduce((acc: Sticky[], current: Sticky) => {
    if (current.id === payload?.id) {
      return [
        ...acc,
        {
          ...current,
          [prop.keyName]: payload[prop.valueName],
        },
      ];
    }

    return [...acc, current];
  }, []);
};
