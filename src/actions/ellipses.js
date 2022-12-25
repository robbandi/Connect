import { ADD_ELLIPSE, UPDATE_ELLIPSE } from './types';

export const addEllipse = (ellipse) => ({
  type: ADD_ELLIPSE,
  ellipse,
});

export const updateEllipse = (ellipse) => ({
  type: UPDATE_ELLIPSE,
  ellipse,
});