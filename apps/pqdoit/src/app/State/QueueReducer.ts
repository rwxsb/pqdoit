import { UniqueIdentifier } from '@dnd-kit/core';
import { IState, Status } from './Common';
import { IQueueAction, QueueActionTypes } from './QueueActions';
import { arrayMove } from '@dnd-kit/sortable';

export interface Queue {
  id: UniqueIdentifier;
  title: string;
}

export interface IQueueState extends IState {
  queues: Queue[];
}

const initialState: IQueueState = {
  queues: [],
  isError: false,
  error: '',
  status: Status.None,
};

export const queueReducer = (
  state: IQueueState = initialState,
  action: IQueueAction
): IQueueState => {
  switch (action.type) {
    case QueueActionTypes.ADD_QUEUE:
      return {
        ...state,
        queues: [...state.queues, { ...action.payload }],
      };
    case QueueActionTypes.SET_TITLE:
      return {
        ...state,
        queues: findAndSetKey(
          state.queues,
          { keyName: 'title', valueName: 'title' },
          action.payload
        ),
      };
    case QueueActionTypes.SWAP_ITEMS:
      return {
        ...state,
        queues: [
          ...arrayMove(
            state.queues,
            action.payload.item1,
            action.payload.item2
          ),
        ],
      };
    default:
      return state;
  }
};

const findAndSetKey = (
  queues: Queue[],
  prop: { keyName: string; valueName: string },
  payload: {
    id: UniqueIdentifier;
    title: string;
  }
): Queue[] => {
  return queues.reduce((acc: Queue[], current: Queue) => {
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
