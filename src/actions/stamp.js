import { ADD_STAMP, UPDATE_STAMP } from './types';

export const addStamp = (stamp) => ({
  type: ADD_STAMP,
  stamp,
});

export const updateStamp = (stamp) => ({
  type: UPDATE_STAMP,
  stamp,
});