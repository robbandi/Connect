import { ADD_TEXT, UPDATE_TEXT } from './types';

export const addText = (text) => ({
  type: ADD_TEXT,
  text,
});

export const updateText = (text) => ({
  type: UPDATE_TEXT,
  text,
});