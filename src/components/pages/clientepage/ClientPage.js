import React, { useState } from 'react'
import ClientForm from '../../molecule/clienteform/ClientForm'
import TableClients from '../../molecule/tableclient/TableClients'
import './clientpage.css';

export const ClientPage = () => {

    let defaultClient = {
        telefono: '',
        nombre_cliente: '',
        email: '',
        nro_DNI: '',
        fecha_nacimiento: '',
        tema_interes: '',
        estado: 'ACTIVO'
    };

    let pageState = {
        agregar: true,
        cuerrentUser: defaultClient
    }

    const [cuerrentPageState, setCuerrentPageState] = useState(pageState)

    const handlePage = () => {
        setCuerrentPageState({
            ...cuerrentPageState,
            agregar: !cuerrentPageState.agregar
        })
    }

    return (
        <div>
            <div className = "container">
            <button className='btn btn-primary' onClick = {handlePage}>{cuerrentPageState.agregar ? 'Tabla de usaurio' : 'Agregar' }</button>
            </div>
            <div className = "container">
            {
                cuerrentPageState.agregar ?
                 <ClientForm cuerrentUsert = {cuerrentPageState.cuerrentUser} defaultClient = {defaultClient} action={setCuerrentPageState} /> :
                 <TableClients cuerrentUsert = {cuerrentPageState.cuerrentUser} action={setCuerrentPageState} />
            }
                
            </div>
        </div>
        
    )
}
