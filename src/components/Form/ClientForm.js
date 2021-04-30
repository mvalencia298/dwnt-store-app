import React from 'react';
import { createClient } from '../../helper/client';
import { useForm } from '../../hooks/useForm';

const ClientForm = () => {

    let defaultClient = {
        telefono: '',
        nombre_cliente: '',
        email: '',
        nro_DNI: '',
        fecha_nacimiento: '',
        tema_interes: '',
        estado: 'ACTIVO'
    };

    const [datos, handleInputChange, reset] = useForm(defaultClient);

    const handleClient = (event) => {
        event.preventDefault();
        createClient(datos);
        reset();
    }

    return (
        <>
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
                        <button type="submit" className="btn btn-primary">agregar</button>
                    </div>
                </form>
            </div>
        </>
    );
}

export default ClientForm;
