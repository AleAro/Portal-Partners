import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const LoginPage: React.FC = () => {

    const navigate = useNavigate(); 
    const [isPasswordVisible, setIsPasswordVisible] = useState(false); 

  const handleCreateAccountClick = () => {
    navigate('/register');  
  };

  const handleForgotPasswordClick = () => {
    navigate('/reset-password');  
};

const togglePasswordVisibility = () => { 
    setIsPasswordVisible(prevState => !prevState);
};

    return (
        <div style={{ display: 'flex', height: '100vh' }}>
        <div style={{ flex: 1, background: 'url(/pastpostHome.webp) no-repeat center center', backgroundSize: 'cover' }} />
        <div style={{ flex: 1, padding: '20px', paddingLeft: '120px', paddingRight: '120px', background: '#fff' }}>  
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>  
                <img src="/logo_r.png" alt="Logo" style={{ width: '180px', height: 'auto' }} />
                <button style={{ backgroundColor: '#233161', color: '#fff', borderRadius: '50px', padding: '10px 20px', border: 'none' }} onClick={handleCreateAccountClick} >Crear cuenta</button>
            </div>
            <svg width="100%" height="1" style={{ marginBottom: '20px' }}> 
                <line x1="0" y1="1" x2="100%" y2="1" stroke="#d3d3d3" strokeWidth="2" />
            </svg>  
            <div style={{ marginTop: '140px' }}></div>
            <div style={{
                backgroundColor: '#F8F8F8',
                borderRadius: '10px',
                padding: '20px',
                margin: '20px 0',  
                marginBottom: '40px'  
            }}>
                    <img src="/authentication.png" alt="Logo" style={{ width: '70px', height: 'auto', marginBottom: '0px' }} /> 
                    <h1 style={{ marginBottom: '20px' }}>Partner Portal</h1>  
                    <div style={{ display: 'flex', flexDirection: 'column', marginBottom: '20px', position: 'relative' }}>  
                        <label htmlFor="email" style={{ marginBottom: '10px', fontWeight: 600 }}>Correo</label>  
                        <input type="email" id="email" placeholder="Ingresa tu email" style={{ borderRadius: '10px', width: '50%', height: '30px', marginBottom: '20px', backgroundColor: 'rgba(135, 143, 151, 0.3)', border: 'none', color: '#878F97', padding: '10px' }} />  {/* Increased vertical spacing */}
                        <label htmlFor="password" style={{ marginBottom: '10px', fontWeight: 600 }}>Contraseña</label>  
                        <input 
                        type={isPasswordVisible ? 'text' : 'password'} 
                        id="password" 
                        placeholder="Ingresa tu contraseña" 
                        style={{ 
                            borderRadius: '10px', 
                            width: 'calc(50% - 30px)', 
                            height: '30px', 
                            marginBottom: '20px', 
                            backgroundColor: 'rgba(135, 143, 151, 0.3)', 
                            border: 'none', 
                            color: '#878F97', 
                            padding: '10px',
                            paddingRight: '40px'
                        }} 
                    />
                    <svg 
                        onClick={togglePasswordVisibility} 
                        style={{ 
                            position: 'absolute', 
                            right: 'calc(51% - 20px)', 
                            top: 'calc(61% + 10px)', 
                            cursor: 'pointer'
                        }} 
                        width="24" 
                        height="24" 
                        fill="none"
                    >
                        {isPasswordVisible ? (
                            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8zM12 15a3 3 0 100-6 3 3 0 000 6z" fill="#233161"/>
                        ) : (
                            <g fill="#233161">
                                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8zM12 15a3 3 0 100-6 3 3 0 000 6z"/>
                                <path d="M14.12 14.12l-4.24-4.24M9.88 14.12l4.24-4.24" stroke="#233161" strokeWidth="2"/>
                            </g>
                        )}
                    </svg>
                    <button 
                        style={{ 
                            backgroundColor: 'transparent', 
                            border: 'none', 
                            textAlign: 'left', 
                            padding: '0', 
                            margin: '0', 
                            color: '#233161', 
                            cursor: 'pointer' 
                        }} 
                        onClick={handleForgotPasswordClick}
                    >
                        Olvidé mi contraseña
                    </button>
                </div>
                    <svg width="100%" height="1" style={{ marginBottom: '20px' }}> 
                        <line x1="0" y1="1" x2="100%" y2="1" stroke="#d3d3d3" strokeWidth="2" />
                    </svg>
                    <button style={{ backgroundColor: '#233161', color: '#fff', borderRadius: '50px', padding: '10px 20px', alignSelf: 'start', margin: '10px 0', border: 'none' }}>Ingresar</button>
                    <div style={{ marginTop: '140px' }}></div>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
