import React from 'react';
import TodoEditor from '../TodoEditor';
import Filter from '../Filter';
import TodoList from '../TodoList';

import s from './App.module.scss';

export const App = () => (
  <div className={s.App}>
    <div className={s.App__editor}>
      <TodoEditor />
    </div>
    <div className={s.App__content}>
      <TodoList />
    </div>
    <div className={s.App__filter}>
      <Filter />
    </div>
  </div>
);