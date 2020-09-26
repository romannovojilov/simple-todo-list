import { ITask, EditableTask, TaskFilterStatus } from "../../types/task";
import { TodoAction } from "../actions/todoActions";
import { CREATE_TASK, SET_EDITABLE_TASK, UPDATE_TASK, REMOVE_TASK, SET_FILTER } from "../types/todoTypes";

export type TodoState = {
  list: ITask[],
  editableTask: EditableTask,
  filter: TaskFilterStatus
}

const initialState: TodoState = {
  list: [],
  editableTask: null,
  filter: 0
}

export function todoReducer(state = initialState, action: TodoAction): TodoState {
  switch (action.type) {
    case CREATE_TASK:
      const newTask: ITask = {
        ...action.payload,
        id: Date.now()
      };
      return {
        ...state,
        list: [...state.list, newTask]
      };
    case UPDATE_TASK:
      return {
        ...state,
        list: state.list.map(todo => {
          if (todo.id === action.payload.id) return { ...action.payload };
          return todo;
        })
      };
    case REMOVE_TASK:
      return {
        ...state,
        list: state.list.filter(todo => todo.id !== action.payload)
      };
    case SET_EDITABLE_TASK:
      if (action.payload) return { ...state, editableTask: state.list.find(todo => todo.id === action.payload) || null };
      return { ...state, editableTask: null };
    case SET_FILTER:
      return {
        ...state,
        filter: action.payload
      };
    default: return state;
  }
}