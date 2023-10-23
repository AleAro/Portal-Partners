import React from 'react';
import { BrowserRouter as Router, Route, Routes as R, Navigate } from 'react-router-dom';  // Import Navigate here
import RegisterPage from '../src/components/RegisterPage';
import LoginPage from '../src/components/LoginPage';  
import ResetPasswordPage from '../src/components/ResetPasswordPage';

const RoutesComponent: React.FC = () => {
    return (
      <Router>
        <R>
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/reset-password" element={<ResetPasswordPage />} /> 
          <Route path="/" element={<Navigate to="/register" replace />} />  

        </R>
      </Router>
    );
};

export default RoutesComponent;
