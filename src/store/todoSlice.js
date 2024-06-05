import { createSlice } from "@reduxjs/toolkit";

export default createSlice({
  name: "todoList",
  initialState: [
    {
      id: 1,
      name: "Biting an apple",
      completed: true,
      priority: "Low",
    },
    {
      id: 2,
      name: "Listening 'How Sweet'",
      completed: false,
      priority: "High",
    },
    { id: 3, name: "Eating Bubble Gum", completed: false, priority: "Medium" },
  ],
  reducers: {
    addTodo: (state, action) => {
      state.push(action.payload);
    },
    toggleTodoStatus: (state, action) => {
      const currentTodo = state.find((todo) => todo.id === action.payload);
      if (currentTodo) currentTodo.completed = !currentTodo.completed;
    },
  },
});
