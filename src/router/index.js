import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { ProtectedRoute } from './protected.route';

import EmailConfirm from '../pages/email_confirm';
import Home from '../pages/home';
import Login from '../pages/login';
import Map from '../pages/map';
import NotFound from '../pages/not_found';
import Register from '../pages/register';
import AboutUs from '../pages/about_us';
import Contact from '../pages/contact';
import AskEmail from '../pages/ask_email';
import ResetPassword from '../pages/reset_password';
import UserProfile from '../pages/user_profile';
import ConfirmDeleteAccount from '../pages/user_profile/confirm_delete_account';

const Router = () => {
  return (
    <div>
      <Routes>
        <Route index element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route exact path='/register' element={<Register />} />
        <Route exact path='/user_profile' element={<ProtectedRoute />}>
          <Route path='/user_profile' element={<UserProfile />} />
        </Route>
        <Route
          exact
          path='/confirm_delete_account'
          element={<ConfirmDeleteAccount />}
        />
        <Route path='/email_confirm' element={<EmailConfirm />} />
        <Route path='/map' element={<Map />} />
        <Route path='/about_us' element={<AboutUs />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/ask_email' element={<AskEmail />} />
        <Route path='/reset_password' element={<ResetPassword />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default Router;
