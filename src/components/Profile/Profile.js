import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import styles from './Profile.module.scss';
import Weather from '../Weather/Weather';

const Profile = ({buttonName, user, imageAlt, appKey}) => {
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
      <Link to={'/'}>
        <i className="bi bi-arrow-left"></i>
        <span>{buttonName}</span>
      </Link>
      <div>
        <img className={styles.avatar} src={require('../../assets/portrait.jpg')} alt={imageAlt}/>
        <div className={styles.userInfo}>
          <p>{user.firstName} {user.lastName}</p>
          <p>{user.email}</p>
          <p>{user.city}</p>
          {error ? <p>Error: {error.message}</p>
            : !isLoaded ? <p>Weather are loaded...</p>
              : <Weather currentWeather={weather}/>
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
  appKey: '975a04e12bae62c45a3c34ef4d7de316',
};

export default Profile;
