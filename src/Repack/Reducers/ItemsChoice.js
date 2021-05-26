import { ActionTypes } from "../Constants/ActionType";

const initialState = {
  item: [
    { id: 1, name: "Peter", title: "Mr" },
    { id: 2, name: "Ubani", title: "Mr" },
    { id: 3, name: "Ndidi", title: "Mr" },
    { id: 4, name: "Sam", title: "Mr" },
    { id: 5, name: "Bukky", title: "Mrs" },
  ],
};

export const MyAddReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.ADD_ITEMS:
      return state;

    default:
      return state;
  }
};
