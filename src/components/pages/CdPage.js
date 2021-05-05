import React, { useState } from 'react'
import {CDForm} from '../molecule/CDForm'
import {TableCD} from '../molecule/TableCD'

export const CdPage = () => {

    let defaultCD = {
        codigo_titulo: "",
        nro_CD: "",
        condicion: "",
        ubicacion: "",
        estado: ""
    };

    const [currentCD, setCurrentCD] = useState(defaultCD);


    return (
        <div>
            <CDForm currentCD = {currentCD} defaultCD = {defaultCD} action = {setCurrentCD} />
            <TableCD currentCD = {currentCD} action = {setCurrentCD} />
        </div>
    )
}
