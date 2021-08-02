import React, { useState, useEffect } from 'react';
import PartOne from './PartOne';
import Swal from 'sweetalert2';
import { SaveData } from '../Queries/RequestInfo';
import { useHistory } from 'react-router-dom'

const Index = () => {
    const history = useHistory();

    const [formData, setFormData] = useState({
        signoZodiacal: "",
        caracteristica: "",
        caracter: "",
        relacionesAmorosas: "",
        debilidad: ""
    });
    const [isValidForm, setIsValidForm] = useState(false);

    const validForm = () => {
        if (formData.caracter.length > 0 && formData.caracteristica.length > 0 && formData.relacionesAmorosas.length > 0 && formData.signoZodiacal.length > 0 && formData.debilidad.length > 0) {
            return true
        }
        return false
    };

    useEffect(() => {
        if (validForm()) {
            setIsValidForm(true)
        } else {
            setIsValidForm(false)
        }
    }, [formData])

    const handleChangeForm = e => {
        const { name, value } = e.target;
        if(name === 'edad') {
            if(value.length <= 2) {
                setFormData({ ...formData, [name]: value });
            }
        } else {
            setFormData({ ...formData, [name]: value });
        }
    };

    const submitEvent = e => {
        e.preventDefault();
        if (isValidForm) {
            async function save() {
                let response = await SaveData(formData);
                if (response.data.ok === 'true') {
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
                <p>Los datos recopilados son para entrenar un algoritmo de aprendizaje automatico con la finalidad de que entienda como se agrupan los signos zodiacales</p>
                <p>Gracias por tu cooperación, cualquier duda puedes contactar al creador a travez de Facebook</p>
                <a className="btn btn-primary btn-lg" href="https://www.facebook.com/alan.mlozz/" role="button" target="_blank">Ir a Facebook</a>
            </div>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <div className="card mb-4">
                            <div className="card-body">
                                <form onSubmit={submitEvent}>
                                    <PartOne formData={formData} setForm={handleChangeForm} />
                                    {
                                        <button className="btn btn-success float-right" type="submit" disabled={!isValidForm}>Enviar</button>
                                    }
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Index;