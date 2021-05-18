import React, { useEffect, useState } from 'react';
import { getCD } from '../../../helper/cd';

export const TableCD = ({currentCD, action }) => {
    useEffect(() => {
        console.log(currentCD);
        getCD().then((cdList) => {
            setCd(cdList);
        });
    }, [currentCD]);

    const [cd, setCd] = useState([currentCD]);

    const handleUpdate = (u) => {
        action(prevState => ({
            ...prevState,
            'currentCD': u
        }));
    }

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
                                <th>...</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                cd.map((item) => (
                                    <tr key={item.codigo_titulo}>
                                        <td>{item.nro_CD}</td>
                                        <td>{item.condicion}</td>
                                        <td>{item.ubicacion}</td>
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
        </div>
    )
}
