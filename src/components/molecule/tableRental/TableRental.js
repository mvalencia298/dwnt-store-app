import React, { useEffect, useState } from 'react';
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';
import { getRentals } from '../../../helper/rental';
import { createSantion } from '../../../helper/santion';
import { Popup } from '../Popup';

const TableRental = ({ cuerrentUsert: cuerrentRental, action }) => {

    const [rentals, setRentals] = useState({
        isOpen: false,
        rentals: []
    });
    useEffect(() => {
        console.log(cuerrentRental);
        getRentals().then((data) => {
            setRentals({
                ...rentals,
                'rentals': data
            });
        });
    }, [cuerrentRental]);

    const handleUpdate = (u) => {
        action(prevState => ({
            'agregar': true,
            'cuerrentRental': u
        }));
    }

    const handleSantion = (u) => {
        createSantion(u).then(() => {
            setRentals({
                ...rentals,
                'isOpen': !rentals.isOpen
            });
        });
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
                            <Th></Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {
                            rentals.rentals.map((item) => (
                                <Tr key={item.nro_alquiler}>
                                    <Td>{item.codigo_cliente}</Td>
                                    <Td>{item.fecha_alquiler}</Td>
                                    <Td>{item.valor_alquiler}</Td>

                                    <Td><button className="btn btn-primary" onClick={() => {
                                        handleUpdate(item);
                                    }}>Actualizar</button></Td>
                                    <Td><button className="btn btn-primary" onClick={() => {
                                        handleSantion(item);
                                    }}>Sansionar</button></Td>
                                </Tr>
                            ))
                        }
                    </Tbody>
                </Table>
            </div>
            {rentals.isOpen && <Popup
                content={<>
                    <b>confirmatin</b>
                    <p>Sanción creada correctamente</p>
                </>}
                handleClose={() => {
                    setRentals({
                        ...rentals,
                        'isOpen': !rentals.isOpen
                    });
                }}
            />}
        </>
    );
}

export default TableRental;
