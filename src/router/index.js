import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import Home from '../pages/home';
import Login from '../pages/login';
import Register from '../pages/register';
import NotFound from '../pages/not_found';

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
