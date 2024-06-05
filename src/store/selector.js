import { createSelector } from "@reduxjs/toolkit";

export const todoListSelector = (state) => state.todoList;

export const filterSearchSelector = (state) => state.filters.search;
export const filterStatusSelector = (state) => state.filters.status;
export const filterPrioritiesSelector = (state) => state.filters.priorities;

export const todoRemainingSelector = createSelector(
  todoListSelector,
  filterSearchSelector,
  filterStatusSelector,
  filterPrioritiesSelector,
  (todoList, search, status, priorities) =>
    todoList.filter((todo) => {
      if (status === "All")
        return !priorities.length
          ? todo.name.includes(search)
          : todo.name.includes(search) && priorities.includes(todo.priority);
      return (
        todo.name.includes(search) &&
        (status === "Completed" ? todo.completed : !todo.completed) &&
        (priorities.length ? priorities.includes(todo.priority) : true)
      );
    })
);
