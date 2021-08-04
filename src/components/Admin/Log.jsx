import React, { useState, useEffect } from 'react';
import { GetData } from '../Queries/RequestInfo';
import { CSVLink, CSVDownload } from "react-csv";

const Log = () => {
    const [data, setData] = useState([]);
    const [downladData, setDownladData] = useState([]);
    
    const getData = () => {
        GetData()
            .then(response => {
                let datos = []
                setData(response.data)
                data.map((data, index) => {
                    datos.push({
                        id: index + 1,
                        genero: data.genero,
                        edad: data.edad,
                        signoZodiacal: data.signoZodiacal,
                        caracteristica: data.caracteristica,
                        caracter: data.caracter,
                        relacionesAmorosas: data.relacionesAmorosas,
                        debilidad: data.debilidad
                    })
                });
                setDownladData(datos);
            })
    };

    useEffect(() => {
        getData();
    },[]);
    
    return (
        <div>
            <div className="card">
                <div className="card-body">
                    <div className="row align-items-center">
                        <div className="col-8">
                            <strong>Total de registros: </strong>{data.length}
                        </div>
                        <div className="col-4 d-flex justify-content-end">
                            <CSVLink filename={"zodiacal-data.csv"} data={downladData} className="btn btn-link ml-2">Descargar CSV</CSVLink>
                            <button className="btn btn-info" onClick={getData}>Actualizar</button>
                        </div>
                    </div>
                </div>
            </div>
            <table className="table table-hover mt-2">
                <thead className="thead-dark">
                    <tr>
                        <th>Id</th>
                        <th>Genero</th>
                        <th>Edad</th>
                        <th>Signo Real</th>
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
                                        <td>{index + 1}</td>
                                        <td>{fila.genero}</td>
                                        <td>{fila.edad}</td>
                                        <td>{fila.signoZodiacal}</td>
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