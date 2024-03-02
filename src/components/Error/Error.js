import React from 'react';
import { useRouteError } from 'react-router-dom';
import styles from './Error.module.scss';

const Error = ({ title, text}) => {
  const error = useRouteError();
  console.error(error);

  return (
    <div className={styles.Error}>
      <h2>{title}</h2>
      <p>{text}</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  )
};

Error.defaultProps = {
  title: 'Oops!',
  text: 'Sorry, an unexpected error has occurred.',
};

export default Error;
