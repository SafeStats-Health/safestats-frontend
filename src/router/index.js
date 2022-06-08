import React from 'react';
import {Route, Routes, BrowserRouter} from 'react-router-dom';
import EmailConfirm from '../pages/email_confirm';
import Home from '../pages/home';
import Login from '../pages/login';
import Map from '../pages/map';
import NotFound from '../pages/not_found';
import Register from '../pages/register';
import AboutUs from '../pages/about_us';
import Contact from '../pages/contact';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/email_confirm' element={<EmailConfirm/>}/>
        <Route path='/map' element={<Map/>}/>
        {/* <ProtectedRoute path={"/example"} element={<Home/>}/> */}
        <Route path='/about_us' element={<AboutUs/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
