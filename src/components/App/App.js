import {Outlet} from 'react-router-dom';
import Header from '../Header/Header';

const App = () => {
  return (
    <div>
      <Header/>
      <Outlet/>
    </div>
  )
};

export default App;
