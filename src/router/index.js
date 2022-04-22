import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import Home from '../features/home';
import Login from '../features/login';
import Register from '../features/register';
import NotFound from '../features/not_found';

const Router = () => {
  return (
    <div>
      <BrowserRouter>
        <Link to='/'>Home</Link>
        <Link to='/login'>Login</Link>
        <Link to='/register'>Register</Link>
        <Routes>
          <Route index element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Router;
