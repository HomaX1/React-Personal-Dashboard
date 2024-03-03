import React from 'react';
import styles from './AddNewTask.module.scss';

const AddNewTask = ({inputName, placeholderName, buttonName, taskName, handleSetNewTask, handleAddNewTask}) => (
  <form className={styles.AddNewTask}>
    <input type="text" name={inputName} placeholder={placeholderName} value={taskName} onChange={handleSetNewTask}/>
    <button type="button" disabled={!taskName.length} onClick={handleAddNewTask}>{buttonName}</button>
  </form>
);

AddNewTask.defaultProps = {
  inputName: 'new-task',
  placeholderName: 'Task name',
  buttonName: 'Add new task',
};

export default AddNewTask;
