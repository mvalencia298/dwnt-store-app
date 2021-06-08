import React, { useState } from 'react'
import RentalDetailForm from '../../molecule/rentalDetailform/RentalDetailForm';
import TableRentalDetail from '../../molecule/tableRentalDetail/TableRentalDetail';
import TableSantion from '../../molecule/tableSantion/TableSantion';

export const SantionPage = () => {

    let defaultSantion = {
        nro_sancion:'',
        codigo_cliente: '',
        nro_alquiler: '',
        tipo_sancion: '',
        nro_dias_sancion: ''
    };

    let pageState = {
        agregar: true,
        cuerrentSantion: defaultSantion
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
            <button className='btn btn-primary' onClick = {handlePage}>{cuerrentPageState.agregar ? 'Tabla de detalle alquiler' : 'Agregar' }</button>
            </div>
            <div className = "container">
                 <TableSantion cuerrentRentalDetail = {cuerrentPageState.cuerrentSantion} action={setCuerrentPageState} />
            </div>
        </div>
        
    )
}
