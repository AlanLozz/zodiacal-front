import React, { useState, useEffect } from 'react';
import { Bubble } from 'react-chartjs-2';
import { getPuntos, getClusters } from '../Queries/RequestInfo';

const GraficoDatos = () => {
    const [signox, setSignox] = useState("");
    const [signoy, setSignoy] = useState("");
    const [random, setRandom] = useState(false);
    const [datosGrafica, setDatosGrafica] = useState([]);
    const [validarForm, setValidarForm] = useState([]);
    const [datosBrutos, setDatosBrutos] = useState([]);
    const [clusters, setClusters] = useState(2);

    useEffect(() => {
        if (signoy.length > 0 && signox.length > 0) {
            setValidarForm(true)
        } else {
            setValidarForm(false)
        }
    }, [signox, signoy]);

    const handleChange = e => {
        const { name, value } = e.target;
        if (name === "x") {
            setSignox(value)
        } else {
            setSignoy(value)
        }
        if (name === 'random') {
            setRandom(!random);
        }
    };

    const cargarDatos = e => {
        e.preventDefault();
        let obj = { "x": signox, "y": signoy, "random": random };
        getPuntos(obj)
            .then(res => {
                const { data } = res;
                const { x, y } = data;
                let Datos = [];
                for (let i = 0; i < x.length; i++) {
                    Datos.push({ x: x[i], y: y[i] })
                }
                setDatosGrafica([{
                    label: 'Datos',
                    data: Datos,
                    backgroundColor: '#00897b'
                }]);
                setDatosBrutos(Datos);
            });
    };

    const cargarClusters = e => {
        e.preventDefault();
        getClusters(datosBrutos, clusters)
            .then(response => {
                const { data } = response;
                setDatosGrafica([...datosGrafica, {
                    label: 'Clusters',
                    data,
                    backgroundColor: '#ff8a65'
                }])
            })
    };

    const changeClusters = e => {
        const { value } = e.target;
        if (value.length < 3 && value < 12) {
            setClusters(value);
        }
    };

    return (
        <div className="mt-2">
            <div className="row">
                <div className="col-12">
                    <div className="card">
                        <div className="card-body">
                            <div className="row">
                                <div className="col-md-4">
                                    <form onSubmit={cargarDatos}>
                                        <h5>Graficar Puntos</h5>
                                        <div className="form-group">
                                            <label htmlFor="">Eje X:</label>
                                            <select name="x" className="form-control" onChange={handleChange}>
                                                <option value="">Seleccionar</option>
                                                <option value="signoZodiacal">Signo Zodiacal</option>
                                                <option value="edad">Edad</option>
                                                <option value="caracter">Caracter</option>
                                                <option value="relacionesAmorosas">Relaciones Amorosas</option>
                                                <option value="caracteristica">Caracteristica</option>
                                            </select>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="">Eje Y:</label>
                                            <select name="y" className="form-control" onChange={handleChange}>
                                                <option value="">Seleccionar</option>
                                                <option value="signoZodiacal">Signo Zodiacal</option>
                                                <option value="edad">Edad</option>
                                                <option value="caracter">Caracter</option>
                                                <option value="relacionesAmorosas">Relaciones Amorosas</option>
                                                <option value="catacteristica">Caracteristica</option>
                                            </select>
                                        </div>
                                        <div className="form-group">
                                            <div className="custom-control custom-switch">
                                                <input type="checkbox" className="custom-control-input" id="customSwitch1" defaultChecked={random} name="random" onChange={handleChange} />
                                                <label className="custom-control-label" for="customSwitch1">Randomizar Datos</label>
                                            </div>
                                            <span style={{ fontSize: 12, color: 'gray' }}>Esto hace ver más reales los datos</span>
                                        </div>
                                        <button className="btn btn-success" type="submit" disabled={!validarForm}>Cargar Datos</button>
                                    </form>
                                    {
                                        datosBrutos.length > 0 &&
                                        (
                                            <>
                                                <hr />
                                                <form onSubmit={cargarClusters}>
                                                    <h5>Calcular Centroides</h5>
                                                    <div className="form-group">
                                                        <label htmlFor="">Cantidad de centroides: </label>
                                                        <input type="number" className="form-control" placeholder="Ej. 4" value={clusters} onChange={changeClusters} />
                                                        <span style={{ color: 'gray', fontSize: 12 }}>Mínimo 2, máximo 12</span> <br />
                                                        <button type="submit" className="btn btn-success mt-2">Calcular Clusters</button>
                                                    </div>
                                                </form>
                                            </>
                                        )
                                    }
                                </div>
                                <div className="col-md-8">
                                    <Bubble key={1} height={400} width={400} data={{ datasets: datosGrafica }} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GraficoDatos;