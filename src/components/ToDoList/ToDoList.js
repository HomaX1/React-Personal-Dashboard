import React, { useState } from 'react';
import styles from './ToDoList.module.scss';
import AddNewTask from '../AddNewTask/AddNewTask';
import Item from '../Item/Item';

const ToDoList = ({noTasksText}) => {
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
  const [taskName, setTaskName] = useState('');

  function handleCheckboxChecked(task) {
    const updatedTasks = tasks.map((item) => {
      if (item.id === task.id) {
        return {
          ...item,
          completed: !item.completed,
        };
      } else {
        return item;
      }
    })

    setTasks(updatedTasks);
  }

  function handleRemoveTask(task) {
    const filteredTasks = tasks.filter((item) => {
      return item.id !== task.id;
    })
    setTasks(filteredTasks);
  }

  function handleSetNewTask(e) {
    setTaskName(e.target.value);
  }

  function handleAddNewTask() {
    const taskId = Math.floor(Math.random() * 100);

    setTasks([
      ...tasks,
      {
        completed: false,
        id: taskId,
        todo: taskName,
      },
    ]);
    setTaskName('');
  }

  return (
    <div className={styles.ToDoList}>
      <AddNewTask taskName={taskName} handleSetNewTask={handleSetNewTask} handleAddNewTask={handleAddNewTask}/>
      <ul>
        {!tasks.length ? (
          <p>{noTasksText}</p>
        ) : (
          tasks.map((task) => {
            return <Item key={task.id} task={task} handleCheckboxChecked={() => handleCheckboxChecked(task)}
                         handleRemoveTask={() => handleRemoveTask(task)}/>;
          })
        )}
      </ul>
    </div>
)};

ToDoList.defaultProps = {
  noTasksText: 'There is no any tasks here!',
};

export default ToDoList;
