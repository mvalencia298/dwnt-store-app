import React, { useEffect, useState } from 'react';
import { createRentalDetail } from '../../../helper/rentalDetail';
import { updateRentalDetail } from '../../../helper/rentalDetail';
import { useForm } from '../../../hooks/useForm';
import { Popup } from '../Popup';
import { getCD } from '../../../helper/cd';


const RentalDetailForm = ({ cuerrentRentalDetail, defaultRentalDetail, action }) => {

    const [formState, setFormState] = useState({
        isOpen: false,
        errors: {},
        rentals: []
    });
    const [datos, handleInputChange, reset, setValues] = useForm(defaultRentalDetail);

    const handleRentalDetail = (event) => {
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

        if (!input["nro_alquiler"]) {
            isValid = false;
            currentErrors["nro_alquiler"] = "Please insert nro_alquiler";
        }
        
        if (!input["codigo_titulo"]) {
            isValid = false;
            currentErrors["codigo_titulo"] = "Please select codigo_titulo";
        }
        
        if (!input["fecha_devolucion"]) {
            isValid = false;
            currentErrors["fecha_devolucion"] = "Please select fecha_devolucion";
        }
        if (!input["item"]) {
            isValid = false;
            currentErrors["item"] = "Please insert item";
        }

        setFormState({
            ...formState,
            errors: currentErrors
        });
        return isValid;

    }

    const handleCreateRentalDetail = () => {
        if (datos.id_detalle_alquiler) {
            updateRentalDetail(datos).then(() => {
                action(prevState => ({
                    ...prevState,
                    'cuerrentRentalDetail': defaultRentalDetail
                }));
            });
        } else {
            createRentalDetail(datos).then(() => {
                action(prevState => ({
                    ...prevState,
                    'cuerrentRentalDetail': defaultRentalDetail
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
        getCD().then((data) => {
            setFormState({
                ...formState,
                rentals: data
            });
        });
        let date = cuerrentRentalDetail.fecha_devolucion != '' ? cuerrentRentalDetail.fecha_devolucion.split('T') : ''.split('T');
        setValues({ ...cuerrentRentalDetail, 'fecha_devolucion': date[0] })
    }, [cuerrentRentalDetail])

    return (
        <div>
            <header>
                <div className="container text-center">
                    <h1>Administrador de Detalle alquiler</h1>
                </div>
            </header>
            <div className="container">
                <form id='client-form' onSubmit={handleRentalDetail} >
                    <div className="container-inputs">
                    <div className="form-group">
                            <label className="control-label">Codigo alquiler</label>
                            <input
                                type="number"
                                className="form-control"
                                id="nro_alquiler"
                                name="nro_alquiler"
                                value={datos.nro_alquiler}
                                onChange={handleInputChange}
                                placeholder="0000" />
                            <span style={{ color: "red" }}>{formState.errors.nro_alquiler}</span>
                        </div>
                        <div className="form-group">
                        <label className="control-label">Codigo del titulo</label>
                        <select id="codigo_titulo" 
                                name="codigo_titulo" 
                                className = "form-control" 
                                onChange={handleInputChange} 
                                value={datos.codigo_titulo}>
                            <option key=''  defaultValue>CD</option>
                            {formState.rentals.map((rental) => (
                                <option key={rental.codigo_titulo} value={rental.codigo_titulo}>{rental.codigo_titulo}</option>
                            ))}
                        </select>
                        <span style={{ color: "red" }}>{formState.errors.codigo_titulo}</span>
                        </div>

                        <div className="form-group">
                            <label className="control-label">Nombre item</label>
                            <input
                                type="text"
                                className="form-control"
                                id="item"
                                name="item"
                                value={datos.item}
                                onChange={handleInputChange}
                                placeholder="Breaking Bad" />
                            <span style={{ color: "red" }}>{formState.errors.item}</span>
                        </div>
                        <div className="form-group">
                            <label className="control-label">Fecha devolucion</label>
                            <input
                                type="date"
                                className="form-control"
                                id="fecha_devolucion"
                                name="fecha_devolucion"
                                value={datos.fecha_devolucion}
                                onChange={handleInputChange}
                                placeholder="23/05/2020" />
                            <span style={{ color: "red" }}>{formState.errors.fecha_devolucion}</span>
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
                    <button className="btn btn-primary" onClick={handleCreateRentalDetail}>yes</button>
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

export default RentalDetailForm;
