import React from 'react';
import {Link, useLocation} from 'react-router-dom';
import styles from './Header.module.scss';

const Header = ({title, buttonName}) => {
  const location = useLocation();

  return (
    <div className={styles.Header}>
      <h1>{title}</h1>
      {location.pathname !== '/profile' && (
        <Link to={'profile'}>
          <i className="bi bi-person-fill"></i>
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
