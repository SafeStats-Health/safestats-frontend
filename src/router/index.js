import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from '../pages/home';
import Login from '../pages/login';
import Register from '../pages/register';
import NotFound from '../pages/not_found';
import EmailConfirm from '../pages/email_confirm';

const Router = () => {
  return (
    <div>
      <Routes>
        <Route index element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/email_confirm' element={<EmailConfirm />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default Router;
