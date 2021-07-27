import React from 'react'

const Success = () => {
    return (
        <>
          <div className="jumbotron bg-success text-light">
                <h1 className="display-4 text-bold">¡Gracias!</h1>
                <p className="lead">Tus respuestas fueron guardadas con exito</p>
                <hr className="my-4" />
                <p>Los datos recopilados son para entrenar un algoritmo de aprendizaje automatico con la finalidad de adivinar tu signo zodiacal.</p>
                <p>Gracias por tu cooperación, cualquier duda puedes contactar al creador a travez de Facebook.</p>
                <a className="btn btn-primary btn-lg" href="https://www.facebook.com/alan.mlozz/" role="button" target="_blank">Ir a Facebook</a>
            </div>  
        </>
    )
}

export default Success
