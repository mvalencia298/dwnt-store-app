import React, { useEffect, useState } from 'react';
import { createClient } from '../../helper/client';
import { updateClient } from '../../helper/client';
import { useForm } from '../../hooks/useForm';
import { Popup } from './Popup';

const ClientForm = ({ cuerrentUsert, defaultClient, action }) => {

    

    const [isOpen, setIsOpen] = useState(false);
    const [datos, handleInputChange, reset, setValues] = useForm(defaultClient);


    const handleClient = (event) => {
        event.preventDefault();
        setIsOpen(!isOpen);
    }

    const handleCreateClient = () => {
        if (datos.codigo_cliente) {
            updateClient(datos).then(() => {
                action(defaultClient);
            });
        } else {
            createClient(datos).then(() => {
                action(defaultClient);
            });
        }
        setIsOpen(!isOpen);
        reset();
    }
    useEffect(() => {
        let date = cuerrentUsert.fecha_nacimiento !== '' ? cuerrentUsert.fecha_nacimiento.split('T') : '';
        setValues({ ...cuerrentUsert, 'fecha_nacimiento': date[0] })
    }, [cuerrentUsert]);

    return (
        <div>
            <header>
                <div className="container text-center">
                    <h1>Administrador de clientes</h1>
                </div>
            </header>
            <div className="container">
                <form id='client-form' onSubmit={handleClient}>
                    <div className="form-group">
                        <label className="control-label">Documento De Identidad</label>
                        <input
                            type="text"
                            className="form-control"
                            id="Num_Doc_id"
                            name="nro_DNI"
                            placeholder="1100022255"
                            value={datos.nro_DNI}
                            onChange={handleInputChange} />
                    </div>

                    <div className="form-group">
                        <label className="control-label">Nombre Completo</label>
                        <input type="text"
                            className="form-control"
                            id="Nombre_Com_id"
                            name="nombre_cliente"
                            placeholder="Juan Gomez"
                            value={datos.nombre_cliente}
                            onChange={handleInputChange} />
                    </div>

                    <div className="form-group">
                        <label className="control-label">Temas de interes</label>
                        <input type="text" className="form-control"
                            id="temas_interes"
                            name="tema_interes"
                            value={datos.tema_interes}
                            onChange={handleInputChange}
                            placeholder="Calle 56 sur 89 00" />
                    </div>

                    <div className="form-group">
                        <label className="control-label">Numero de telefono</label>
                        <input type="text" className="form-control"
                            id="Num_Tel_id" name="telefono"
                            value={datos.telefono}
                            onChange={handleInputChange}
                            placeholder="3228521259" />
                    </div>

                    <div className="form-group">
                        <label className="control-label">Correo Electronica</label>
                        <input type="text" className="form-control"
                            id="Email_id" name="email"
                            value={datos.email}
                            onChange={handleInputChange}
                            placeholder="Ejemplo@dominio.com" />
                    </div>

                    <div className="form-group">
                        <label className="control-label">Fecha de nacimiento</label>
                        <input type="date"
                            className="form-control" id="Fec_Na_id"
                            name="fecha_nacimiento"
                            value={datos.fecha_nacimiento}
                            onChange={handleInputChange}
                            placeholder="23/05/2020" />

                    </div>

                    <div className="form-group">
                        <button type="submit" className="btn btn-primary">{datos.codigo_cliente ? 'Actualizar' : 'Agregar'}</button>
                    </div>
                </form>
            </div>
            {isOpen && <Popup
                content={<>
                    <b>confirmatin</b>
                    <p>Confirmate create or update user</p>
                    <button className="btn btn-primary" onClick={handleCreateClient}>yes</button>
                    <button className="btn btn-primary" onClick={() => {
                        setIsOpen(!isOpen)
                        reset();
                    }
                    }> Not</button>
                </>}
                handleClose={() => {
                    setIsOpen(!isOpen)
                }}
            />}
        </div >
    );
}

export default ClientForm;
