import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from '../features/home';
import Login from '../features/login';
import Register from '../features/register';
import NotFound from '../components/features/not_found';

const Router = () => {
  return (
    <div>
      <Routes>
        <Route index element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default Router;
