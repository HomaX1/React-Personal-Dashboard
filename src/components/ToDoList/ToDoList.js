import React, { useState } from 'react';
import styles from './ToDoList.module.scss';
import AddNewTask from '../AddNewTask/AddNewTask';
import Item from '../Item/Item';

const ToDoList = () => {
  const [tasks, setTasks] = useState([
    {
      completed: false,
      id: 1,
      todo: 'Take English language lessons',
    },
    {
      completed: false,
      id: 2,
      todo: 'Go to the gym',
    },
    {
      completed: true,
      id: 3,
      todo: 'Do something nice for someone I care about',
    },
    {
      completed: false,
      id: 4,
      todo: 'Invite some friends over for a game night',
    },
  ]);

  return (
  <div className={styles.ToDoList}>
    <AddNewTask />
    <ul>
      {tasks.map((task) => {
        return <Item task={task} key={task.id} />;
      })}
    </ul>
  </div>
)};

//Profile.defaultProps = {};

export default ToDoList;
