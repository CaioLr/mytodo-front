// import React from 'react';
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import Home from './pages/home';
import Login from './pages/login';
import Register from './pages/register';



const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route index element={<Login />} />
      <Route path="home" element={<Home />} />
      <Route path="register" element={<Register />} />
    </>
  )
)

function App() {

  return (
    <>
      <RouterProvider router={router}/>
    </>
  );
}

export default App;
