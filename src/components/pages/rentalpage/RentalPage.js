import React, { useState } from 'react'
import RentalForm from '../../molecule/rentalform/RentalForm';
import TableRental from '../../molecule/tableRental/TableRental';

export const RentalPage = () => {

    let defaultRental = {
        nro_alquiler: '',
        codigo_cliente: '',
        fecha_alquiler: '',
        valor_alquiler: ''
    };

    let pageState = {
        agregar: true,
        cuerrentRental: defaultRental
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
            <button className='btn btn-primary' onClick = {handlePage}>{cuerrentPageState.agregar ? 'Tabla de alquiler' : 'Agregar' }</button>
            </div>
            <div className = "container">
            {
                cuerrentPageState.agregar ?
                 <RentalForm cuerrentRental = {cuerrentPageState.cuerrentRental} defaultRental = {defaultRental} action = {setCuerrentPageState}/>:
                 <TableRental cuerrentRental = {cuerrentPageState.cuerrentRental} action={setCuerrentPageState} />
            }
                
            </div>
        </div>
        
    )
}
