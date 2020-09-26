import React from 'react';
import TodoForm from '../TodoForm';
import { ITask, EditableTask } from '../../types/task';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../redux/reducers/rootReducer';
import { createTask, setEditableTask, updateTask } from '../../redux/actions/todoActions';

import s from './TodoEditor.module.scss';

export const TodoEditor: React.FC = () => {
  const dispatch = useDispatch();
  const editableTask = useSelector<RootState, EditableTask>(state => state.todo.editableTask);

  const todoEditorSubmitHandler = (task: ITask) => {
    const action = editableTask
      ? updateTask
      : createTask;
    dispatch(action(task));
    dispatch(setEditableTask());
  };

  const todoEditorCancelHandler = () => {
    dispatch(setEditableTask());
  };

  return (
    <TodoForm
      task={editableTask}
      onSubmit={todoEditorSubmitHandler}
      onCancel={todoEditorCancelHandler}
    />
  )
}