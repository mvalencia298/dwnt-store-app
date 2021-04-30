import React from 'react'
import { createCD } from '../../helper/cd';
import { useForm } from '../../hooks/useForm';

export const CDForm = () => {

    let defaultCD = {
        nro_CD: "",
        condicion: "",
        ubicacion: "",
        estado: ""
    };

    const [datos, handleInputChange, reset] = useForm(defaultCD);

    const handleClient = (event) => {
        event.preventDefault();
        createCD(datos);
        reset();
    }

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
                        <button type="submit" className="btn btn-primary">agregar</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
