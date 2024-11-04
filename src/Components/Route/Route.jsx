import { createBrowserRouter } from 'react-router-dom';
import App from '../../App';
import Home from '../Page/Home/Home';
import BookDetails from '../Page/Books/BookDetails';




export const route = createBrowserRouter([
    {
      path: '/',
      element: <App />,
      children:[
     {
      path: '/',
      element: <Home/>,
    
     },
     {
      path: '/book/:bookId',
      element: <BookDetails></BookDetails>,
      loader: ()=> fetch("booksData.json") 
     },
    
      ]
    },
    
  ]);