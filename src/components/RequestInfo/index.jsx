import React, { useState } from 'react';
import PartOne from './PartOne';
import PartTwo from './PartTwo';
import PartThree from './PartThree';
import PartFour from './PartFour';
import PartFive from './PartFive';
import Swal from 'sweetalert2';
import { SaveData } from '../Queries/RequestInfo';
import { useHistory } from 'react-router-dom'

const Index = () => {
    const [formPosition, setFormPosition] = useState(0);
    const history = useHistory();

    let def = {
        nombre: "",
        profesion: "",
        esExtrovertido: "",
        exteriorizaSentimientos: "",
        temorCambio: "",
        aventuraRiesgo: "",
        emocionesLunaLlena: "",
        disfrazaSentimientos: "",
        incomodidadReirLlorar: "",
        falsaFelicidad: "",
        comparteSentimientosPensamientos: "",
        personaRacional: "",
        vulnerableTemorAmor: "",
        preocupacionPercepcion: "",
        temoresIrracionales: ""
    }

    const [formData, setFormData] = useState(def);

    const backForm = () => {
        if (formPosition > 0) {
            setFormPosition(formPosition - 1);
        }
    };

    const nextForm = () => {
        if (formPosition < 4) {
            setFormPosition(formPosition + 1);
        }
    };

    const handleChangeForm = e => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const submitEvent = e => {
        e.preventDefault();
        if (formData.nombre && formData.aventuraRiesgo && formData.comparteSentimientosPensamientos && formData.disfrazaSentimientos && formData.emocionesLunaLlena && formData.esExtrovertido && formData.exteriorizaSentimientos && formData.falsaFelicidad && formData.incomodidadReirLlorar && formData.personaRacional && formData.preocupacionPercepcion && formData.profesion && formData.temorCambio && formData.temoresIrracionales && formData.vulnerableTemorAmor) {
            const data = {
                'nombre': formData.nombre,
                "profesion": formData.profesion,
                "esExtrovertido": formData.esExtrovertido,
                "exteriorizaSentimientos": formData.exteriorizaSentimientos,
                "temorCambio": formData.temorCambio,
                "aventuraRiesgo": formData.aventuraRiesgo,
                "emocionesLunaLlena": formData.emocionesLunaLlena,
                "disfrazaSentimientos": formData.disfrazaSentimientos,
                "incomodidadReirLlorar": formData.incomodidadReirLlorar,
                "falsaFelicidad": formData.falsaFelicidad,
                "comparteSentimientosPensamientos": formData.comparteSentimientosPensamientos,
                "personaRacional": formData.personaRacional,
                "vulnerableTemorAmor": formData.vulnerableTemorAmor,
                "preocupacionPercepcion": formData.preocupacionPercepcion,
                "temoresIrracionales": formData.temoresIrracionales
            }
            async function save() {
                let response = await SaveData(data);
                if(response.data.ok == 'true') {
                    history.push('request-success');
                } else {
                    Swal.fire({
                        title: '¡Ups!',
                        icon: 'error',
                        text: response.data.message
                    })
                }
            }
            save()
        } else {
            Swal.fire({
                title: '¡Espera!',
                icon: 'error',
                text: `Te falta rellenar algunos datos 🙁`
            })
        }
    };

    return (
        <>
            <div className="jumbotron">
                <h1 className="display-4">¡Bienvenido!</h1>
                <p className="lead">Este es un formulario simple, creado con la finalidad de recopilar datos para un proyecto universitario</p>
                <hr className="my-4" />
                <p>Los datos recopilados son para entrenar un algoritmo de aprendizaje automatico con la finalidad de adivinar tu signo zodiacal.</p>
                <p>Gracias por tu cooperación, cualquier duda puedes contactar al creador a travez de Facebook</p>
                <a className="btn btn-primary btn-lg" href="https://www.facebook.com/alan.mlozz/" role="button" target="_blank">Ir a Facebook</a>
            </div>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <div className="card mb-4">
                            <div className="card-body">
                                <form onSubmit={submitEvent}>
                                    {
                                        formPosition === 0 ? <PartOne formData={formData} setForm={handleChangeForm} /> :
                                            formPosition === 1 ? <PartTwo formData={formData} setForm={handleChangeForm} /> :
                                                formPosition === 2 ? <PartThree formData={formData} setForm={handleChangeForm} /> :
                                                    formPosition === 3 ? <PartFour formData={formData} setForm={handleChangeForm} /> :
                                                        formPosition === 4 ? <PartFive formData={formData} setForm={handleChangeForm} /> :
                                                            null
                                    }
                                    {formPosition >= 0 && formPosition < 4 && <button className="btn btn-info float-right" type="button" onClick={nextForm}>Siguiente</button>}
                                    {formPosition > 0 && <button className="btn btn-outline-secondary" type="button" onClick={backForm}>Regresar</button>}
                                </form>
                            </div>
                            <div className="card-footer">
                                <div className="progress">
                                    <div className="progress-bar" role="progressbar" style={{ width: `${(formPosition * 100) / 4}%` }} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">{`${(formPosition * 100) / 4}%`}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Index;