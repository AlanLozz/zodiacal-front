import React, { useState, useEffect } from 'react';

const Log = ({data, getData}) => {
    return (
        <div>
            <div className="card">
                <div className="card-body">
                    <div className="row align-items-center">
                        <div className="col-8">
                            <strong>Total de registros: </strong>{data.length}
                        </div>
                        <div className="col-4 d-flex justify-content-end">
                            <button className="btn btn-info" onClick={getData}>Actualizar</button>
                        </div>
                    </div>
                </div>
            </div>
            <table className="table table-hover mt-2">
                <thead className="thead-dark">
                    <tr>
                        <th>Real</th>
                        <th>Característica</th>
                        <th>Caracter</th>
                        <th>Amor</th>
                        <th>Debilidad</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.length > 0 &&
                            data.map((fila, index) => {
                                return (
                                    <tr key={index}>
                                        <th>{fila.signoZodiacal}</th>
                                        <td>{fila.caracteristica}</td>
                                        <td>{fila.caracter}</td>
                                        <td>{fila.relacionesAmorosas}</td>
                                        <td>{fila.debilidad}</td>
                                    </tr>
                                )
                            })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Log