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
import AdminDashBoard from './AdminDashBoard';
import NewCustomerForm from './NewForm';
import UpdateForm from './UpdateForm';
import Report from './Report';
import PayPage from './PayPage';

function App() {
  return (
    <Router>
      <Layout />
    </Router>
  );
}

function Layout() {
  const location = useLocation();

  const hideNavbarRoutes = ['/user-dashboard','/admin-dashboard',"/new-form","/update-form","/report",'/paypage'];

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
        <Route path="/admin-dashboard" element={<AdminDashBoard />} />
        <Route path="/new-form" element={<NewCustomerForm />} />
        <Route path="/update-form" element={<UpdateForm />} />
        <Route path="/report" element={<Report/>} />
        <Route path="/paypage" element={<PayPage/>} />
      </Routes>
    </>
  );
}

export default App;
