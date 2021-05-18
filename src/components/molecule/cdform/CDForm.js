import React, { useEffect, useState } from 'react'
import { createCD, updateCD } from '../../../helper/cd';
import { useForm } from '../../../hooks/useForm';
import { Popup } from '../Popup';
import './cdform.css';

export const CDForm = ({ currentCD, defaultCD, action }) => {

    const [formState, setFormState] = useState({
        isOpen: false,
        errors: {}
    });
    const [datos, handleInputChange, reset, setValues] = useForm(defaultCD);

    const handleCD = (event) => {
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

        if (!input["nro_CD"]) {
            isValid = false;
            currentErrors["nro_CD"] = "Please enter CD nro_CD.";
        }

        if (!input["condicion"]) {
            isValid = false;
            currentErrors["condicion"] = "Please enter CD condition.";
        }

        if (!input["ubicacion"]) {
            isValid = false;
            currentErrors["ubicacion"] = "Please enter CD ubication.";
        }

        if (!input["estado"]) {
            isValid = false;
            currentErrors["estado"] = "Please enter cd state.";
        }
        setFormState({
            ...formState,
            errors : currentErrors
        });
        return isValid;

    }


    const handleCreateCD = () => {
        if (datos.codigo_titulo) {
            updateCD(datos).then(() => {
                action(prevState => ({
                    ...prevState,
                    'currentCD': defaultCD
                }));
            });
        } else {
            createCD(datos).then(() => {
                action(prevState => ({
                    ...prevState,
                    'currentCD': defaultCD
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
        setValues(currentCD);
    }, [currentCD, setValues]);
    return (
        <div>
            <header>
                <div className="container text-center">
                    <h1>Administrador de CD</h1>
                </div>
            </header>
            <div className="container">
                <form id='client-form' onSubmit={handleCD}>
                    <div className ='container'>
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
                            <span style={{ color: "red" }}>{formState.errors.nro_CD}</span>
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
                            <span style={{ color: "red" }}>{formState.errors.condicion}</span>
                    </div>

                    <div className="form-group">
                        <label className="control-label">Ubicacion</label>
                        <input type="text" className="form-control"
                            id="ubicacion"
                            name="ubicacion"
                            value={datos.ubicacion}
                            onChange={handleInputChange}
                            placeholder="En tienda" />
                            <span style={{ color: "red" }}>{formState.errors.ubicacion}</span>
                    </div>

                    <div className="form-group">
                        <label className="control-label">estado</label>
                        <input type="text" className="form-control"
                            id="estado" name="estado"
                            value={datos.estado}
                            onChange={handleInputChange}
                            placeholder="Excelente" />
                            <span style={{ color: "red" }}>{formState.errors.estado}</span>
                    </div>
                    </div>

                    <div className="form-group">
                        <button type="submit" className="btn btn-primary">{datos.codigo_titulo ? 'Actualizar' : 'Agregar'}</button>
                    </div>
                </form>
            </div>
            <div>{formState.isOpen && <Popup
                content={<>
                    <b>Confirmation</b>
                    <p>Confirmate create or update CD</p>
                    <button className="btn btn-primary" onClick={handleCreateCD}>yes</button>
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
            />}</div>
        </div>
    )
}
