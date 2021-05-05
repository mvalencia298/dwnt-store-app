import React, { useEffect, useState } from 'react';

import { getClients } from '../../helper/client';

const TableClients = ({ cuerrentUsert, action }) => {

    const [clientes, setClientes] = useState([]);
    useEffect(() => {
        console.log(cuerrentUsert);
        getClients().then((data) => {
            setClientes(data);
        });
    }, [cuerrentUsert]);

    const handleUpdate = (u) => {
        action(u);
    }

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
                                <th>...</th>
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
                                        <td><button className="btn btn-primary"  onClick={() => {
                                            handleUpdate(item);
                                        }}>Actualizar</button></td>
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
