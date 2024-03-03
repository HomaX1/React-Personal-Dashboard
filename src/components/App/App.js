import {Outlet} from 'react-router-dom';
import styles from './App.module.scss';
import Header from '../Header/Header';

const App = () => {
  return (
    <div className={styles.App}>
      <Header/>
      <Outlet/>
    </div>
  )
};

export default App;
