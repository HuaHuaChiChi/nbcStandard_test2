// import uuid from "react-uuid";
import shortid from "shortid";

const ADD_TODO = "ADD_TODO";

export const addTodo = (todo) => ({
  type: ADD_TODO,
  payload: todo,
});

const initialState = [
  {
    id: shortid.generate(),
    title: "기본값 1",
    body: "기본본본",
    isDone: false,
  },
];

// 리듀서
const todos = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return {
        ...state,
        todo: [...state, action.payload],
      };

    case "DELETE_TODO":
      const deleteTargetId = action.payload;
      return;

    case "SWITCH_TODO":
      return; //TODO: 여기 작성

    default:
      return state;
  }
};

export default todos;
