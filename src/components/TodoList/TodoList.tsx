import React from 'react';
import s from './TodoList.module.scss';
import Task from '../Task';
import { RootState } from '../../redux/reducers/rootReducer';
import { TodoState } from '../../redux/reducers/todoReducer';
import { useSelector } from 'react-redux';

export const TodoList: React.FC = () => {
  const { list, editableTask, filter } = useSelector<RootState, TodoState>(state => state.todo);
  return (
    <ul style={{ listStyle: 'none' }}>
      {
        list.map(task => {
          if (!filter || filter === task.status)
            return (
              <li key={task.id}>
                <Task
                  task={task}
                  disabled={editableTask && editableTask.id === task.id}
                />
              </li>
            );
        })
      }
    </ul>
  )
}