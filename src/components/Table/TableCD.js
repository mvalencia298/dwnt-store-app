import React, { useEffect, useState } from 'react';
import { getCD } from '../../helper/cd';

export const TableCD = ({ datos }) => {

    const [clientes, setClientes] = useState([]);
    useEffect(() => {
        getCD().then((data) => {
            setClientes(data);
        });
    }, [datos]);

    return (
        <div>
            <div className="container">
                <div className="row">
                    <table border="2" className="table" id="tablaprueba">
                        <thead className="thead-dark">
                            <tr>
                                <th>nro_CD</th>
                                <th>condicion</th>
                                <th>ubicacion</th>
                                <th>estado</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                clientes.map((item) => (
                                    <tr key={item.nro_CD}>
                                        <td>{item.nro_CD}</td>
                                        <td>{item.condicion}</td>
                                        <td>{item.ubicacion}</td>
                                        <td>{item.estado}</td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}
