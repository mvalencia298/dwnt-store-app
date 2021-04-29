import React, { useEffect, useState } from 'react';

import {getClients} from '../../helper/getClients';

const TableClients = ({datos}) => {
    
    const [clientes, setClientes] = useState([]);
    useEffect(()=>{
        getClients().then((data) => {
            setClientes(data);
        });
    },[datos]);

  return (
    <>
        <div className="container">
            <div className="row">
            <table border="2" className="table" id="tablaprueba">
                <thead className="thead-dark">
                <tr>
                    <th>nombre_cliente</th>
                    <th>nro_DNI</th>
                    <th>tema_interes</th>
                    <th>telefono</th>
                    <th>email</th>
                    <th>fecha_nacimiento</th>
                    <th>Estado</th>
                </tr>
                </thead>
                <tbody>
                    {
                        clientes.map((item) => (
                            <tr key={item.codigo_cliente}>
                                <td>{item.nombre_cliente}</td>
                                <td>{item.nro_DNI}</td>
                                <td>{item.tema_interes}</td>
                                <td>{item.telefono}</td>
                                <td>{item.email}</td>
                                <td>{item.fecha_nacimiento}</td>
                                <td>{item.estado}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
            </div>
  </div>
    </>
  );
}

export default TableClients;
