import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const DashboardPage: React.FC = () => {
    const [selectedSection, setSelectedSection] = useState('Dashboard');
    const [isChevronDown, setIsChevronDown] = useState(true);
    const [menu, setMenu] = useState<'main' | 'signout' | null>(null);
    const navigate = useNavigate();

    const handleSidebarItemClick = (section: string) => {
        setSelectedSection(section);
    };

    const handleChevronClick = () => {
        setIsChevronDown(!isChevronDown);
        setMenu(menu => menu === null ? 'main' : null);
    };

    const handleSignOut = () => {
        navigate('/login'); 
    }

    const handleSignoutClick = () => {
        setMenu('signout');
    };

    const renderContent = () => {
        switch (selectedSection) {
            case 'Dashboard':
                return <div>Dashboard Contenido</div>;
            case 'Usuarios':
                return <div>Users Contenido</div>;
            case 'Crear usuarios':
                return <div>Crear usuarios Contenido</div>;
            default:
                return null;
        }
    };

   

    const SidebarItem = ({ section, iconSrc }: { section: string; iconSrc: string }) => (
        <div
            onClick={() => handleSidebarItemClick(section)}
            style={{
                display: 'flex',
                alignItems: 'center',
                marginBottom: '10px',
                padding: '10px',
                borderRadius: '5px',
                backgroundColor: selectedSection === section ? '#233161' : '#fff',
                color: selectedSection === section ? '#fff' : '#000',
                cursor: 'pointer',
            }}
        >
            <img src={iconSrc} alt={`${section} Icon`} style={{ marginRight: '10px', width: "25px" }} />
            {section}
        </div>
    );

    const BottomNavSection: React.FC = () => {
        return (
            <div style={{
                background: 'url(/blue_rectangle.png) no-repeat center center',
                backgroundSize: 'contain',
                padding: '50px',
                textAlign: 'center',
                marginBottom: '20px',  
            }}>
                <img
                    src="/app_logo.png"
                    alt="Square"
                    style={{
                        marginBottom: '15px',  
                        width: '40px',
                        height: 'auto',
                    }}
                />
                <div style={{ marginBottom: '15px', fontSize: '16px', color: '#fff' }}>Past Post</div>  
                <button
                    onClick={() => window.open('http://www.pastpost.com', '_blank')}
                    style={{
                        backgroundColor: '#fff',
                        color: '#000',
                        borderRadius: '15px',
                        padding: '10px 20px',  
                        border: 'none',
                        cursor: 'pointer',
                        fontSize: '16px', 
                    }}
                >
                    Ayuda
                </button>
            </div>
        );
    };
    
    

    return (
        <div style={{ display: 'flex', height: '100vh', backgroundColor: '#d3d3d3' }}>
            {/* Sidebar */}
            <div style={{ width: '250px', background: '#fff', padding: '20px', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', }}>
                <div>
                    <div style={{ marginBottom: '20px' }}> 
                        <img src="/logo_r.png" alt="Logo" style={{ width: '180px', height: 'auto', marginBottom: '6%', marginLeft: '6%' }} />
                    </div>
                    <SidebarItem section="Dashboard" iconSrc="/graph.png" />
                    <SidebarItem section="Usuarios" iconSrc="/people.png" />
                    <SidebarItem section="Crear usuarios" iconSrc="/assignment.png" />
                </div>
                <BottomNavSection /> 
            </div>

            {/* Main Content Area */}
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>  
                {/* App Bar */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: '#fff', padding: '10px 20px' }}>  
            <div style={{ fontSize: '24px', fontWeight: 'bold', color: '#223061' }}>
                {selectedSection}
            </div>
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <img src="/pp.png" alt="User Profile" style={{ marginRight: '10px' }} />
                <div style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }} onClick={handleChevronClick}>
                    <div>
                        <div style={{ lineHeight: '2' }}>Notaria 53</div>
                        <div style={{ fontSize: '12px', lineHeight: '1' }}>Admin</div>
                    </div>
                    {isChevronDown ? <span style={{ marginLeft: '10px', marginBottom: '15px' }}>▼</span> : <span style={{ marginLeft: '10px', marginBottom: '15px' }}>▲</span>}
                </div>

            {menu === 'main' && (
                <div style={{ background: 'rgba(255, 255, 255, 0.8)', padding: '10px', position: 'absolute', right: '20px', top: '60px' }}>
                    <div onClick={handleSignoutClick} style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                        <img src="/settings.png" alt="Settings" style={{ marginRight: '10px' }} />
                        Ajustes
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <img src="/logout.png" alt="Sign Out" style={{ marginRight: '10px' }} onClick={handleSignOut} />
                        Salir
                    </div>
                </div>
            )}

            {menu === 'signout' && (
                <div style={{ background: 'rgba(255, 255, 255, 0.8)', padding: '10px', position: 'absolute', right: '20px', top: '60px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }} >
                        <img src="/pp.png" alt="User Profile" style={{ marginRight: '10px' }} />
                        Notaria 53
                    </div>
                    <div style={{ fontSize: '12px', lineHeight: '1' }}>Admin</div>
                </div>
            )}
        </div>

                </div>

                
                <div style={{ flex: 1, padding: '20px', background: '#fafafa' }}>  
                    {renderContent()}
                </div>
            </div>
        </div>
    );
};

export default DashboardPage;
