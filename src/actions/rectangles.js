import { ADD_RECTANGLE, UPDATE_RECTANGLE } from './types';

export const addRectangle = (rectangle) => ({
  type: ADD_RECTANGLE,
  rectangle,
});

export const updateRectangle = (rectangle) => ({
  type: UPDATE_RECTANGLE,
  rectangle,
});