import React, { useEffect, useState } from 'react';
import { createRental } from '../../../helper/rental';
import { updateRental } from '../../../helper/rental';
import { getRentals } from '../../../helper/rental';
import { useForm } from '../../../hooks/useForm';
import { Popup } from '../Popup';
import { getClients } from '../../../helper/client';


const RentalForm = ({ cuerrentRental, defaultRental, action }) => {

    const [formState, setFormState] = useState({
        isOpen: false,
        errors: {},
        rentals: []
    });
    const [datos, handleInputChange, reset, setValues] = useForm(defaultRental);

    const handleRental = (event) => {
        event.preventDefault();
        getRentals().then(res =>{
            console.log(res);
        });
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

        if (!input["codigo_cliente"]) {
            isValid = false;
            currentErrors["codigo_cliente"] = "Please select client";
        }
        
        if (!input["fecha_alquiler"]) {
            isValid = false;
            currentErrors["fecha_alquiler"] = "Please select fecha_alquiler";
        }
        
        if (!input["valor_alquiler"]) {
            isValid = false;
            currentErrors["valor_alquiler"] = "Please select valor_alquiler";
        }

        setFormState({
            ...formState,
            errors: currentErrors
        });
        return isValid;

    }

    const handleCreateRental = () => {
        if (datos.nro_alquiler) {
            updateRental(datos).then(() => {
                action(prevState => ({
                    ...prevState,
                    'cuerrentRental': defaultRental
                }));
            });
        } else {
            createRental(datos).then(() => {
                action(prevState => ({
                    ...prevState,
                    'cuerrentRental': defaultRental
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
        getClients().then((data) => {
            setFormState({
                ...formState,
                rentals: data
            });
        });
        let date = cuerrentRental.fecha_alquiler != '' ? cuerrentRental.fecha_alquiler.split('T') : ''.split('T');
        setValues({ ...cuerrentRental, 'fecha_alquiler': date[0] })
    }, [cuerrentRental])

    return (
        <div>
            <header>
                <div className="container text-center">
                    <h1>Administrador de alquiler</h1>
                </div>
            </header>
            <div className="container">
                <form id='client-form' onSubmit={handleRental} >
                    <div className="container-inputs">
                        <select id="codigo_cliente" 
                                name="codigo_cliente" 
                                className = "form-control" 
                                onChange={handleInputChange} 
                                value={datos.codigo_cliente}>
                            <option key=''  defaultValue>Usuario</option>
                            {formState.rentals.map((rental) => (
                                <option key={rental.codigo_cliente} value={rental.codigo_cliente}>{rental.nombre_cliente}</option>
                            ))}
                        </select>
                        <span style={{ color: "red" }}>{formState.errors.codigo_cliente}</span>
                        <div className="form-group">
                            <label className="control-label">Fecha alquiler</label>
                            <input
                                type="date"
                                className="form-control"
                                id="fecha_alquiler"
                                name="fecha_alquiler"
                                value={datos.fecha_alquiler}
                                onChange={handleInputChange}
                                placeholder="23/05/2020" />
                            <span style={{ color: "red" }}>{formState.errors.fecha_alquiler}</span>
                        </div>

                        <div className="form-group">
                            <label className="control-label">Valor alquiler</label>
                            <input
                                type="number"
                                className="form-control"
                                id="valor_alquiler"
                                name="valor_alquiler"
                                placeholder="20000"
                                value={datos.valor_alquiler}
                                onChange={handleInputChange} />
                            <span style={{ color: "red" }}>{formState.errors.valor_alquiler}</span>
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
                    <button className="btn btn-primary" onClick={handleCreateRental}>yes</button>
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

export default RentalForm;
