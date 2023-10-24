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
            <div style={{ flex: 1, padding: '6%', background: '#fff' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2%' }}>
                    <img src="/logo_r.png" alt="Logo" style={{ width: '180px', height: 'auto' }} />
                </div>
                <svg width="100%" height="1" style={{ marginBottom: '2%' }}>
                    <line x1="0" y1="1" x2="100%" y2="1" stroke="#d3d3d3" strokeWidth="2" />
                </svg>
                <div style={{ marginTop: '4vh' }}></div>
                <div
                    style={{
                        backgroundColor: '#F8F8F8',
                        borderRadius: '10px',
                        padding: '2%',
                        margin: '2vh 0',
                        marginBottom: '4vh',
                    }}
                >
                    <img src="/authentication.png" alt="Logo" style={{ width: '70px', height: 'auto', marginBottom: '0px' }} />
                    <h1 style={{ marginBottom: '2vh', fontSize: '2em' }}>Reestablecer contraseña</h1>
                    <div
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            marginBottom: '2vh',
                        }}
                    >
                        <label htmlFor="email" style={{ marginBottom: '1vh', fontWeight: 600 }}>
                            Correo
                        </label>
                        <input
                            type="email"
                            id="email"
                            placeholder="Ingresa tu email"
                            style={{
                                borderRadius: '10px',
                                width: '60%',
                                height: '30px',
                                marginBottom: '2vh',
                                backgroundColor: 'rgba(135, 143, 151, 0.3)',
                                border: 'none',
                                color: '#878F97',
                                padding: '10px',
                            }}
                        />
                        <label htmlFor="code" style={{ marginBottom: '1vh', fontWeight: 600 }}>
                            Código
                        </label>
                        <input
                            type="password"
                            id="code"
                            placeholder="Ingresa el código enviado a tu email"
                            style={{
                                borderRadius: '10px',
                                width: '60%',
                                height: '30px',
                                marginBottom: '2vh',
                                backgroundColor: 'rgba(135, 143, 151, 0.3)',
                                border: 'none',
                                color: '#878F97',
                                padding: '10px',
                            }}
                        />
                        <label htmlFor="newPassword" style={{ marginBottom: '1vh', fontWeight: 600 }}>
                            Contraseña
                        </label>
                        <input
                            type="password"
                            id="newPassword"
                            placeholder="Ingresa tu nueva contraseña"
                            style={{
                                borderRadius: '10px',
                                width: '60%',
                                height: '30px',
                                marginBottom: '2vh',
                                backgroundColor: 'rgba(135, 143, 151, 0.3)',
                                border: 'none',
                                color: '#878F97',
                                padding: '10px',
                            }}
                        />
                    </div>
                    <svg width="100%" height="1" style={{ marginBottom: '2%' }}>
                        <line x1="0" y1="1" x2="100%" y2="1" stroke="#d3d3d3" strokeWidth="2" />
                    </svg>
                    <button
                        style={{
                            backgroundColor: '#233161',
                            color: '#fff',
                            borderRadius: '50px',
                            padding: '10px 20px',
                            alignSelf: 'start',
                            margin: '2vh 0',
                            border: 'none',
                        }}
                        onClick={handleGoBack}
                    >
                        Reestablecer
                    </button>
                    <div style={{ marginTop: '4vh' }}></div>
                </div>
            </div>
        </div>
    );
};

export default ResetPasswordPage;
