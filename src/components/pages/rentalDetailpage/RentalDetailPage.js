import React, { useState } from 'react'
import RentalDetailForm from '../../molecule/rentalDetailform/RentalDetailForm';
import TableRentalDetail from '../../molecule/tableRentalDetail/TableRentalDetail';

export const RentalDetailPage = () => {

    let defaultRentalDetail = {
        id_detalle_alquiler:'',
        nro_alquiler: '',
        item: '',
        codigo_titulo: '',
        nro_CD: '',
        dias_prestamo:'',
        fecha_devolucion:''
    };

    let pageState = {
        agregar: true,
        cuerrentRentalDetail: defaultRentalDetail
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
            {
                cuerrentPageState.agregar ?
                 <RentalDetailForm cuerrentRentalDetail = {cuerrentPageState.cuerrentRentalDetail} defaultRentalDetail = {defaultRentalDetail} action = {setCuerrentPageState}/>:
                 <TableRentalDetail cuerrentRentalDetail = {cuerrentPageState.cuerrentRentalDetail} action={setCuerrentPageState} />
            }
                
            </div>
        </div>
        
    )
}
