import React from 'react';
import { Route, Routes } from 'react-router-dom';
import EmailConfirm from '../pages/email_confirm';
import Home from '../pages/home';
import Login from '../pages/login';
import Map from '../pages/map';
import NotFound from '../pages/not_found';
import Register from '../pages/register';
import AboutUs from '../pages/about_us';
import Contact from '../pages/contact';
import UserProfile from '../pages/user_profile';

const Router = () => {
  return (
    <div>
      <Routes>
        <Route index element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/email_confirm' element={<EmailConfirm />} />
        <Route path='/user_profile' element={<UserProfile />} />
        <Route path='/map' element={<Map />} />
        <Route path='/about_us' element={<AboutUs />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default Router;
