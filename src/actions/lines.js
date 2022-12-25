import { ADD_LINE, UPDATE_LINE } from './types';

export const addLine = (line) => ({
  type: ADD_LINE,
  line,
});

export const updateLine = (line) => ({
  type: UPDATE_LINE,
  line,
});