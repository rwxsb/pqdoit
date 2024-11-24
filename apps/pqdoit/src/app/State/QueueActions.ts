import { UniqueIdentifier } from '@dnd-kit/core';
import IAction from './Actions';
import { Queue } from './QueueReducer';

export enum QueueActionTypes {
  ADD_QUEUE = 'ADD_QUEUE',
  SET_TITLE = 'SET_TITLE',
  SWAP_ITEMS = 'SWAP_ITEMS',
}

export const swapItems = (payload: { item1: number; item2: number }) => ({
  type: QueueActionTypes.SWAP_ITEMS,
  payload: payload,
});

export const addQueue = (queue: Queue) => ({
  type: QueueActionTypes.ADD_QUEUE,
  payload: queue,
});

export const setTitle = (payload: { id: UniqueIdentifier; title: string }) => ({
  type: QueueActionTypes.SET_TITLE,
  payload: payload,
});

export type ISwapItemsAction = IAction<{ item1: number; item2: number }>;
export type IAddQueueAction = IAction<Queue>;
export type ISetTitleAction = IAction<{ id: UniqueIdentifier; title: string }>;

export type IQueueAction = IAddQueueAction | ISetTitleAction | ISwapItemsAction;
