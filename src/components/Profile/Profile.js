import React from 'react';
import { Link } from 'react-router-dom';
//import PropTypes from 'prop-types';
import styles from './Profile.module.scss';

const Profile = () => (
  <div className={styles.Profile}>
    <button>
     <Link to={'/'}>To-do List</Link>
    </button>
    <h2>Profile Component</h2>
  </div>
);

/*Profile.propTypes = {};

Profile.defaultProps = {};*/

export default Profile;
