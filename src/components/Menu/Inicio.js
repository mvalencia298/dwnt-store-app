import React from 'react';
import {Link} from 'react-router-dom'
import desarrolloweb from './desarrolloweb.png'
//import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'react-bootstrap';

const Menu = () => {


    return (
        <div>



<figure class="text-center mt-5">
  <blockquote class="blockquote">
    <p>Bienvenido a esta aplicacion</p>
  </blockquote>
  <figcaption class="blockquote-footer">
    PASCUAL BRAVO <cite title="Source Title">2021</cite>
  </figcaption>
</figure>

<div className="container fluid">
<img src={desarrolloweb} alt="No hay foto" srcset="" id="img"/>
</div>
        </div>

     //Listar con Drop
    /* <Dropdown>
    <DropdowToggle>
    Tablas
    </DropdowToggle>
    

    <Dropdown.Menu className='dropdown-menu'>
    <Dropdown.Item as={Link} to="/client-table">Clientes</Dropdown.Item>
    <Dropdown.Item as={Link} to="/cd-table">Cds</Dropdown.Item>
    </Dropdown.Menu>
    </Dropdown> */
        
    );


};

export default Menu;