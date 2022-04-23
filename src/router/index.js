import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import Home from '../features/home';
import Login from '../features/login';
import Register from '../components/features/register';
import NotFound from '../features/not_found';

const Router = () => {
  return (
    <div>
      <BrowserRouter>
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
