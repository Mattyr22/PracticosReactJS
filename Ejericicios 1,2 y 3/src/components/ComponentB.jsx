import React from 'react';
import PropTypes from 'prop-types';

const ComponentB = ({setNewContact}) => {
    
    const hardleStatus = () => {
        setNewContact((prevContact) => {
            return {
                ...prevContact,
                conectado: !prevContact.conectado
            }
        })
    }


    return (
        <button onClick={hardleStatus}>Login</button>
    )
}


ComponentB.propTypes = {
    setNewContact: PropTypes.func
}


export default ComponentB;
