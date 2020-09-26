import React, { ChangeEvent } from 'react';
import s from './Task.module.scss';
import { ITask, TaskStatus } from '../../types/task';
import { setEditableTask, removeTask, updateTask } from '../../redux/actions/todoActions';
import { useDispatch } from 'react-redux';

type TaskProps = {
  task: ITask,
  disabled?: boolean | null
}

export const Task: React.FC<TaskProps> = ({ task, disabled = false }) => {
  const dispatch = useDispatch();

  const editHandler = () => {
    dispatch(setEditableTask(task.id));
  };

  const removeHandler = () => {
    if (window.confirm(`Delete the task: "${task.title}"?`)) {
      dispatch(removeTask(task.id));
    }
  };

  const statusHandler = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(updateTask({
      ...task,
      status: e.target.checked
        ? TaskStatus.COMPLETED
        : TaskStatus.ACTIVE
    }));
  }

  const isCompleted = task.status === TaskStatus.COMPLETED;

  return (
    <div className={`${s.Task} ${disabled ? s.Task_disabled : ''} `}>
      <pre className={`${isCompleted ? s.Task_completed : ''}`}>
        {JSON.stringify(task, null, 2)}
      </pre>
      <label>
        <input type="checkbox" onChange={statusHandler} checked={isCompleted} />
        <span>{!isCompleted ? 'Сomplete' : 'Activate'}</span>
      </label>
      <button onClick={editHandler} type="button">Edit</button>
      <button onClick={removeHandler} type="button">Remove</button>
    </div>
  )
}