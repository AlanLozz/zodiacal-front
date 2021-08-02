import React from 'react';

const PartOne = ({ formData, setForm }) => {
    return (
        <>
            <div className="form-group">
                <label htmlFor="nombrePila">¿Cuál es tu signo zodiacal?</label>
                <select name="signoZodiacal" className="form-control" onChange={setForm} autoFocus>
                    <option value="">Seleccionar</option>
                    <option value="aries" selected={formData.signoZodiacal == 'aries'}>Aries</option>
                    <option value="tauro" selected={formData.signoZodiacal == 'tauro'}>Tauro</option>
                    <option value="geminis" selected={formData.signoZodiacal == 'geminis'}>Géminis</option>
                    <option value="cancer" selected={formData.signoZodiacal == 'cancer'}>Cáncer</option>
                    <option value="leo" selected={formData.signoZodiacal == 'leo'}>Leo</option>
                    <option value="virgo" selected={formData.signoZodiacal == 'virgo'}>Virgo</option>
                    <option value="libra" selected={formData.signoZodiacal == 'libra'}>Libra</option>
                    <option value="escorpio" selected={formData.signoZodiacal == 'escorpio'}>Escorpio</option>
                    <option value="sagitario" selected={formData.signoZodiacal == 'sagitario'}>Sagitario</option>
                    <option value="capricornio" selected={formData.signoZodiacal == 'capricornio'}>Capricornio</option>
                    <option value="acuario" selected={formData.signoZodiacal == 'acuario'}>Acuario</option>
                    <option value="piscis" selected={formData.signoZodiacal == 'piscis'}>Piscis</option>
                </select>
            </div>
            <div className="form-group">
                <label htmlFor="">¿Cúal de las siguientes características consideras que te representa más?</label>
                <select className="form-control" name="caracteristica" onChange={setForm}>
                    <option value="">Seleccionar</option>
                    <option value="acuario" selected={formData.caracteristica == 'acuario'}>Compasiva</option>
                    <option value="piscis" selected={formData.caracteristica == 'piscis'}>Empatica</option>
                    <option value="cancer" selected={formData.caracteristica == 'cancer'}>Desesperada</option>
                    <option value="sagitario" selected={formData.caracteristica == 'sagitario'}>Agradecida</option>
                    <option value="escorpio" selected={formData.caracteristica == 'escorpio'}>Centrada</option>
                    <option value="libra" selected={formData.caracteristica == 'libra'}>Autocritica</option>
                </select>
            </div>
            <div className="form-group">
                <label htmlFor="">¿Qué tipo de carácter consideras que te representa?</label>
                <select className="form-control" name="caracter" onChange={setForm}>
                    <option value="">Seleccionar</option>
                    <option value="acuario" selected={formData.caracter == 'acuario'}>Carácter sensible</option>
                    <option value="piscis" selected={formData.caracter == 'piscis'}>Carácter apasionado</option>
                    <option value="cancer" selected={formData.caracter == 'cancer'}>Carácter tranquilo</option>
                    <option value="sagitario" selected={formData.caracter == 'sagitario'}>Carácter amorfo (Se refiere a personas atrabancadas)</option>
                    <option value="escorpio" selected={formData.caracter == 'escorpio'}>Carácter fuerte</option>
                    <option value="libra" selected={formData.caracter == 'libra'}>Carácter flemático (Se refiere a personas muy pacientes)</option>
                </select>
            </div>
            <div className="form-group">
                <label htmlFor="">¿Cómo te consideras en tus relaciones amorosas?</label>
                <select className="form-control" name="relacionesAmorosas" onChange={setForm}>
                    <option value="">Seleccionar</option>
                    <option value="acuario" selected={formData.relacionesAmorosas == 'acuario'}>Le das demasiada importancia a la honestidad</option>
                    <option value="piscis" selected={formData.relacionesAmorosas == 'piscis'}>Te gusta la conexión profunda con tu pareja</option>
                    <option value="cancer" selected={formData.relacionesAmorosas == 'cancer'}>Valoras los sentimientos por encima de cualquier cosa</option>
                    <option value="sagitario" selected={formData.relacionesAmorosas == 'sagitario'}>No eres estable en el amor</option>
                    <option value="escorpio" selected={formData.relacionesAmorosas == 'escorpio'}>Eres coqueto y seductor</option>
                    <option value="libra" selected={formData.relacionesAmorosas == 'libra'}>Buscas conexiones profundas y emocionales</option>
                </select>
            </div>
            <div className="form-group">
                <label htmlFor="">¿Qué debilidad te caracteriza?</label>
                <select className="form-control" name="debilidad" onChange={setForm}>
                    <option value="">Seleccionar</option>
                    <option value="acuario" selected={formData.debilidad == 'acuario'}>Resolver problemas</option>
                    <option value="piscis" selected={formData.debilidad == 'piscis'}>La tristeza</option>
                    <option value="cancer" selected={formData.debilidad == 'cancer'}>Por tus seres queridos o familia</option>
                    <option value="sagitario" selected={formData.debilidad == 'sagitario'}>Estar en desacuerdo con los demás</option>
                    <option value="escorpio" selected={formData.debilidad == 'escorpio'}>Lento para confiar</option>
                    <option value="libra" selected={formData.debilidad == 'libra'}>Tomar decisiones</option>
                </select>
            </div>
        </>
    )
}

export default PartOne
