import React, { useEffect, useState } from 'react';
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';

import { getSantion } from '../../../helper/santion';

const TableSantion = ({ cuerrentSantion, action }) => {

    const [rentals, setRentals] = useState([]);
    useEffect(() => {
        console.log(cuerrentSantion);
        getSantion().then((data) => {
            setRentals(data);
        });
    }, [cuerrentSantion]);

    return (
        <>
            <div className="container">
                <Table border="2" className="table" id="tablaprueba">
                    <Thead className="thead-dark">
                        <Tr>
                            <Th>codigo_cliente</Th>
                            <Th>nro_alquiler</Th>
                            <Th>tipo_sancion</Th>
                            <Th>nro_dias_sancion</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {
                            rentals.map((item) => (
                                <Tr key={item.nro_sancion}>
                                    <Td>{item.codigo_cliente}</Td>
                                    <Td>{item.nro_alquiler}</Td>
                                    <Td>{item.tipo_sancion}</Td>
                                    <Td>{item.nro_dias_sancion}</Td>
                                </Tr>
                            ))
                        }
                    </Tbody>
                </Table>
            </div>
        </>
    );
}

export default TableSantion;
