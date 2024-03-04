import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import styles from './Profile.module.scss';
import Weather from '../Weather/Weather';

const Profile = ({buttonName, user, imageAlt, emailText, errorText, weatherText, appKey}) => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [weather, setWeather] = useState({});

  useEffect(() => {
    fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${user.city},${user.province},${user.country}&appid=${appKey}`)
      .then(response => response.json())
      .then(
        (coordinatedResult) => {
          setIsLoaded(true);
          const locationCoordinates = {
            latitude: coordinatedResult[0].lat,
            longitude: coordinatedResult[0].lon,
          }
          fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${locationCoordinates.latitude}&lon=${locationCoordinates.longitude}&units=metric&appid=${appKey}`)
            .then(response => response.json())
            .then((result) => {
              setIsLoaded(true);
              setWeather({
                temperature: Math.round(result.main.temp),
                feelsLike: Math.round(result.main.feels_like),
                icon: result.weather[0].icon,
                description: result.weather[0].description,
              });
            })
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, [])

  return (
    <div className={styles.Profile}>
      <Link to={'/'} className={`${styles.returnButton} button`}>
        <i className={`bi bi-arrow-left ${styles.icon}`}></i>
        <span>{buttonName}</span>
      </Link>
      <div className={styles.user}>
        <img className={styles.avatar} src={require('../../assets/portrait.jpg')} alt={imageAlt}/>
        <div className={styles.userInfo}>
          <p className={styles.name}>{user.firstName} {user.lastName}</p>
          <p>{emailText} {user.email}</p>
          {error ? <p>{errorText} {error.message}</p>
            : !isLoaded ? <p>{weatherText}</p>
              : <Weather city={user.city} currentWeather={weather}/>
          }
        </div>
      </div>
    </div>
  )
};

Profile.defaultProps = {
  buttonName: 'To-do List',
  user: {
    firstName: 'Naomi',
    lastName: 'Williams',
    email: 'nwilliams@gmail.com',
    city: 'Kitchener',
    province: 'Ontario',
    country: 'CA',
  },
  imageAlt: 'Profile avatar',
  emailText: 'Email:',
  errorText: 'Error:',
  weatherText: 'Weather is loading...',
  appKey: '975a04e12bae62c45a3c34ef4d7de316', //This was done on purpose to facilitate the launch of the project. In a real situation, this is a leak of secret data and is unacceptable.
};

export default Profile;
