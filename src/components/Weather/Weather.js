import React from 'react';
import styles from './Weather.module.scss';

const Weather = ({city, currentWeather, text}) => {
  return (
    <div className={styles.Weather}>
      <div>
        <p>{city} {currentWeather.temperature} &#8451;</p>
        <p>{text} {currentWeather.feelsLike} &#8451;</p>
      </div>
      <img className={styles.image} src={`https://openweathermap.org/img/wn/${currentWeather.icon}.png`}
           alt={currentWeather.description}/>
      <p className={styles.text}>{currentWeather.description}</p>
    </div>
  )
};

Weather.defaultProps = {
  text: 'Feels like:',
};

export default Weather;
