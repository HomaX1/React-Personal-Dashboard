import React from 'react';
import styles from './Weather.module.scss';

const Weather = ({currentWeather, text}) => {
  return (
    <div className={styles.Weather}>
      <div>
        <div>
          <img src={`https://openweathermap.org/img/wn/${currentWeather.icon}.png`} alt={currentWeather.description}/>
          <p>{currentWeather.description}</p>
        </div>
        <span>{currentWeather.temperature} &#8451;</span>
      </div>
      <p>{text} {currentWeather.feelsLike} &#8451;</p>
    </div>
  )
};

Weather.defaultProps = {
  text: 'Feels like:',
};

export default Weather;
