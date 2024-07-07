import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider, Route, Link } from 'react-router-dom';
import App from './App.jsx';
import './index.css'
import SharedLayout from './Components/SharedLayout.jsx';
import About from './Components/About.jsx'; // Ensure you have this component
import Login from './Components/Login'
import CocktailProvider from './App/CocktailProvider.jsx';
import SingleCocktail from './Components/SingleCocktail.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <SharedLayout />,
    children: [
      {
        index: true, // This makes <App /> the default child component for /
        element: <App />,
      },
      {
        path: 'about',
        element: <About />,
      },
      {
        path: 'cocktail/:id',
        element: <SingleCocktail/>,
      },
      {
        path:'*',
        element: <div style={{'textAlign':'center'}}>
          <br/><br/>
          <h3>Oops!! You have reached to Dead End</h3>
          <button><Link to='/'>Home Page</Link></button>
        </div>
      }
    ]
  },
  
  
]);
ReactDOM.createRoot(document.getElementById('root')).render(
<CocktailProvider>  
<RouterProvider router={router}>

  <App />


 </ RouterProvider >
 </CocktailProvider>    

);
