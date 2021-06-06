import React, { useEffect, useState } from 'react';
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';

import { getRentals } from '../../../helper/rental';

const TableRentalDetail = ({ cuerrentUsert: cuerrentRental, action }) => {

    const [rentals, setRentals] = useState([]);
    useEffect(() => {
        console.log(cuerrentRental);
        getRentals().then((data) => {
            setRentals(data);
        });
    }, [cuerrentRental]);

    const handleUpdate = (u) => {
        action(prevState => ({
            'agregar': true,
            'cuerrentRental': u
        }));
    }

    return (
        <>
            <div className="container">
                <Table border="2" className="table" id="tablaprueba">
                    <Thead className="thead-dark">
                        <Tr>
                            <Th>codigo_cliente</Th>
                            <Th>fecha_alquiler</Th>
                            <Th>valor_alquiler</Th>
                            <Th></Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {
                            rentals.map((item) => (
                                <Tr key={item.nro_alquiler}>
                                    <Td>{item.codigo_cliente}</Td>
                                    <Td>{item.fecha_alquiler}</Td>
                                    <Td>{item.valor_alquiler}</Td>
                                  
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

export default TableRentalDetail;
