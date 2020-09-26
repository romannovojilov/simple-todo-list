import { CREATE_TASK, SET_EDITABLE_TASK, UPDATE_TASK, REMOVE_TASK, SET_FILTER } from "../types/todoTypes";
import { ITask, TaskStatus, TaskFilterStatus } from "../../types/task";
import { Action } from "redux";

interface ActionWithPayload<T, P> extends Action<T> {
  payload: P
}

export const createTask = (payload: ITask): ActionWithPayload<typeof CREATE_TASK, ITask> => {
  return {
    type: CREATE_TASK,
    payload
  };
};

export const updateTask = (payload: ITask): ActionWithPayload<typeof UPDATE_TASK, ITask> => {
  return {
    type: UPDATE_TASK,
    payload
  };
};

export const removeTask = (id: number): ActionWithPayload<typeof REMOVE_TASK, number> => {
  return {
    type: REMOVE_TASK,
    payload: id
  };
};

export const setEditableTask = (id?: number): ActionWithPayload<typeof SET_EDITABLE_TASK, number | undefined> => {
  return {
    type: SET_EDITABLE_TASK,
    payload: id
  };
};

export const setFilter = (filter: TaskFilterStatus): ActionWithPayload<typeof SET_FILTER, TaskFilterStatus> => {
  return {
    type: SET_FILTER,
    payload: filter
  };
};

export type TodoAction =
  ReturnType<typeof createTask> |
  ReturnType<typeof updateTask> |
  ReturnType<typeof removeTask> |
  ReturnType<typeof setEditableTask> |
  ReturnType<typeof setFilter>;