import React, { useState } from 'react'
import ClientForm from '../molecule/ClientForm'
import TableClients from '../molecule/TableClients'

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

    const [cuerrentUsert, setCuerrentUsert] = useState(defaultClient)

    return (
        <div>
            <ClientForm data = {cuerrentUsert}/>
            <TableClients action={setCuerrentUsert} />
        </div>
    )
}
