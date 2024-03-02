import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import styles from './Profile.module.scss';

const Profile = ({ buttonName, imageAlt}) => {
  const [user, setUser] = useState({
    firstName: 'Naomi',
    lastName: 'Williams',
    email: 'nwilliams@gmail.com',
    city: 'Kitchener',
    province: 'ON',
  });

  return (
    <div className={styles.Profile}>
      <Link to={'/'}>
        <i className="bi bi-arrow-left"></i>
        <span>{buttonName}</span>
      </Link>
      <div>
        <img className={styles.avatar} src={require('../../assets/portrait.jpg')} alt={imageAlt}/>
        <div className={styles.userInfo}>
          <p>{user.firstName + ' ' + user.lastName}</p>
          <p>{user.email}</p>
          <p>{user.city + ', ' + user.province}</p>
        </div>
      </div>
    </div>
  )
};

Profile.defaultProps = {
  buttonName: 'To-do List',
  imageAlt: 'Profile avatar',
};

export default Profile;
