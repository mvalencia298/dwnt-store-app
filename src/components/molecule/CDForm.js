import React, { useEffect, useState } from 'react'
import { createCD, updateCD } from '../../helper/cd';
import { useForm } from '../../hooks/useForm';
import { Popup } from './Popup';

export const CDForm = ({ currentCD, defaultCD, action }) => {

    const [isOpen, setIsOpen] = useState(false);
    const [datos, handleInputChange, reset, setValues] = useForm(defaultCD);

    const handleClient = (event) => {
        event.preventDefault();
        setIsOpen(!isOpen);
    }

    const handleCreateCD = () => {
        if (datos.codigo_titulo) {
            updateCD(datos).then(() => {
                action(defaultCD);
            });
        } else {
            createCD(datos).then(() => {
                action(defaultCD);
            });
        }
        setIsOpen(!isOpen);
        reset();
    }

    useEffect(() => {
        setValues(currentCD);
    }, [currentCD]);
    return (
        <div>
            <header>
                <div className="container text-center">
                    <h1>Administrador de CD</h1>
                </div>
            </header>
            <div className="container">
                <form id='client-form' onSubmit={handleClient}>
                    <div className="form-group">
                        <label className="control-label">Numero CD</label>
                        <input
                            type="number"
                            className="form-control"
                            id="nro_CD"
                            name="nro_CD"
                            placeholder="99"
                            value={datos.nro_CD}
                            onChange={handleInputChange} />
                    </div>

                    <div className="form-group">
                        <label className="control-label">Condicion</label>
                        <input type="text"
                            className="form-control"
                            id="condicion"
                            name="condicion"
                            placeholder="Buena"
                            value={datos.condicion}
                            onChange={handleInputChange} />
                    </div>

                    <div className="form-group">
                        <label className="control-label">Ubicacion</label>
                        <input type="text" className="form-control"
                            id="ubicacion"
                            name="ubicacion"
                            value={datos.ubicacion}
                            onChange={handleInputChange}
                            placeholder="En tienda" />
                    </div>

                    <div className="form-group">
                        <label className="control-label">estado</label>
                        <input type="text" className="form-control"
                            id="estado" name="estado"
                            value={datos.estado}
                            onChange={handleInputChange}
                            placeholder="Excelente" />
                    </div>

                    <div className="form-group">
                        <button type="submit" className="btn btn-primary">{datos.codigo_titulo ? 'Actualizar' : 'Agregar'}</button>
                    </div>
                </form>
            </div>
            <div>{isOpen && <Popup
                content={<>
                    <b>Confirmation</b>
                    <p>Confirmate create or update CD</p>
                    <button className="btn btn-primary" onClick={handleCreateCD}>yes</button>
                    <button className="btn btn-primary" onClick={() => {
                        setIsOpen(!isOpen)
                        reset();
                    }
                    }> Not</button>
                </>}
                handleClose={() => {
                    setIsOpen(!isOpen)
                }}
            />}</div>
        </div>
    )
}
