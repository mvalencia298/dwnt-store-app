import React, { useEffect, useState } from 'react';
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';

import { getRentalsDetail } from '../../../helper/rentalDetail';

const TableRentalDetail = ({ cuerrentRentalDetail, action }) => {

    const [rentals, setRentals] = useState([]);
    useEffect(() => {
        console.log(cuerrentRentalDetail);
        getRentalsDetail().then((data) => {
            setRentals(data);
        });
    }, [cuerrentRentalDetail]);

    const handleUpdate = (u) => {
        action(prevState => ({
            'agregar': true,
            'cuerrentRentalDetail': u
        }));
    }

    return (
        <>
            <div className="container">
                <Table border="2" className="table" id="tablaprueba">
                    <Thead className="thead-dark">
                        <Tr>
                            <Th>nro_alquiler</Th>
                            <Th>item</Th>
                            <Th>codigo_titulo</Th>
                            <Th>nro_CD</Th>
                            <Th>dias_prestamo</Th>
                            <Th>fecha_devolucion</Th>
                            <Th></Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {
                            rentals.map((item) => (
                                <Tr key={item.id_detalle_alquiler}>
                                    <Td>{item.nro_alquiler}</Td>
                                    <Td>{item.item}</Td>
                                    <Td>{item.codigo_titulo}</Td>
                                    <Td>{item.nro_CD}</Td>
                                    <Td>{item.dias_prestamo}</Td>
                                    <Td>{item.fecha_devolucion}</Td>
                                  
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
