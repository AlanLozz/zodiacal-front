import React from 'react'

const PartThree = ({ formData, setForm }) => {
    return (
        <>
            <div className="form-group">
                <label>¿Tus emociones se ven afectadas cuando hay luna llena?</label>
                <div className="form-check">
                    <input type="radio" id="yesLuna" value="1" className="form-check-input" name="emocionesLunaLlena" onChange={setForm} checked={formData.emocionesLunaLlena === "1"} />
                    <label htmlFor="yesLuna">Si</label>
                </div>
                <div className="form-check">
                    <input type="radio" id="noLuna" value="0" className="form-check-input" name="emocionesLunaLlena" onChange={setForm} checked={formData.emocionesLunaLlena === "0"} />
                    <label htmlFor="noLuna">No</label>
                </div>
            </div>
            <div className="form-group">
                <label>¿Reprimes o disfrazas tus sentimientos?</label>
                <div className="form-check">
                    <input type="radio" id="yesReprime" value="1" className="form-check-input" name="disfrazaSentimientos" onChange={setForm} checked={formData.disfrazaSentimientos === "1"} />
                    <label htmlFor="yesReprime">Si</label>
                </div>
                <div className="form-check">
                    <input type="radio" id="noReprime" value="0" className="form-check-input" name="disfrazaSentimientos" onChange={setForm} checked={formData.disfrazaSentimientos === "0"} />
                    <label htmlFor="noReprime">No</label>
                </div>
            </div>
            <div className="form-group">
                <label>¿Sientes incomodidad cuandó te ven reír o llorar?</label>
                <div className="form-check">
                    <input type="radio" id="yesReir" value="1" className="form-check-input" name="incomodidadReirLlorar" onChange={setForm} checked={formData.incomodidadReirLlorar === "1"} />
                    <label htmlFor="yesReir">Si</label>
                </div>
                <div className="form-check">
                    <input type="radio" id="noReir" value="0" className="form-check-input" name="incomodidadReirLlorar" onChange={setForm} checked={formData.incomodidadReirLlorar === "0"} />
                    <label htmlFor="noReir">No</label>
                </div>
            </div>
        </>
    )
}

export default PartThree
