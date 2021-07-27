import React from 'react'

const PartTwo = ({ formData, setForm }) => {
    return (
        <>
            <div className="form-group">
                <label>¿Exteriorizas tus sentimientos?</label>
                <div className="form-check">
                    <input type="radio" id="yesExteriorizas" value="1" className="form-check-input" name="exteriorizaSentimientos" onChange={setForm} checked={formData.exteriorizaSentimientos === "1"} />
                    <label htmlFor="yesExteriorizas">Si</label>
                </div>
                <div className="form-check">
                    <input type="radio" id="noExteriorizas" value="0" className="form-check-input" name="exteriorizaSentimientos" onChange={setForm} checked={formData.exteriorizaSentimientos === "0"}  />
                    <label htmlFor="noExteriorizas">No</label>
                </div>
            </div>
            <div className="form-group">
                <label>¿Sientes temor a que las cosas cambien?</label>
                <div className="form-check">
                    <input type="radio" id="yesCambio" value="1" className="form-check-input" name="temorCambio" onChange={setForm} checked={formData.temorCambio === "1"}  />
                    <label htmlFor="yesCambio">Si</label>
                </div>
                <div className="form-check">
                    <input type="radio" id="noCambio" value="0" className="form-check-input" name="temorCambio" onChange={setForm} checked={formData.temorCambio === "0"} />
                    <label htmlFor="noCambio">No</label>
                </div>
            </div>
            <div className="form-group">
                <label>¿Te gusta la aventura y el riesgo?</label>
                <div className="form-check">
                    <input type="radio" id="yesAventura" value="1" className="form-check-input" name="aventuraRiesgo" onChange={setForm} checked={formData.aventuraRiesgo === "1"} />
                    <label htmlFor="yesAventura">Si</label>
                </div>
                <div className="form-check">
                    <input type="radio" id="noAventura" value="0" className="form-check-input" name="aventuraRiesgo" onChange={setForm} checked={formData.aventuraRiesgo === "0"} />
                    <label htmlFor="noAventura">No</label>
                </div>
            </div>
        </>
    )
}

export default PartTwo
