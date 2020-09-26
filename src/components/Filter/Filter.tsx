import React from 'react';
import s from './Filter.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { enumHelper } from '../../helpers/enumHelper';
import { TaskStatus } from '../../types/task';
import { setFilter } from '../../redux/actions/todoActions';
import { RootState } from '../../redux/reducers/rootReducer';

type TaskStatusStrings = keyof typeof TaskStatus;

export const Filter: React.FC = () => {
  const dispatch = useDispatch();
  const filter = useSelector<RootState, TaskStatus>(state => state.todo.filter);

  const filterHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    const target = (e.target as HTMLButtonElement);
    const status = target.dataset.status as TaskStatusStrings;
    dispatch(setFilter(TaskStatus[status] ?? 0));
  }

  return (
    <>
      <button onClick={filterHandler} disabled={filter === 0} type="button">all</button>
      {
        enumHelper.map(TaskStatus, (status, key) => {
          const disabled: boolean = filter === key;
          return (
            <button key={key} data-status={status} disabled={disabled} onClick={filterHandler} type="button">{status}</button>
          );
        })
      }
    </>
  )
}