import React from "react";
import TodoReducer from "./TodoReducer";
import {
  TTodo,
  TTodo_Read,
  EType,
  TPayload_Write,
  TPayload,
  TState,
  TAction,
} from "./TodoReducer.type";

export { mockTodos } from "./TodoReducer.type";

export default function useTodoReducer(initialArg: TState) {
  const [todos, dispatch] = React.useReducer(
    (state: TState, { type, payload }: TAction) => {
      const todoReducer = new TodoReducer(state);
      // console.log("🚀 ~ useTodoReducer ~ state:", state)
      switch (type) {
        case EType.Get:
          return todoReducer.doGet(payload);
        case EType.Post:
          return todoReducer.doPost(payload);
        case EType.Patch:
          return todoReducer.doPatch(payload);
        case EType.Put:
          return todoReducer.doPut(payload);
        case EType.Delete:
          return todoReducer.doDelete(payload);
        default:
          return state;
      }
    },
    initialArg,
  );

  // todoId
  const getTodo = (payload: number) => dispatch({ type: EType.Get, payload });

  // { task: 'Odara TV w/Next' }
  const addTodo = (payload: TTodo) => dispatch({ type: EType.Post, payload });

  // todoId
  const editTodo = (payload: number) =>
    dispatch({ type: EType.Patch, payload });

  // { id: 3, body: { task: "Fedora w/Expo" } }
  // { id: 4, body: { task: "crkt.io w/Expo" } }
  const saveTodo = (payload: TPayload_Write) =>
    dispatch({ type: EType.Put, payload });

  // todoId
  const removeTodo = (payload: number) =>
    dispatch({ type: EType.Delete, payload });

  return {
    todos,
    getTodo,
    addTodo,
    editTodo,
    saveTodo,
    removeTodo,
  };
}