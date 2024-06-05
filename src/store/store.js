import { configureStore } from "@reduxjs/toolkit";

import filtersReducer from "./filtersSlice";
import todoReducer from "./todoSlice";

const store = configureStore({
  reducer: {
    filters: filtersReducer.reducer,
    todoList: todoReducer.reducer,
  },
});

export default store;
