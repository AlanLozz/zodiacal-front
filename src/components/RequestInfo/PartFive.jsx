import React from 'react'

const PartFive = ({ formData, setForm }) => {
    return (
        <>
            <div className="form-group">
                <label>¿Te sientes vulnerable cuando experimentas temor o amor?</label>
                <div className="form-check">
                    <input type="radio" id="yesAmor" value="1" className="form-check-input" name="vulnerableTemorAmor" onChange={setForm} checked={formData.vulnerableTemorAmor === "1"} />
                    <label htmlFor="yesAmor">Si</label>
                </div>
                <div className="form-check">
                    <input type="radio" id="noAmor" value="0" className="form-check-input" name="vulnerableTemorAmor" onChange={setForm} checked={formData.vulnerableTemorAmor === "0"} />
                    <label htmlFor="noAmor">No</label>
                </div>
            </div>
            <div className="form-group">
                <label>¿Te preocupa comó te perciben los demás?</label>
                <div className="form-check">
                    <input type="radio" id="yesPerciben" value="1" className="form-check-input" name="preocupacionPercepcion" onChange={setForm} checked={formData.preocupacionPercepcion === "1"} />
                    <label htmlFor="yesPerciben">Si</label>
                </div>
                <div className="form-check">
                    <input type="radio" id="noPerciben" value="0" className="form-check-input" name="preocupacionPercepcion" onChange={setForm} checked={formData.preocupacionPercepcion === "0"} />
                    <label htmlFor="noPerciben">No</label>
                </div>
            </div>
            <div className="form-group">
                <label>En ocasiones, ¿Sientes temores irracionales</label>
                <div className="form-check">
                    <input type="radio" id="yesTemores" value="1" className="form-check-input" name="temoresIrracionales" onChange={setForm} checked={formData.temoresIrracionales === "1"} />
                    <label htmlFor="yesTemores">Si</label>
                </div>
                <div className="form-check">
                    <input type="radio" id="noTemores" value="0" className="form-check-input" name="temoresIrracionales" onChange={setForm} checked={formData.temoresIrracionales === "0"} />
                    <label htmlFor="noTemores">No</label>
                </div>
            </div>
            <button type="submit" className="btn btn-success float-right">Enviar</button>
        </>
    )
}

export default PartFive
