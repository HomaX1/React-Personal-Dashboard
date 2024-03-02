import React from 'react';
//import PropTypes from 'prop-types';
import styles from './AddNewTask.module.scss';

const AddNewTask = ({ inputName, placeholderName, buttonName }) => (
  <form className={styles.AddNewTask}>
    <input type="text" name={inputName} placeholder={placeholderName} />
    <button type="submit">{buttonName}</button>
  </form>
);

/*AddNewTask.propTypes = {
  inputName: PropTypes.string,
  placeholderName: PropTypes.string,
  buttonName: PropTypes.string,
};*/

AddNewTask.defaultProps = {
  inputName: 'add-new-task-field',
  placeholderName: 'Task name',
  buttonName: 'Add new task',
};

export default AddNewTask;
