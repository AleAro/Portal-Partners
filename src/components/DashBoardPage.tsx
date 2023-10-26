import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import UserDetail from './UserDetail';


type UserType = {
    id: string;
    fecha: string;
    nombre: string;
    apellidos: string;
    numeroDeTelefono: string;
    email: string;
    testamento: boolean;
};


interface DashboardPageProps {
    dummyUsers: UserType[];
}




const DashboardPage: React.FC<DashboardPageProps> = ({ dummyUsers }) => {
    const [selectedUserId, setSelectedUserId] = useState<string | null>(null);
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

 

    const dummyUserss: UserType[] = [
        { id: '1', fecha: '2023-01-01', nombre: 'Usuario 1', apellidos: 'Apellido 1', numeroDeTelefono: '1234567890', email: 'usuario1@example.com', testamento: true },
        { id: '2', fecha: '2023-01-02', nombre: 'Usuario 2', apellidos: 'Apellido 2', numeroDeTelefono: '1234567890', email: 'usuario2@example.com', testamento: false },
        { id: '3', fecha: '2023-01-03', nombre: 'Usuario 3', apellidos: 'Apellido 3', numeroDeTelefono: '1234567890', email: 'usuario3@example.com', testamento: true },
        { id: '4', fecha: '2023-01-04', nombre: 'Usuario 4', apellidos: 'Apellido 4', numeroDeTelefono: '1234567890', email: 'usuario4@example.com', testamento: true },
        { id: '5', fecha: '2023-01-05', nombre: 'Usuario 5', apellidos: 'Apellido 5', numeroDeTelefono: '1234567890', email: 'usuario5@example.com', testamento: false },
        { id: '6', fecha: '2023-01-06', nombre: 'Usuario 6', apellidos: 'Apellido 6', numeroDeTelefono: '1234567890', email: 'usuario6@example.com', testamento: true },
        { id: '7', fecha: '2023-01-07', nombre: 'Usuario 7', apellidos: 'Apellido 7', numeroDeTelefono: '1234567890', email: 'usuario7@example.com', testamento: true },
    ];
       
   
    

    const renderContent = () => {
        switch (selectedSection) {
            case 'Dashboard':
                return (
                    <div style={dashboardContainerStyle}>
                        <div style={dashboardHeaderStyle}>
                            <div style={dashboardTitleStyle}>Usuarios</div>
                            <button style={dashboardButtonStyle} onClick={() => setSelectedSection('Crear usuarios')}>+</button>
                        </div>
                        {dummyUsers.map(user => (
                            <DashboardUserRow user={user} key={user.id} />
                        ))}
                    </div>
                );
            case 'Usuarios':
                return (
                    <div style={userListContainerStyle}>
                        <div style={userListHeaderStyle}>
                        <div style={fieldStyle}>ID Usuario</div>
    <div style={fieldStyle}>Fecha</div>
    <div style={fieldStyle}>Nombre</div>
    <div style={fieldStyle}>Apellidos</div>
    <div style={fieldStyle}>Numero de Telefono</div>
    <div style={fieldStyle}>Email</div>
    <div style={fieldStyle}>Testamento</div>
                        </div>
                        {dummyUsers.map((user, index) => (
                            <React.Fragment key={user.id}>
                                <UserRow user={user} />
                                {index < dummyUsers.length - 1 &&  <div style={dividerStyle}></div>}  
                            </React.Fragment>
                        ))}
                    </div>
                );
            case 'Crear usuarios':
                return (
                    <div style={formContainerStyle}>
                        <h2 style={titleStyle}>Detalles del usuario</h2>
                        <p style={descriptionStyle}>Por favor, llene los siguientes campos para crear un nuevo usuario</p>
                       
                        <form>
                        {formFields.map(field => (
                            <div key={field.label} style={fieldContainerStyle}>
                                <label style={labelStyle}>{field.label}</label>
                                {field.type === 'button' ? (
                                    <div style={buttonContainerStyle}>
                                        <button style={buttonStyle}>{field.icon}</button>
                                    </div>
                                ) : (
                                    <input type={field.type} style={textFieldStyle} />
                                )}
                            </div>
                        ))}
                    </form>
                    </div>
                );
                case 'Detalle de usuario':
                    if (!selectedUserId) {
                        return null;
                    }
                    const userDetailProps = {
                        dummyUsers: dummyUsers,
                        userId: selectedUserId,
                    };
                    return (
                        <UserDetail {...userDetailProps} />
                    );
            default:
                return null;
        }
    };

    const DashboardUserRow: React.FC<{ user: UserType }> = ({ user }) => {
        return (
            <div style={dashboardUserRowStyle}>
                <div style={{ ...dashboardFieldStyle }}>{user.id}</div>
                <div style={dashboardFieldStyle}>{user.nombre}</div>
            </div>
        );
    };

    const dashboardContainerStyle: React.CSSProperties = {
        backgroundColor: '#fff',
        borderRadius: '10px',
        padding: '20px',
        margin: '20px',
        width: '25%', 
    };
    
    const dashboardHeaderStyle: React.CSSProperties = {
        display: 'flex',
        //justifyContent: 'space-between',
        marginBottom: '10px',
        color: '#233161',  
    };
    
    const dashboardTitleStyle: React.CSSProperties = {
        fontSize: '24px',
        fontWeight: 'bold',
        display: 'flex',
        alignItems: 'center',  
    };

     
    const buttonStyle = {
        backgroundColor: '#28a745',  
        border: 'none',  
        borderRadius: '8px',  
        color: '#fff',  
        cursor: 'pointer',  
        fontSize: '24px',  
        height: '30px',  
        width: '30px',  
        
    };
    
    
    const dashboardButtonStyle: React.CSSProperties = {
        backgroundColor: '#28a745',
        border: 'none',
        borderRadius: '8px',
        color: '#fff',
        cursor: 'pointer',
        fontSize: '24px',
        height: '30px',
        width: '30px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: '10px',
    };
    const dashboardUserRowStyle: React.CSSProperties = {
        display: 'flex',
        justifyContent: 'space-between',
        padding: '10px',
        borderBottom: '1px solid #d3d3d3',  
    };
    
    const dashboardFieldStyle: React.CSSProperties = {
        flex: 1,
        textAlign: 'left',
    };
    

    const buttonContainerStyle = {
        backgroundColor: '#fff', 
       // border: '1px solid #d3d3d3',  
        borderRadius: '4px',  
        display: 'flex',  
        justifyContent: 'center',  
        alignItems: 'center',  
        height: '40px',
        //width: '100vw'
       
    };
   
    
    const formContainerStyle = {
        backgroundColor: '#fff',
        borderRadius: '10px',
        padding: '20px',
        margin: '20px',
       
    };
    
    const titleStyle = {
        color: '#233161',
        fontSize: '24px',
        marginBottom: '10px',
    };
    
    const descriptionStyle = {
        color: '#233161',
        marginBottom: '20px',
    };
    
    const dividerStyle = {
        height: '1px',
        backgroundColor: '#d3d3d3',
        marginBottom: '20px',
    };
    
    const fieldContainerStyle = {
        marginBottom: '20px',
        marginRight: '20px',
       
    };
    
    const labelStyle = {
        display: 'block',
        marginBottom: '5px',
        fontSize: '14px',
        color: '#233161',
        fontWeight: 'bold',
    };
    
    const textFieldStyle = {
        width: '100%',
        padding: '10px',
        borderRadius: '4px',
        border: '1px solid #d3d3d3',
        
    };
    
    const formFields = [
        { label: 'Nombre', type: 'text' },
        { label: 'Apellidos', type: 'text' },
        { label: 'Numero de telefono', type: 'tel' },
        { label: 'Email', type: 'email' },
        { label: 'Fecha', type: 'date' },
        { label: 'Testamento', type: 'button', icon: '+' },
        { label: 'Identificación', type: 'button', icon: '+' },
    ];
    
   

    
    const userRowStyle: React.CSSProperties = {
        display: 'flex',
        justifyContent: 'space-between',
        padding: '10px',
    };
    
    const fieldStyle: React.CSSProperties = {
        flex: 1,
        textAlign: 'left',
    };

    const userListContainerStyle: React.CSSProperties = {
        backgroundColor: '#fff',
        borderRadius: '10px',
        padding: '20px',
        margin: '20px',
    };
    
    const userListHeaderStyle: React.CSSProperties = {
        display: 'flex',
        justifyContent: 'space-between',
        padding: '10px',
        borderBottom: '2px solid #d3d3d3',
        marginBottom: '10px',
    };

    
    
    
    
    const UserRow: React.FC<{ user: UserType }> = ({ user }) => {
        const navigate = useNavigate();
        const handleUserIdClick = () => {
            setSelectedSection('Detalle de usuario');  
            setSelectedUserId(user.id);  // Update this line
        };
        
        return (
            <div style={userRowStyle}>
            <div style={{ ...fieldStyle, color: 'blue' }} onClick={handleUserIdClick} className="user-id">{user.id}</div>
            <div style={fieldStyle}>{user.fecha}</div>
            <div style={fieldStyle}>{user.nombre}</div>
            <div style={fieldStyle}>{user.apellidos}</div>
            <div style={fieldStyle}>{user.numeroDeTelefono}</div>
            <div style={fieldStyle}>{user.email}</div>
            <div style={fieldStyle}>
                <input type="checkbox" checked={user.testamento} readOnly />
            </div>
            <div style={dividerStyle}></div>
        </div>
        );
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
                <div style={{ marginBottom: '15px', fontSize: '12px', color: '#fff' }}>Planificación anticipada</div>  
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
                    {/* <div onClick={handleSignoutClick} style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                        <img src="/settings.png" alt="Settings" style={{ marginRight: '10px' }} />
                        Ajustes
                    </div> */}
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