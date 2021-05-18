import React, { useEffect, useState } from 'react';
import { createClient } from '../../../helper/client';
import { updateClient } from '../../../helper/client';
import { useForm } from '../../../hooks/useForm';
import { Popup } from '../Popup';
import './clientform.css'

const ClientForm = ({ cuerrentUsert, defaultClient, action }) => {



    const [formState, setFormState] = useState({
        isOpen: false,
        errors: {}
    });
    const [datos, handleInputChange, reset, setValues] = useForm(defaultClient);


    const handleClient = (event) => {
        event.preventDefault();
        if (validate()) {
            setFormState({
                ...formState,
                'isOpen': !formState.isOpen
            });
        }
    }

    const validate = () => {
        let input = datos;
        let currentErrors = {};
        let isValid = true;

        if (!input["nro_DNI"]) {
            isValid = false;
            currentErrors["nro_DNI"] = "Please enter client nro_DNI.";
        }

        if (!input["telefono"]) {
            isValid = false;
            currentErrors["telefono"] = "Please enter client tel.";
        }

        if (!input["nombre_cliente"]) {
            isValid = false;
            currentErrors["nombre_cliente"] = "Please enter client name.";
        }

        if (!input["email"]) {
            isValid = false;
            currentErrors["email"] = "Please enter  client Address.";
        }


        if (!input["fecha_nacimiento"]) {
            isValid = false;
            currentErrors["fecha_nacimiento"] = "Please enter  client born date.";
        }

        if (!input["tema_interes"]) {
            isValid = false;
            currentErrors["tema_interes"] = "Please enter  client interest";
        }
        setFormState({
            ...formState,
            errors : currentErrors
        });
        return isValid;

    }

    const handleCreateClient = () => {
        if (datos.codigo_cliente) {
            updateClient(datos).then(() => {
                action(prevState => ({
                    ...prevState,
                    'cuerrentUser': defaultClient
                }));
            });
        } else {
            createClient(datos).then(() => {
                action(prevState => ({
                    ...prevState,
                    'cuerrentUser': defaultClient
                }));
            });
        }
        setFormState({
            ...formState,
            'isOpen': !formState.isOpen
        });
        reset();
    }
    useEffect(() => {
        let date = cuerrentUsert.fecha_nacimiento !== '' ? cuerrentUsert.fecha_nacimiento.split('T') : ''.split('T');
        setValues({ ...cuerrentUsert, 'fecha_nacimiento': date[0] })
    }, [cuerrentUsert, setValues]);

    return (
        <div>
            <header>
                <div className="container text-center">
                    <h1>Administrador de clientes</h1>
                </div>
            </header>
            <div className="container">
                <form id='client-form' onSubmit={handleClient} >
                    <div className="container-inputs">

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
                            <span style={{ color: "red" }}>{formState.errors.nro_DNI}</span>
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
                            <span style={{ color: "red" }}>{formState.errors.nombre_cliente}</span>
                        </div>

                        <div className="form-group">
                            <label className="control-label">Temas de interes</label>
                            <input type="text" className="form-control"
                                id="temas_interes"
                                name="tema_interes"
                                value={datos.tema_interes}
                                onChange={handleInputChange}
                                placeholder="Calle 56 sur 89 00" />
                            <span style={{ color: "red" }}>{formState.errors.tema_interes}</span>
                        </div>

                        <div className="form-group">
                            <label className="control-label">Numero de telefono</label>
                            <input type="text" className="form-control"
                                id="Num_Tel_id" name="telefono"
                                value={datos.telefono}
                                onChange={handleInputChange}
                                placeholder="3228521259" />
                            <span style={{ color: "red" }}>{formState.errors.telefono}</span>
                        </div>

                        <div className="form-group">
                            <label className="control-label">Correo Electronica</label>
                            <input type="text" className="form-control"
                                id="Email_id" name="email"
                                value={datos.email}
                                onChange={handleInputChange}
                                placeholder="Ejemplo@dominio.com" />
                            <span style={{ color: "red" }}>{formState.errors.email}</span>
                        </div>

                        <div className="form-group">
                            <label className="control-label">Fecha de nacimiento</label>
                            <input type="date"
                                className="form-control" id="Fec_Na_id"
                                name="fecha_nacimiento"
                                value={datos.fecha_nacimiento}
                                onChange={handleInputChange}
                                placeholder="23/05/2020" />
                            <span style={{ color: "red" }}>{formState.errors.fecha_nacimiento}</span>

                        </div>
                    </div>

                    <div className="form-group">
                        <button type="submit" className="btn btn-primary">{datos.codigo_cliente ? 'Actualizar' : 'Agregar'}</button>
                    </div>
                </form>
            </div>
            {formState.isOpen && <Popup
                content={<>
                    <b>confirmatin</b>
                    <p>Confirmate create or update user</p>
                    <button className="btn btn-primary" onClick={handleCreateClient}>yes</button>
                    <button className="btn btn-primary" onClick={() => {
                        setFormState({
                            ...formState,
                            'isOpen': !formState.isOpen
                        });
                        reset();
                    }
                    }> Not</button>
                </>}
                handleClose={() => {
                    setFormState({
                        ...formState,
                        'isOpen': !formState.isOpen
                    });
                }}
            />}
        </div >
    );
}

export default ClientForm;
