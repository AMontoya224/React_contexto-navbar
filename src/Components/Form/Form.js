import React, { useContext } from 'react';
import Wrapper from '../Wrapper';
import './Form.css';


function Form(){
    const value = useContext(Wrapper);
    return(
        <form className='form'>
            <label htmlFor="nombre">
                Your Name: 
            </label>
            <input type="text" id="nombre" onChange={ (e) => value.setNombre(e.target.value)}/>
        </form>
    );
}

export default Form;