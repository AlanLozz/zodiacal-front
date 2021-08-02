import React from 'react';
import { Bubble } from 'react-chartjs-2'

const GraficoDatos = ({data, getData}) => {
    return (
        <div className="mt-2">
            <div className="row">
                <div className="col-12">
                    <div className="card">
                        <div className="card-body">
                            <div className="row">
                                <div className="col-md-4">
                                    <div className="list-group">
                                        {
                                            data.length > 0 &&
                                                data.map((data, index)=>{
                                                    return <button className="list-group-item list-group-item-action" key={index}>Persona {index + 1} {data.signoZodiacal}</button>
                                                })
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GraficoDatos
