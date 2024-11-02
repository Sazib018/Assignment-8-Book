import { createBrowserRouter } from 'react-router-dom';
import App from '../../App';
import Home from '../Page/Home/Home';


export const route = createBrowserRouter([
    {
      path: '/',
      element: <App />,
    },
    {
      path: '/',
      element: <Home />,
    },
  ]);