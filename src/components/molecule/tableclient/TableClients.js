import React, { useEffect, useState } from 'react';
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';

import { getClients } from '../../../helper/client';

const TableClients = ({ cuerrentUsert, action }) => {

    const [clientes, setClientes] = useState([]);
    useEffect(() => {
        console.log(cuerrentUsert);
        getClients().then((data) => {
            setClientes(data);
        });
    }, [cuerrentUsert]);

    const handleUpdate = (u) => {
        action(prevState => ({
            'agregar': true,
            'cuerrentUser': u
        }));
    }

    return (
        <>
            <div className="container">
                <Table border="2" className="table" id="tablaprueba">
                    <Thead className="thead-dark">
                        <Tr>
                            <Th>nombre_cliente</Th>
                            <Th>nro_DNI</Th>
                            <Th>tema_interes</Th>
                            <Th>telefono</Th>
                            <Th>email</Th>
                            <Th>fecha_nacimiento</Th>
                            <Th>Estado</Th>
                            <Th></Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {
                            clientes.map((item) => (
                                <Tr key={item.codigo_cliente}>
                                    <Td>{item.nombre_cliente}</Td>
                                    <Td>{item.nro_DNI}</Td>
                                    <Td>{item.tema_interes}</Td>
                                    <Td>{item.telefono}</Td>
                                    <Td>{item.email}</Td>
                                    <Td>{item.fecha_nacimiento}</Td>
                                    <Td>{item.estado}</Td>
                                    <Td><button className="btn btn-primary" onClick={() => {
                                        handleUpdate(item);
                                    }}>Actualizar</button></Td>
                                </Tr>
                            ))
                        }
                    </Tbody>
                </Table>
            </div>
        </>
    );
}

export default TableClients;
