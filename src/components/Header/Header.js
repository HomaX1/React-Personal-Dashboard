import React from 'react';
import {Link, useLocation} from 'react-router-dom';
import styles from './Header.module.scss';

const Header = ({title, buttonName}) => {
  const location = useLocation();

  return (
    <div className={styles.Header}>
      <h1 className={styles.title}>{title}</h1>
      {location.pathname !== '/profile' && (
        <Link to={'profile'} className={styles.link}>
          <i className={`bi bi-person-fill ${styles.icon}`}></i>
          <span>{buttonName}</span>
        </Link>
      )}
    </div>
  )
};

Header.defaultProps = {
  title: 'Dashboard',
  buttonName: 'Profile',
};

export default Header;
