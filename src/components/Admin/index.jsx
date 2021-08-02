import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import Log from './Log';
import GraficoDatos from './GraficoDatos';
import { GetData } from '../Queries/RequestInfo'

const Index = () => {
    const [position, setPosition] = useState(0);
    const [data, setData] = useState([]);
    
    const getData = () => {
        GetData()
            .then(response => setData(response.data))
    };

    useEffect(() => {
        getData();
    },[]);

    return (
        <>
            <Navbar location={position} setLocation={setPosition} />
            <div className="container mt-2">
                {
                    position === 0 ? <GraficoDatos data={data} getData={getData} /> : position === 1 ? <Log data={data} getData={getData} /> : null
                }
            </div>
        </>
    )
}

export default Index
