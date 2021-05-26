import { ActionTypes } from "../Constants/ActionType";

export const AddMyAction = (items) => {
  return {
    type: ActionTypes.ADD_ITEMS,
    payload: items,
  };
};

export const SelectMyAction = (items) => {
  return {
    type: ActionTypes.SELECT_ITEMS,
    payload: items,
  };
};
