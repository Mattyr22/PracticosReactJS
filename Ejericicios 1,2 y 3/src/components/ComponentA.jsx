import React from 'react';
import PropTypes from 'prop-types';
import ComponentB from './ComponentB';


const ComponentA = ({newContact, setNewContact}) => {
    return (
        <div>
            <h1>
                Bienvenido {`${newContact.nombre} ${newContact.apellido}`}
            </h1>
            <h2>
                Datos
            </h2>
            <h3>
                Email: <span>{newContact.email}</span>
            </h3>
            <h4>
                <span>{newContact.conectado ? "Contacto En Linea" : "Contacto No Disponible"}</span>
            </h4>

            <ComponentB setNewContact={setNewContact} />
        </div>
    );
};


ComponentA.propTypes = {
    newContact: PropTypes.object,
    setNewContact: PropTypes.func
};


export default ComponentA;
