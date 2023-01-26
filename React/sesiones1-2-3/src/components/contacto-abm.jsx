import React from 'react';
import { Contacto } from '../models/contacto.class';
//import PropTypes from 'prop-types';
import ContactoComponent from './contacto';


const ContactoAbmComponent = () => {
    
    const defaultContacto = new Contacto('Alejandro', 'Turtola', 'alejandro.turtola@gmail.com', false);
    
    return (
        <div>
            <div>
                <h1>Contacto</h1>
            </div>
            <ContactoComponent contacto={ defaultContacto }></ContactoComponent>
        </div>
    );
};


/* ContactoAbm.propTypes = {

}; */


export default ContactoAbmComponent;
