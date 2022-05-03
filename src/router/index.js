import React from 'react';
<<<<<<< HEAD
import { Routes, Route } from 'react-router-dom';

import Home from '../features/home';
import Login from '../features/login';
import Register from '../features/register';
import NotFound from '../components/features/not_found';
import EmailConfirm from '../components/features/email_confirm';
=======
import { Route, Routes } from 'react-router-dom';
import EmailConfirm from '../pages/email_confirm';
import Home from '../pages/home';
import Login from '../pages/login';
import NotFound from '../pages/not_found';
import Register from '../pages/register';

>>>>>>> feature-frontend-02

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
