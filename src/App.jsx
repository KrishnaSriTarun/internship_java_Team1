// eslint-disable-next-line no-unused-vars
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import "./Login.css";
import Network from './Network';
import ProviderAccount from './ProviderAccount';
import ProviderLogin from './ProviderLogin';
import UserAccount from './UserAccount';
import UserLogin from './UserLogin';
import Navbar from './Navbar';

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Network />} />
        <Route path="/provider-login" element={<ProviderLogin />} />
        <Route path="/provider-account" element={<ProviderAccount />} />
        <Route path="/user-login" element={<UserLogin />} />
        <Route path="/user-account" element={<UserAccount />} />
      </Routes>
    </Router>
  );
}

export default App;
