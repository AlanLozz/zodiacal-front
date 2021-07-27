import React from 'react'

const PartFour = ({formData, setForm}) => {
    return (
        <>
            <div className="form-group">
                <label>Cuando estás triste ¿Aparentas felicidad?</label>
                <div className="form-check">
                    <input type="radio" id="yesFelicidad" value="1" className="form-check-input" name="falsaFelicidad" onChange={setForm} checked={formData.falsaFelicidad === "1"} />
                    <label htmlFor="yesFelicidad">Si</label>
                </div>
                <div className="form-check">
                    <input type="radio" id="noFelicidad" value="0" className="form-check-input" name="falsaFelicidad" onChange={setForm} checked={formData.falsaFelicidad === "0"}  />
                    <label htmlFor="noFelicidad">No</label>
                </div>
            </div>
            <div className="form-group">
                <label>¿Disfrutas compartiendo tus sentimientos y pensamientos?</label>
                <div className="form-check">
                    <input type="radio" id="yesPensamientos" value="1" className="form-check-input" name="comparteSentimientosPensamientos" onChange={setForm} checked={formData.comparteSentimientosPensamientos === "1"}  />
                    <label htmlFor="yesPensamientos">Si</label>
                </div>
                <div className="form-check">
                    <input type="radio" id="noPensamientos" value="0" className="form-check-input" name="comparteSentimientosPensamientos" onChange={setForm} checked={formData.comparteSentimientosPensamientos === "0"}  />
                    <label htmlFor="noPensamientos">No</label>
                </div>
            </div>
            <div className="form-group">
                <label>¿Te consideras una persona racional?</label>
                <div className="form-check">
                    <input type="radio" id="yesRacional" value="1" className="form-check-input" name="personaRacional" onChange={setForm} checked={formData.personaRacional === "1"}  />
                    <label htmlFor="yesRacional">Si</label>
                </div>
                <div className="form-check">
                    <input type="radio" id="noRacional" value="0" className="form-check-input" name="personaRacional" onChange={setForm} checked={formData.personaRacional === "0"}  />
                    <label htmlFor="noRacional">No</label>
                </div>
            </div>
        </>
    )
}

export default PartFour
