import React, { useState } from 'react'
import {CDForm} from '../../molecule/cdform/CDForm'
import {TableCD} from '../../molecule/tablecd/TableCD'
import './cdpage.css';

export const CdPage = () => {

    let defaultCD = {
        codigo_titulo: "",
        nro_CD: "",
        condicion: "",
        ubicacion: "",
        estado: ""
    };

    let pageState = {
        agregar: true,
        currentCD: defaultCD
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
                <CDForm currentCD = {cuerrentPageState.currentCD} defaultCD = {defaultCD} action = {setCuerrentPageState} /> :
                <TableCD currentCD = {cuerrentPageState.currentCD} action = {setCuerrentPageState} />
            }
            </div>

        </div>
    )
}
