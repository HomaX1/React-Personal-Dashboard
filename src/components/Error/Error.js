import React from 'react';
import {Link, useRouteError} from 'react-router-dom';
import styles from './Error.module.scss';

const Error = ({title, text, buttonName}) => {
  const error = useRouteError();
  console.error(error);

  return (
    <div className={styles.Error}>
      <h2 className={styles.title}>{title}</h2>
      <p>{text}</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
      <Link to={'/'} className="button">
        <span>{buttonName}</span>
      </Link>
    </div>
  )
};

Error.defaultProps = {
  title: 'Oops!',
  text: 'Sorry, an unexpected error has occurred.',
  buttonName: 'Return to Main page',
};

export default Error;
