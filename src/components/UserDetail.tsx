import React from 'react';
import { useParams } from 'react-router-dom';

type UserType = {
    id: string;
    fecha: string;
    nombre: string;
    apellidos: string;
    numeroDeTelefono: string;
    email: string;
    testamento: boolean;
};

interface UserDetailProps {
    dummyUsers: UserType[];
    userId: string;
}

const UserDetail: React.FC<UserDetailProps> = ({ dummyUsers, userId }) => {
    const user = dummyUsers.find(dummyUser => dummyUser.id === userId);
    const { id } = useParams();


    if (!user) {
        return <div>User not found</div>;
    }

    const formFields = [
        { label: 'Nombre', value: user.nombre, type: 'text' },
        { label: 'Apellidos', value: user.nombre, type: 'text' },  // Note: Adjust value as necessary
        { label: 'Fecha', value: user.fecha, type: 'date' },
        { label: 'Numero de telefono', value: user.numeroDeTelefono, type: 'tel' },  // Note: Adjust value as necessary
        { label: 'Email', value: user.email, type: 'email' },  // Note: Adjust value as necessary
        { label: 'Testamento', value: '/docu.png', type: 'image' },
        { label: 'Identificación', value: '/id.png', type: 'image' },
    ];

    const fieldContainerStyle = {
        marginBottom: '20px',
    };

    const labelStyle = {
        display: 'block',
        marginBottom: '5px',
        fontSize: '14px',
        color: '#233161',
        fontWeight: 'bold',
    };

    const valueStyle = {
        padding: '10px',
        borderRadius: '4px',
        border: '1px solid #d3d3d3',
    };

    const imageStyle = {
        width: '30px',
        height: '30px',
    };

    return (
        <div style={{ backgroundColor: '#fff', borderRadius: '10px', padding: '20px', margin: '20px' }}>
            <h2 style={{ color: '#233161', fontSize: '24px', marginBottom: '10px' }}>Detalles del usuario</h2>
            {formFields.map((field, index) => (
                <div key={index} style={fieldContainerStyle}>
                    <label style={labelStyle}>{field.label}</label>
                    {field.type === 'image' ? (
                        <img src={field.value} alt={field.label} style={imageStyle} />
                    ) : (
                        <div style={valueStyle}>{field.value}</div>
                    )}
                </div>
            ))}
        </div>
    );
};

export default UserDetail;
