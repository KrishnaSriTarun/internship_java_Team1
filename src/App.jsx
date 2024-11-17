// eslint-disable-next-line no-unused-vars
import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import './App.css';
import "./Login.css";
import Network from './Network';
import ProviderAccount from './ProviderAccount';
import ProviderLogin from './ProviderLogin';
import UserAccount from './UserAccount';
import UserLogin from './UserLogin';
import Navbar from './Navbar';
import UserDashBoard from './UserDashBoard';

function App() {
  return (
    <Router>
      <Layout />
    </Router>
  );
}

function Layout() {
  const location = useLocation();

  // List of routes where Navbar should not be displayed
  const hideNavbarRoutes = ['/user-dashboard'];

  return (
    <>
      {!hideNavbarRoutes.includes(location.pathname) && <Navbar />}
      <Routes>
        <Route path="/" element={<Network />} />
        <Route path="/provider-login" element={<ProviderLogin />} />
        <Route path="/provider-account" element={<ProviderAccount />} />
        <Route path="/user-login" element={<UserLogin />} />
        <Route path="/user-account" element={<UserAccount />} />
        <Route path="/user-dashboard" element={<UserDashBoard />} />
      </Routes>
    </>
  );
}

export default App;
