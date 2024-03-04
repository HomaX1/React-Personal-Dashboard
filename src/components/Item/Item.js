import React from 'react';
import styles from './Item.module.scss';

const Item = ({task, handleCheckboxChecked, handleRemoveTask}) => {
  return (
    <li className={styles.Item}>
      <label className={styles.label}>
        <input className={styles.checkbox} type="checkbox" name={`checkbox-${task.id}`} checked={task.completed}
               onChange={handleCheckboxChecked}/>
        <div className={styles.checkmark}>
          <i className={`bi bi-check ${styles.checkboxTick}`}></i>
        </div>
        <span>{task.todo}</span>
      </label>
      <div className={styles.icons}>
        <i className="bi bi-trash" onClick={handleRemoveTask}></i>
      </div>
    </li>
  )
};

export default Item;
