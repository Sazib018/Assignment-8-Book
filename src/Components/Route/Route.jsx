import { createBrowserRouter } from 'react-router-dom';
import App from '../../App';
import Home from '../Page/Home/Home';
import BookDetails from '../Page/Books/BookDetails';
import ListedBooks from '../Page/Books/ListedBooks';
import NotFound from '../Page/NotFound/NotFound';

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
      path: '/learning',
      element: <NotFound/>,
     },
     {
      path: '/reading',
      element: <NotFound/>,
     },
    
     {
      path: '/book/:bookId',
      element: <BookDetails></BookDetails>,
      loader: ()=> fetch("booksData.json") 
     },
     {
      path: '/Listed Books',
      element:<ListedBooks></ListedBooks> ,
      loader: ()=> fetch("booksData.json") 
     },
     {
      path: '*',
      element: <NotFound/>,
     },
    
      ]
    },
    
  ]);