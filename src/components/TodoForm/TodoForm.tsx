import React, { useEffect, useRef, FormEvent } from 'react';
import s from './TodoForm.module.scss';
import { useBind } from '../../hooks/useBind';
import { ITask, TaskStatus, EditableTask } from '../../types/task';

type TodoFormProps = {
  onSubmit: (task: ITask) => void,
  onCancel: () => void,
  task?: EditableTask
}

const initialTask: ITask = {
  id: 0,
  status: TaskStatus.ACTIVE,
  title: '',
  description: ''
}

export const TodoForm: React.FC<TodoFormProps> = ({ onSubmit, onCancel, task = null }) => {

  const currentTask = task ?? initialTask;

  const [bindTitle, title, setTitle] = useBind(currentTask.title);
  const [bindDescription, description, setDescription] = useBind(currentTask.description);

  const titleRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    setTitle(task?.title ?? '');
    setDescription(task?.description ?? '');
    if (task) titleRef.current?.focus();
  }, [task]);

  const clearEditor = () => {
    setTitle('');
    setDescription('');
  }

  const submitHandler = (e: FormEvent) => {
    e.preventDefault();
    onSubmit({
      ...currentTask,
      title: title.trim(),
      description: description.trim()
    });
    clearEditor();
    titleRef.current?.focus();
  }

  const cancelHandler = () => {
    clearEditor();
    onCancel();
  }

  return (
    <div className={s.TodoForm}>
      <form onSubmit={submitHandler}>
        <label className={s.TodoForm__group}>
          <span>Title*</span>
          <input
            ref={titleRef}
            className={s.TodoForm__input}
            type="text"
            placeholder="Enter task title..."
            {...bindTitle}
          />
        </label>
        <label className={s.TodoForm__group}>
          <span>Description</span>
          <textarea
            className={s.TodoForm__input}
            placeholder="Enter task description..."
            {...bindDescription}
          />
        </label>
        <div className={s.TodoForm__group}>
          <button type="submit" disabled={!title.trim().length}>{task ? 'Edit' : 'Add'}</button>
          {
            task
              ? <button type="button" onClick={cancelHandler}>Cancel</button>
              : ''
          }
        </div>
      </form>
    </div>
  )
}