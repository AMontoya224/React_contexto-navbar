import React, { useContext } from 'react';
import Wrapper from '../Wrapper';
import './Navbar.css'


const Navbar = () =>{
    const value = useContext(Wrapper);
    return(
      <div className='nav'>
        <h1>
          Hello, {value.nombre}
        </h1>
      </div>
    )
}
export default Navbar;