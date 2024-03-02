import React from 'react';
//import PropTypes from 'prop-types';
import styles from './Item.module.scss';

const Item = ({task}) => (
  <li className={styles.Item}>
    <label>
      <input type="checkbox" name={`checkbox-${task.id}`} defaultChecked={task.completed}/>
      <span>{task.todo}</span>
    </label>
    <div className={styles.icons}>
      <i className="bi bi-trash"></i>
    </div>
  </li>
);

/*Item.propTypes = {};

Item.defaultProps = {};*/

export default Item;
