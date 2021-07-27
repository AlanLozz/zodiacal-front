import React from 'react';

const PartOne = ({ formData, setForm }) => {
    return (
        <>
            <div className="form-group">
                <label htmlFor="nombrePila">¿Cuál es tu nombre? </label>
                <input type="text" id="nombrePila" className="form-control" name="nombre" placeholder="Ej. Juan Perez" onChange={setForm} value={formData.nombre} autoFocus />
            </div>
            <div className="form-group">
                <label htmlFor="profesion">¿Cuál es tu profesión?</label>
                <input type="text" className="form-control" id="profesion" name="profesion" placeholder="Ej. Desarrollador de Software" onChange={setForm} value={formData.profesion} />
            </div>
            <div className="form-group">
                <label htmlFor="isExtrovertido">¿Te consideras una persona extrovertida?</label>
                <div className="form-check">
                    <input type="radio" id="yesExtrovertido" value="1" className="form-check-input" name="esExtrovertido" onChange={setForm} checked={formData.esExtrovertido === "1"} />
                    <label htmlFor="yesExtrovertido">Si</label>
                </div>
                <div className="form-check">
                    <input type="radio" id="noExtrovertido" value="0" className="form-check-input" name="esExtrovertido" onChange={setForm} checked={formData.esExtrovertido === "0"} />
                    <label htmlFor="noExtrovertido">No</label>
                </div>
            </div>
        </>
    )
}

export default PartOne
