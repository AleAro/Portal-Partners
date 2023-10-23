import React from 'react';
import { useNavigate } from 'react-router-dom';

const ResetPasswordPage: React.FC = () => {
    const navigate = useNavigate();  

  const handleGoBack = () => {
    navigate('/login');  
  };

    return (
        <div style={{ display: 'flex', height: '100vh' }}>
        <div style={{ flex: 1, background: 'url(/pastpostHome.webp) no-repeat center center', backgroundSize: 'cover' }} />
        <div style={{ flex: 1, padding: '20px', paddingLeft: '120px', paddingRight: '120px', background: '#fff' }}>  
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>  
                <img src="/logo_r.png" alt="Logo" style={{ width: '180px', height: 'auto' }} />
                
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
                    <h1 style={{ marginBottom: '20px' }}>Reestablecer contraseña</h1>  
                    <div style={{ display: 'flex', flexDirection: 'column', marginBottom: '20px' }}>  
                        <label htmlFor="email" style={{ marginBottom: '10px', fontWeight: 600 }}>Correo</label>  
                        <input type="email" id="email" placeholder="Ingresa tu email" style={{ borderRadius: '10px', width: '50%', height: '30px', marginBottom: '20px', backgroundColor: 'rgba(135, 143, 151, 0.3)', border: 'none', color: '#878F97', padding: '10px' }} />  {/* Increased vertical spacing */}
                        <label htmlFor="password" style={{ marginBottom: '10px', fontWeight: 600 }}>Código</label>  
                        <input type="password" id="password" placeholder="Ingresa el código enviado a tu email" style={{ borderRadius: '10px', width: '50%', height: '30px', marginBottom: '20px', backgroundColor: 'rgba(135, 143, 151, 0.3)', border: 'none', color: '#878F97', padding: '10px' }} />  {/* Increased vertical spacing */}
                        <label htmlFor="password" style={{ marginBottom: '10px', fontWeight: 600 }}>Contraseña</label>  
                        <input type="password" id="password" placeholder="Ingresa tu nueva contraseña" style={{ borderRadius: '10px', width: '50%', height: '30px', marginBottom: '20px', backgroundColor: 'rgba(135, 143, 151, 0.3)', border: 'none', color: '#878F97', padding: '10px' }} />  {/* Increased vertical spacing */}
                    </div>
                    <svg width="100%" height="1" style={{ marginBottom: '20px' }}> 
                        <line x1="0" y1="1" x2="100%" y2="1" stroke="#d3d3d3" strokeWidth="2" />
                    </svg>
                    <button style={{ backgroundColor: '#233161', color: '#fff', borderRadius: '50px', padding: '10px 20px', alignSelf: 'start', margin: '10px 0', border: 'none' }} onClick={handleGoBack} >Reestablecer </button>
                    <div style={{ marginTop: '140px' }}></div>
                </div>
            </div>
        </div>
    );
};

export default ResetPasswordPage;
