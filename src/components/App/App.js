import { Outlet, Link, useLocation } from 'react-router-dom';
import styles from './App.module.scss';

const App = () => {

  const location = useLocation();

  return (
  <div className={styles.App}>
    <h1>Dashboard</h1>
    {location.pathname !== '/profile' && (
      <button>
        <Link to={'profile'}>Profile</Link>
      </button>
    )}
    <Outlet />
  </div>
)};

export default App;
