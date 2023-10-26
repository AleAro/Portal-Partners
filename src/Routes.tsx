import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes as R, Navigate } from 'react-router-dom';
import RegisterPage from '../src/components/RegisterPage';
import LoginPage from '../src/components/LoginPage';
import ResetPasswordPage from '../src/components/ResetPasswordPage';
import DashboardPage from './components/DashBoardPage';
import UserDetail from './components/UserDetail';

type UserType = {
    id: string;
    fecha: string;
    nombre: string;
    apellidos: string;
    numeroDeTelefono: string;
    email: string;
    testamento: boolean;
};

const RoutesComponent: React.FC = () => {
    const [dummyUsers, setDummyUsers] = useState<UserType[]>([
        { id: '1', fecha: '2023-01-01', nombre: 'Usuario 1', apellidos: 'Apellido 1', numeroDeTelefono: '1234567890', email: 'usuario1@example.com', testamento: true },
        { id: '2', fecha: '2023-01-02', nombre: 'Usuario 2', apellidos: 'Apellido 2', numeroDeTelefono: '1234567890', email: 'usuario2@example.com', testamento: false },
        { id: '3', fecha: '2023-01-03', nombre: 'Usuario 3', apellidos: 'Apellido 3', numeroDeTelefono: '1234567890', email: 'usuario3@example.com', testamento: true },
        { id: '4', fecha: '2023-01-04', nombre: 'Usuario 4', apellidos: 'Apellido 4', numeroDeTelefono: '1234567890', email: 'usuario4@example.com', testamento: true },
        { id: '5', fecha: '2023-01-05', nombre: 'Usuario 5', apellidos: 'Apellido 5', numeroDeTelefono: '1234567890', email: 'usuario5@example.com', testamento: false },
        { id: '6', fecha: '2023-01-06', nombre: 'Usuario 6', apellidos: 'Apellido 6', numeroDeTelefono: '1234567890', email: 'usuario6@example.com', testamento: true },
        { id: '7', fecha: '2023-01-07', nombre: 'Usuario 7', apellidos: 'Apellido 7', numeroDeTelefono: '1234567890', email: 'usuario7@example.com', testamento: true },
    ]);

    return (
      <Router>
        <R>
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/reset-password" element={<ResetPasswordPage />} /> 
          <Route path="/" element={<Navigate to="/register" replace />} />  
          <Route path="/dashboard/*" element={<DashboardPage dummyUsers={dummyUsers} />} />
        </R>
      </Router>
    );
};

export default RoutesComponent;
